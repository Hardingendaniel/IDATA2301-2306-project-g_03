package no.ntnu.webappgroup03.controllers;

import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController {

  @Autowired
  private UserService userService;

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


  @GetMapping
  public Iterable<User> getAllUsers() {
    return userService.getAll();
  }

  @GetMapping("/api/users/{id}")
  public User getUserById(@PathVariable int id) {
    return userService.findUserById(id);
  }



  @DeleteMapping("/api/users/{id}")
  public ResponseEntity<?> deleteUser(@PathVariable int id) {
    userService.deleteUser(id);
    return ResponseEntity.ok().build();
  }

}
