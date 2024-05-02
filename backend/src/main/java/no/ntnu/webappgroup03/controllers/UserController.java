package no.ntnu.webappgroup03.controllers;

import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Map;

@RestController
@RequestMapping
public class UserController {

  private Map<Integer, User> users;
  @Autowired
  private UserService userService;


  /**
   * Get all users.
   * HTTP GET to /
   *
   * @return List of all users currently stored in the collection
   */
  @GetMapping
  public Collection<User> getAll() {
    return users.values();
  }

}
