package no.ntnu.webappgroup03.controllers;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import java.util.Optional;
import no.ntnu.webappgroup03.dto.HotelDto;
import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.service.AccessUserService;
import no.ntnu.webappgroup03.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;

/**
 * REST API Controller for hotel collection. Code adapted from <a
 * href="https://github.com/strazdinsg/app-dev/blob/main/security-demos/07-backend-frontend-jwt-auth/backend/src/main/java/no/ntnu/controllers/ProductController.java">ProductController.java</a>
 */
@CrossOrigin
@RestController
public class HotelController {

  @Autowired
  private HotelService hotelService;
  @Autowired
  private AccessUserService userService;

  /**
   * Get all hotels. HTTP GET to /hotels
   *
   * @return List of all hotels currently stored in the collection
   */
  @GetMapping("/api/hotels")
  @Operation(summary = "Get all hotels", description = "Get all hotels available")
  public Iterable<Hotel> getAll() {
    User sessionUser = userService.getSessionUser();
    if (sessionUser == null) {
      return this.hotelService.getHotelsForUser(false);
    } else {
      boolean isAdmin = sessionUser.isAdmin();
      return this.hotelService.getHotelsForUser(isAdmin);
    }
  }

  /**
   * Get a specific hotel.
   *
   * @param id ID` of the hotel to be returned
   * @return Hotel with the given ID or status 404 (Not Found)
   */
  @GetMapping("/api/hotels/{id}")
  @Operation(summary = "Get hotel by id", description = "Get one hotel with the specified id")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "Success"),
      @ApiResponse(responseCode = "404", description = "Hotel not found"),
  })
  public ResponseEntity<?> getOne(@PathVariable int id) {
    ResponseEntity<?> response;
    Optional<Hotel> hotel = this.hotelService.getOne(id);
    if (hotel.isPresent()) {
      HotelDto hotelDto = new HotelDto(hotel.get().getId(), hotel.get().getHotelName(),
          hotel.get().getDescription(), hotel.get().getLocation(), hotel.get().getRoomTypes(),
          hotel.get().getPrice(), hotel.get().getProviders(), hotel.get().isActive(),
          hotel.get().getRating(),
          hotel.get().getReview());
      response = new ResponseEntity<>(hotelDto, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>("Hotel with id: " + id + " not found",
          HttpStatus.NOT_FOUND);
    }
    return response;
  }

  /**
   * Update hotel details information.
   *
   * @param id for which hotel to update
   * @return HTTP 200 OK or error code with error message
   */
  @PutMapping("/api/hotels/{id}")
  @Operation(
      summary = "Updates hotel information", description = "Updates hotel information")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "Hotel updated successfully"),
      @ApiResponse(responseCode = "400", description = "Hotel data not supplied"),
      @ApiResponse(responseCode = "401", description = "Hotel data accessible only to authenticated users"),
      @ApiResponse(responseCode = "403", description = "Hotel data for other users not accessible"),
      @ApiResponse(responseCode = "500", description = "Could not update Hotel data")
  })
  public ResponseEntity<String> updateHotel(@PathVariable int id,
      @RequestBody HotelDto hotelData) {
    ResponseEntity<String> response;
    Optional<Hotel> hotel = this.hotelService.getOne(id);
    User sessionUser = this.userService.getSessionUser();
    if (sessionUser != null && sessionUser.isAdmin()) {
      if (hotelData != null && hotel.isPresent()) {
        if (this.hotelService.updateHotel(id, hotelData)) {
          response = new ResponseEntity<>("", HttpStatus.OK);
        } else {
          response = new ResponseEntity<>("Could not update Hotel data",
              HttpStatus.INTERNAL_SERVER_ERROR);
        }
      } else {
        response = new ResponseEntity<>("Hotel data not supplied", HttpStatus.BAD_REQUEST);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Hotel data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("Hotel data for other users not accessible",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }

  /**
   * Partially update hotel details information.
   *
   * @param id     for which hotel to update
   * @param active containing the fields to update
   * @return HTTP 200 OK or error code with error message
   */
  @PatchMapping("api/hotels/{id}")
  @Operation(summary = "Update the active status for the hotels", description =
      "Update the active status for the hotels")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "Hotel status updated successfully"),
      @ApiResponse(responseCode = "401", description = "Hotel data accessible only to authenticated users"),
      @ApiResponse(responseCode = "403", description = "User data for other users not accessible"),
      @ApiResponse(responseCode = "404", description = "Hotel data for other users not accessible")
  })
  public ResponseEntity<?> updateHotelStatus(@PathVariable int id,
      @RequestBody boolean active) {
    ResponseEntity<?> response = null;
    User sessionUser = this.userService.getSessionUser();
    Optional<Hotel> hotel = this.hotelService.getOne(id);

    if (sessionUser != null && sessionUser.isAdmin()) {
      if (hotel.isEmpty()) {
        response = new ResponseEntity<>("Hotel not found", HttpStatus.NOT_FOUND);
      }
      if (hotel.isPresent()) {
        this.hotelService.updateActiveStatus(hotel.get(), active);
        response = new ResponseEntity<>("", HttpStatus.OK);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Hotel data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("Hotel data for other users not accessible",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }


  /**
   * If a user is admin, add a new hotel.
   *
   * @param hotelDto hotel wanted to create.
   * @return HTTP 200 OK or error code with error message.
   */
  @PostMapping("/api/hotels")
  @Operation(summary = "Creates a new hotel", description = "Creates a new hotel if the admin is logged in")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "Hotel created successfully"),
      @ApiResponse(responseCode = "400", description = "Hotel data not supplied"),
      @ApiResponse(responseCode = "401", description = "Adding hotel accessible only to authenticated users"),
      @ApiResponse(responseCode = "403", description = "Hotel data for other users not accessible")
  })
  public ResponseEntity<?> add(@RequestBody HotelDto hotelDto) {
    ResponseEntity<?> response;
    User sessionUser = this.userService.getSessionUser();
    if (sessionUser != null && sessionUser.isAdmin()) {
      if (hotelDto != null) {
        Hotel hotel = new Hotel(hotelDto.getHotelName(), hotelDto.getDescription(),
            hotelDto.getLocation(), hotelDto.getRoomType(), hotelDto.getPrice(),
            hotelDto.getProviders(), hotelDto.getRating(), hotelDto.getReview());
        this.hotelService.add(hotel);
        response = new ResponseEntity<>(hotel, HttpStatus.OK);
      } else {
        response = new ResponseEntity<>("Hotel data not supplied", HttpStatus.BAD_REQUEST);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Adding hotel accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("Hotel data for other users not accessible",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }

  /**
   * Deletes a hotel if the user is an admin.
   *
   * @param id the hotel to delete
   * @return HTTP 200 OK or error code with error message.
   */
  @DeleteMapping("/api/hotels/{id}")
  @Operation(summary = "Deletes a hotel by user id", description = "Deletes a hotel by its user id")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "Hotel deleted"),
      @ApiResponse(responseCode = "400", description = "Hotel not present"),
      @ApiResponse(responseCode = "401", description = "Hotel data accessible only to authenticated users"),
      @ApiResponse(responseCode = "403", description = "Hotel data for other users note accessible"),
      @ApiResponse(responseCode = "500", description = "Could not delete hotel")
  })
  public ResponseEntity<String> delete(@PathVariable int id) {
    ResponseEntity<String> response;
    User sessionUser = this.userService.getSessionUser();
    if (sessionUser != null && sessionUser.isAdmin()) {
      Optional<Hotel> hotel = this.hotelService.getOne(id);
      if (hotel != null && hotel.isPresent()) {
        if (this.hotelService.delete(id)) {
          response = new ResponseEntity<>("", HttpStatus.OK);
        } else {
          response = new ResponseEntity<>("Could not delete hotel",
              HttpStatus.INTERNAL_SERVER_ERROR);
        }
      } else {
        response = new ResponseEntity<>("Hotel not present", HttpStatus.BAD_REQUEST);
      }

    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Hotel data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("Hotel data for other users note accessible",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }

}