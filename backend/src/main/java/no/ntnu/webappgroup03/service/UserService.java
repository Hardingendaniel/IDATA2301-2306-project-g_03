package no.ntnu.webappgroup03.service;

import java.util.Optional;
import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  /**
   * Get all hotel currently stored in the application state (database).
   *
   * @return all hotels.
   */
  public Iterable<User> getAll() {
    return userRepository.findAll();
  }

  /**
   * Look up a user in the application state (database).
   *
   * @param id ID of the user to look up
   * @return The user or null if none found
   */
  public User findById(Integer id) {
    return userRepository.findById(id).orElse(null);
  }

  /**
   * Add a user to the database.
   *
   * @param user The user to add
   * @return True on success, false if the user was not added.
   */
  public boolean add(User user) {
    boolean added = false;
    if (canBeAdded(user)) {
      userRepository.save(user);
      added = true;
    }
    return added;
  }

  /**
   * Check if the provided user can be added to the application state (database).
   *
   * @param user User to be checked
   * @return True if the user is valid and can be added to the database
   */
  private boolean canBeAdded(User user) {
    return user != null && user.isValid()
        && (userRepository.findById(user.getId()).isEmpty());
    // user.getId() == null ||
  }

  /**
   * Delete a user from application state (database).
   *
   * @param id ID of the user to delete
   * @return true when deleted, false on error
   */
  public boolean delete(int id) {
    boolean deleted = false;
    if (findById(id) != null) {
      userRepository.deleteById(id);
      deleted = true;
    }
    return deleted;
  }

  /**
   * Try to update a user in the application state (database).
   *
   * @param id   ID of the user to update
   * @param user The updated user values
   * @return null on success, error message on error
   */
  public String update(int id, User user) {
    User existingUser = findById(id);
    String errorMessage = null;
    if (existingUser == null) {
      errorMessage = "No user with id " + id + " found";
    }
    if (user == null || !user.isValid()) {
      errorMessage = "Wrong data in request body";
    } else if (user.getId() != id) {
      errorMessage = "User ID in the URL does not match the ID in JSON data (response body)";
    }

    if (errorMessage == null) {
      userRepository.save(user);
    }
    return errorMessage;
  }

  //METODER SOM KANSKJE KAN IMPLEMENTERES MEN FOR USER
  /**
   *
   *   public Iterable<Book> getAllByGenre(String genre) {
   *     return bookRepository.findByGenreNameContainingIgnoreCase(genre);
   *   }
   *
   *   public Iterable<Book> getAllByAuthor(String author) {
   *     return bookRepository.findByAuthorsFirstNameContainingIgnoreCase(author);
   *   }
   *
   *   public Iterable<Book> getAllByAuthorAndGenre(String author, String genre) {
   *     return bookRepository
   *         .findByAuthorsFirstNameContainingIgnoreCaseAndGenreNameContainingIgnoreCase(author, genre);
   *   }
   *

  /**
   * Get the number of users in the database.
   *
   * @return The total number of user stored in the database.
   */
  public long getCount() {
    return userRepository.count();
  }

}
