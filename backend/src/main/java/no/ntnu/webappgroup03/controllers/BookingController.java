package no.ntnu.webappgroup03.controllers;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.webappgroup03.dto.BookingDto;
import no.ntnu.webappgroup03.model.Booking;
import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.service.AccessUserService;
import no.ntnu.webappgroup03.service.BookingService;
import no.ntnu.webappgroup03.service.HotelService;
import no.ntnu.webappgroup03.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api/bookings")
public class BookingController {

  @Autowired
  private BookingService bookingService;
  @Autowired
  private AccessUserService accessUserService;
  @Autowired
  private HotelService hotelService;

  @Autowired
  private UserService userService;



  /**
   * Get all bookings.
   * HTTP GET to /
   *
   * @return List of all bookings currently stored in the collection
   */
  @GetMapping
  @Operation(
      summary = "Get all the bookings"
  )
  public Iterable<Booking> getAll() {
    return bookingService.getAll();
  }

  /**
   * Get a specific booking.
   * @param id ID of the booking to be returned
   * @return booking with the given ID or status 404 (Not Found)
   */
  @GetMapping("/{id}")
  @Operation(
      summary = "Get one specific booking"
  )
  public ResponseEntity<?> getOne(@PathVariable int id,
                                  @RequestBody String email) {
    ResponseEntity<?> response;
    Optional<Booking> booking = this.bookingService.getOne(id);
    if (booking.isPresent()) {
      BookingDto bookingDto = new BookingDto(
          booking.get().getStartDate(), booking.get().getEndDate());
      response = new ResponseEntity<>(bookingDto, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>("Booking with id " + id + "not found", HttpStatus.NOT_FOUND);
    }
    return response;
  }


  /**
   * Update booking details information.
   *
   * @param id for which booking to update
   * @return HTTP 200 OK or error code with error message
   */
  @PutMapping("/{id}")
  @Operation(
      summary = "Updates the booking "
  )
  public ResponseEntity<String> updateBooking(@PathVariable int id,
                                              @RequestBody BookingDto bookingData) {
    ResponseEntity<String> response;
    Optional<Booking> booking = this.bookingService.getOne(id);
    User sessionUser = this.accessUserService.getSessionUser();
    if (sessionUser != null ) {
      if (bookingData != null && booking.isPresent()) {
        if (this.bookingService.updateBooking(id, bookingData)) {
          response = new ResponseEntity<>("", HttpStatus.OK);
        } else  {
          response = new ResponseEntity<>("Could not update Booking data",
              HttpStatus.INTERNAL_SERVER_ERROR);
        }
      } else {
        response = new ResponseEntity<>("Booking data not supplied", HttpStatus.BAD_REQUEST);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Booking data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("Booking data for other users not accessible",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }

  /**
   * If the user is registered, add a new booking.
   *
   * @param bookingDto booking wanted to create.
   * @return HTTP 200 OK or error code with error message.
   */
  @PostMapping("/{hotelId}")
  @Operation(
      summary = "Add a new booking if the user is registered"
  )
  public ResponseEntity<?> add(@PathVariable int hotelId, @RequestBody BookingDto bookingDto) {
    ResponseEntity<?> response;
    User sessionUser = this.accessUserService.getSessionUser();
    if (sessionUser != null ) {
      if (bookingDto != null) {
        Booking booking = new Booking(
                bookingDto.getStartDate(), bookingDto.getEndDate());
        booking.setUser(sessionUser);
        Optional<Hotel> hotel = hotelService.getOne(hotelId);
        if (hotel.isPresent()) {
          booking.setHotel(hotel.get());
          try {
            this.bookingService.addBooking(bookingDto);
            response = new ResponseEntity<>(booking, HttpStatus.OK);
          } catch (IllegalArgumentException e) {
            response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
          }

        } else {
          response = new ResponseEntity<>("Hotel Not found", HttpStatus.NOT_FOUND);
        }
      } else {
        response = new ResponseEntity<>("Booking data not supplied", HttpStatus.BAD_REQUEST);
      }
    } else {
      response = new ResponseEntity<>("Booking data for no registered users not accessible",
              HttpStatus.FORBIDDEN);
    }
    return response;
  }

  /**
   * Deletes a booking if the user is an admin.
   *
   * @param id the booking to delete
   * @return HTTP 200 OK or error code with error message.
   */
  @DeleteMapping("/{id}")
  @Operation(
      summary = "Deletes a booking if the user is admin"
  )
  public ResponseEntity<String> delete(@PathVariable int id) {
    ResponseEntity<String> response;
    User sessionUser = this.accessUserService.getSessionUser();
    if (sessionUser != null && sessionUser.isAdmin()) {
      Optional<Booking> booking = this.bookingService.getOne(id);
      if (booking != null && booking.isPresent()) {
        if (this.bookingService.delete(id)) {
          response = new ResponseEntity<>("", HttpStatus.OK);
        } else {
          response = new ResponseEntity<>("Could not delete booking",
              HttpStatus.INTERNAL_SERVER_ERROR);
        }
      } else {
        response = new ResponseEntity<>("User not present", HttpStatus.BAD_REQUEST);
      }

    } else if (sessionUser == null) {
      response = new ResponseEntity<>("User data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("User data for other users note accessible",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }

  /**
   * Get a specific users booking
   * @return bookings from the specified user
   */
  @GetMapping("/me")
  @Operation(summary = "Get one specific booking", description = "Get bookings from logged in user")
  public Iterable<Booking> getByCurrentUser() {
    User sessionUser = this.accessUserService.getSessionUser();
     return this.bookingService.getByUser(sessionUser);
  }



}
