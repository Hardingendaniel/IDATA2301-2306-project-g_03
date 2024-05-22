package no.ntnu.webappgroup03.controllers;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.webappgroup03.dto.SignupDto;
import no.ntnu.webappgroup03.dto.UserProfileDto;
import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.repository.UserRepository;
import no.ntnu.webappgroup03.service.AccessUserService;
import no.ntnu.webappgroup03.service.HotelService;
import no.ntnu.webappgroup03.service.UserService;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST API Controller serving endpoints for users Code adapted from <a
 * href="https://github.com/strazdinsg/app-dev/blob/main/security-demos/07-backend-frontend-
 * jwt-auth/backend/src/main/java/no/ntnu/controllers/UserController.java">UserController.java</a>
 */
@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

  @Autowired
  private UserService userService;
  @Autowired
  private AccessUserService accessUserService;
  @Autowired
  private HotelService hotelService;
  @Autowired
  private UserRepository userRepository;

  /**
   * Get all users. HTTP GET to /
   *
   * @return List of all users currently stored in the collection
   */
  @GetMapping("/users")
  @Operation(summary = "Get all profiles", description = "Get all profiles available")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "Success"),
      @ApiResponse(responseCode = "401", description = "User data accessible only to authenticated users"),
      @ApiResponse(responseCode = "403", description = "User data for other users not accessible"),
  })
  public ResponseEntity<?> getAll() {
    ResponseEntity<?> response;
    User sessionUser = accessUserService.getSessionUser();
    if (sessionUser != null) {
      if (sessionUser.isAdmin()) {
        List<UserProfileDto> users = this.userService.getAllUsers();
        response = new ResponseEntity<>(users, HttpStatus.OK);
      } else {
        response = new ResponseEntity<>("User data for other users not accessible",
            HttpStatus.FORBIDDEN);
      }
    } else {
      response = new ResponseEntity<>("User data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    }
    return response;
  }

  @GetMapping("/users/{email}")
  @Operation(summary = "Get profile by email", description = "Get a profile with the specified email")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "Success"),
      @ApiResponse(responseCode = "400", description = "Could not fetch user information"),
      @ApiResponse(responseCode = "401", description = "User data accessible only to authenticated users"),
      @ApiResponse(responseCode = "403", description = "User data for other users not accessible"),
  })
  public ResponseEntity<?> getProfileWithMail(@PathVariable String email) {
    ResponseEntity<?> response;
    User sessionUser = accessUserService.getSessionUser();
    if (sessionUser != null) {
      Optional<User> user = this.userService.findUserByEmail(email);
      if (user.isPresent()) {
        if (sessionUser.getEmail().equals(email) || sessionUser.isAdmin()) {
          UserProfileDto profile = new UserProfileDto(user.get().getId(), user.get().getFirstName(),
              user.get().getLastName(), user.get().getEmail(), user.get().getPhoneNumber(),
              user.get().isActive());
          response = new ResponseEntity<>(profile, HttpStatus.OK);
        } else {
          response = new ResponseEntity<>("User data for other users not accessible",
              HttpStatus.FORBIDDEN);
        }
      } else {
        response = new ResponseEntity<>("Could not fetch user information",
            HttpStatus.BAD_REQUEST);
      }
    } else {
      response = new ResponseEntity<>("User data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    }
    return response;
  }


  /**
   * Method that creates a new user, if the admin is logged in.
   *
   * @param signupData the user to be created.
   * @return returns the new user.
   */
  @PostMapping("/users")
  @Operation(summary = "Creates a new user", description = "Creates a new user if the admin is logged in")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "User created successfully"),
      @ApiResponse(responseCode = "400", description = "User data not supplied"),
      @ApiResponse(responseCode = "401", description = "Adding user accessible only to authenticated users"),
      @ApiResponse(responseCode = "403", description = "User data for other users not accessible")
  })
  public ResponseEntity<?> add(@RequestBody SignupDto signupData) {
    ResponseEntity<?> response;
    User sessionUser = this.accessUserService.getSessionUser();
    if (sessionUser != null && sessionUser.isAdmin()) {
      if (signupData != null) {
        User user = new User(signupData.getFirstName(), signupData.getLastName(),
            signupData.getEmail(), signupData.getPhoneNumber(), signupData.getPassword());
        this.userService.add(user);
        response = new ResponseEntity<>(user, HttpStatus.OK);
      } else {
        response = new ResponseEntity<>("User data not supplied", HttpStatus.BAD_REQUEST);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Adding user accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("User data for other users not accessible",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }

  /**
   * Updates an already existing user with user information (not password).
   *
   * @param email    the email to the user to change
   * @param userData the new userdata for the user
   * @return the new user
   */
  @PutMapping("/users/{email}")
  @Operation(
      summary = "Updates user information", description = "Updates user information, not password")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "User updated successfully"),
      @ApiResponse(responseCode = "404", description = "User data not present"),
      @ApiResponse(responseCode = "401", description = "User data accessible only to authenticated users"),
      @ApiResponse(responseCode = "403", description = "User data for other users not accessible")
  })
  public ResponseEntity<?> updateUser(@PathVariable String email,
      @RequestBody UserProfileDto userData) {
    ResponseEntity<?> response;
    User sessionUser = this.accessUserService.getSessionUser();
    Optional<User> user = this.userService.findUserByEmail(email);
    if (sessionUser != null && sessionUser.getEmail().equals(email)) {
      if (userData != null && user.isPresent()) {
        this.accessUserService.updateProfile(user.get(), userData);
        response = new ResponseEntity<>("", HttpStatus.OK);
      } else {
        response = new ResponseEntity<>("user data not present", HttpStatus.NOT_FOUND);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("User data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("User data for other users not accessible",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }

  /**
   * Updates the users password
   *
   * @param email    the email to the user to change password.
   * @param password the new password for the user
   * @return the new user with updated password.
   */
  @PatchMapping("/users/{email}")
  @Operation(summary = "Update user password by email", description = "Updates the user password with the specified email")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "User password updated"),
      @ApiResponse(responseCode = "400", description = "Password cannot be empty"),
      @ApiResponse(responseCode = "401", description = "User data accessible only to authenticated users"),
      @ApiResponse(responseCode = "404", description = "User not found")
  })
  public ResponseEntity<?> updatePassword(@PathVariable String email,
      @RequestBody String password) {
    ResponseEntity<?> response = null;
    User sessionUser = this.accessUserService.getSessionUser();
    Optional<User> user = this.userService.findUserByEmail(email);

    if (sessionUser == null) {
      response = new ResponseEntity<>("User data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    }

    if (user.isEmpty()) {
      response = new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    if (password == null || password.isEmpty()) {
      response = new ResponseEntity<>("Password cannot be empty", HttpStatus.BAD_REQUEST);
    }
    if (user.isPresent()) {
      this.accessUserService.updateUserPassword(user.get(), password);
      response = new ResponseEntity<>("", HttpStatus.OK);
    }

    return response;
  }

  /**
   * Deletes a user if the logged-in user is an admin.
   *
   * @param id id of the user to delete
   * @return HTTP 200 OK or error code with error message.
   */
  @DeleteMapping("/users/{id}")
  @Operation(summary = "Deletes a user by user id", description = "Deletes a user by its user id")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "User deleted"),
      @ApiResponse(responseCode = "400", description = "Hotel not present"),
      @ApiResponse(responseCode = "401", description = "Hotel data accessible only to authenticated users"),
      @ApiResponse(responseCode = "403", description = "Hotel data for other users note accessible"),
      @ApiResponse(responseCode = "500", description = "Could not delete hotel")
  })
  public ResponseEntity<String> delete(@PathVariable int id) {
    ResponseEntity<String> response;
    User sessionUser = this.accessUserService.getSessionUser();
    if (sessionUser != null && sessionUser.isAdmin()) {
      Optional<User> user = this.userService.findUserById(id);
      if (user != null && user.isPresent()) {
        if (this.userService.deleteUser(id)) {
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

  /**
   * Toggles the hotel from favorite to not.
   *
   * @return HTTP 200 OK or error code with error message.
   */
  @PutMapping("/favorites/{hotelId}")
  @Operation(summary = "Toggle a hotel between favorite or not", description =
      "Toggle between add or remove a hotel from favorites")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "Successfully toggled"),
      @ApiResponse(responseCode = "401", description = "Hotel data accessible only to authenticated users"),
      @ApiResponse(responseCode = "404", description = "Hotel not found"),
  })
  public ResponseEntity<String> toggleFavorite(@PathVariable int hotelId) {
    ResponseEntity<String> response;
    User sessionUser = this.accessUserService.getSessionUser();
    if (sessionUser != null) {
      Optional<Hotel> hotel = hotelService.getOne(hotelId);
      if (hotel.isPresent()) {
        if (!sessionUser.getFavorites().contains(hotel.get())) {
          sessionUser.addToFavorites(hotel.get());
        } else {
          sessionUser.removeFromFavorites(hotel.get());
        }
        userRepository.save(sessionUser);
        response = new ResponseEntity<>("", HttpStatus.OK);
      } else {
        response = new ResponseEntity<>("Hotel not found", HttpStatus.NOT_FOUND);
      }
    } else {
      response = new ResponseEntity<>("Hotel data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    }
    return response;
  }

  /**
   * Returns all favorites to the user currently logged in.
   *
   * @return HTTP 200 OK or error code with error message.
   */
  @GetMapping("/favorites")
  @Operation(summary = "Get all the favorites hotel from user", description =
      "Get all the favorites hotels for the logged in")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "List of all favorite hotels"),
      @ApiResponse(responseCode = "401", description = "User must be logged in")
  })
  public ResponseEntity<?> getFavoritesForUser() {
    ResponseEntity<?> response;
    User sessionUser = accessUserService.getSessionUser();
    if (sessionUser != null) {
      Set<Hotel> favorites = sessionUser.getFavorites();
      List<Hotel> sortedFavorites = new ArrayList<>(favorites);
      sortedFavorites.sort(Comparator.comparing(Hotel::getId));
      response = new ResponseEntity<>(sortedFavorites, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>("User must be logged in", HttpStatus.UNAUTHORIZED);
    }
    return response;
  }

  /**
   * Retrieves the favorite status of a specific hotel for the authenticated user.
   *
   * @param hotelId the id of the hotel
   * @return HTTP 200 OK or error code with error message.
   */
  @GetMapping("/favorites/{hotelId}")
  @Operation(
      summary = "Gets the favorite status of a specific hotel for authenticated user"
  )
  public ResponseEntity<?> getFavoriteStatus(@PathVariable int hotelId) {
    ResponseEntity<?> response;
    User sessionUser = this.accessUserService.getSessionUser();
    if (sessionUser != null) {
      Optional<Hotel> hotel = hotelService.getOne(hotelId);
      if (hotel.isPresent()) {
        boolean isFavorite = userService.isFavoriteHotel(sessionUser, hotelId);
        Map<String, Boolean> fav = new HashMap<>();
        fav.put("isFavorite", isFavorite);
        response = new ResponseEntity<>(fav, HttpStatus.OK);
      } else {
        response = new ResponseEntity<>("Hotel not found", HttpStatus.NOT_FOUND);
      }
    } else {
      response = new ResponseEntity<>("Hotel data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    }
    return response;
  }



}