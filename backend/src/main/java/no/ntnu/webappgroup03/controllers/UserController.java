package no.ntnu.webappgroup03.controllers;

import java.util.Optional;
import no.ntnu.webappgroup03.dto.UserProfileDto;
import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.service.AccessUserService;
import no.ntnu.webappgroup03.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST API Controller serving endpoints for users Code adapted from <a
 * href="https://github.com/strazdinsg/app-dev/blob/main/security-demos/07-backend-frontend-
 * jwt-auth/backend/src/main/java/no/ntnu/controllers/UserController.java">UserController.java</a>
 */
@CrossOrigin
@RestController
public class UserController {

  @Autowired
  private UserService userService;
  @Autowired
  private AccessUserService accessUserService;

  //TODO: Enten slette denne methoden, eller fiks for kun admin
  /**
   * Get all users. HTTP GET to /
   *
   * @return List of all users currently stored in the collection
   */
  @GetMapping("/api/users")
  public Iterable<User> getAll() {
    return userService.getAll();
  }

  /**
   * Return user profile information.
   *
   * @param id Username for which the profile is requested
   * @return The profile information or error code when not authorized
   */
  @GetMapping("/api/users/{id}")
  public ResponseEntity<?> getProfile(@PathVariable int id) {
    ResponseEntity<?> response;
    User sessionUser = accessUserService.getSessionUser();
    Optional<User> user = this.userService.findUserById(id);
    if (sessionUser != null && sessionUser.isAdmin()) {
      if (user.isPresent()) {
        UserProfileDto profile = new UserProfileDto(user.get().getId(), user.get().getFirstName(),
            user.get().getLastName(), user.get().getEmail(), user.get().getPhoneNumber(),
            user.get().getPassword(), user.get().isActive());
        response = new ResponseEntity<>(profile, HttpStatus.OK);
      } else {
        response = new ResponseEntity<>("Could not fetch user information",
            HttpStatus.BAD_REQUEST);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("User data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("User with id: " + id + " not found",
          HttpStatus.NOT_FOUND);
    }
    return response;
  }

  /**
   * Method that creates a new user.
   *
   * @param user the user to be created.
   * @return returns the new user.
   * @throws Exception Exception to be
   */
  @PostMapping
  public User registerUser(@RequestBody User user) throws Exception {
    return userService.registerUser(user);
  }

  //TODO: Sjekk om denne funker
  /**
   * Update user profile information.
   *
   * @param id if for which the profile is updated
   * @return HTTP 200 OK or error code with error message
   */
  @PutMapping("/api/users/{id}")
  public ResponseEntity<String> updateProfile(@PathVariable int id,
      @RequestBody UserProfileDto profileData) {
    User sessionUser = accessUserService.getSessionUser();
    ResponseEntity<String> response;
    if (sessionUser != null && sessionUser.isAdmin()) {
      if (profileData != null) {
        if (accessUserService.updateProfile(sessionUser, profileData)) {
          response = new ResponseEntity<>("", HttpStatus.OK);
        } else {
          response = new ResponseEntity<>("Could not update Profile data",
              HttpStatus.INTERNAL_SERVER_ERROR);
        }
      } else {
        response = new ResponseEntity<>("Profile data not supplied", HttpStatus.BAD_REQUEST);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Profile data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("Profile data for other users not accessible!",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }

  //TODO: Sjekk om denne funker
  /**
   * Deletes a user if the logged-in user is an admin.
   *
   * @param id id of the user to delete
   * @return HTTP 200 OK or error code with error message.
   */
  @DeleteMapping("/api/users/{id}")
  public ResponseEntity<String> delete(@PathVariable int id) {
    ResponseEntity<String> response;
    User sessionUser = this.accessUserService.getSessionUser();
    if (sessionUser != null && sessionUser.isAdmin()) {
      if (sessionUser.getId() == id) {
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
  //TODO: Lag flere metoder for users (delete,)
}
