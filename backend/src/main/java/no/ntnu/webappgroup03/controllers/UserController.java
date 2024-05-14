package no.ntnu.webappgroup03.controllers;

import no.ntnu.webappgroup03.dto.UserProfileDto;
import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.service.AccessUserService;
import no.ntnu.webappgroup03.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST API Controller serving endpoints for users
 * Code adapted from <a href="https://github.com/strazdinsg/app-dev/blob/main/security-demos/07-backend-frontend-jwt-auth/backend/src/main/java/no/ntnu/controllers/UserController.java">UserController.java</a>
 */
@CrossOrigin
@RestController
public class UserController {

  @Autowired
  private UserService userService;
  @Autowired
  private AccessUserService accessUserService;

  /**
   * Get all users.
   * HTTP GET to /
   *
   * @return List of all users currently stored in the collection
   */
  @GetMapping("/api/users")
  public Iterable<User> getAll() {
    return userService.getAll();
  }

  /**
   * Return user profile information
   * @param id id for which the profile is requested
   * @return The profile information or error code when not authorized.
   */
  @GetMapping("/api/users/{id}")
  public ResponseEntity<?> getProfile(@PathVariable int id) {
    ResponseEntity<?> response;
    User sessionUser = accessUserService.getSessionUser();
    if (sessionUser != null && sessionUser.getId() == id) {
      UserProfileDto profile = new UserProfileDto(sessionUser.getId(), sessionUser.getFirstName(),
          sessionUser.getLastName(), sessionUser.getEmail(), sessionUser.getPhoneNumber(),
          sessionUser.getPassword(), sessionUser.isActive());
      response = new ResponseEntity<>(profile, HttpStatus.OK);
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Profile data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("Profile data for other users not accessible",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }

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

  //TODO: Lag flere metoder for users (delete,)
}
