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
   * Add a new user to the collection. Note. ID will be auto-generated.
   *
   * @param user the user to add
   * @return the id of the user
   * @throws IllegalArgumentException When the provided user is note valid
   */
  public int add(User user) throws IllegalArgumentException {
    if (!user.isValid()) {
      throw new IllegalArgumentException("Hotel is invalid");
    }
    userRepository.save(user);
    return user.getId();
  }

  /**
   * Return all hotels.
   *
   * @return all hotels.
   */
  public Iterable<User> getAll() {
    return userRepository.findAll();
  }

  public Optional<User> findById(int id) {
    return userRepository.findById(id);
  }

  public boolean delete(int id) {
    Optional<User> user = userRepository.findById(id);
    if (user.isPresent()) {
      userRepository.deleteById(id);
    }
    return user.isPresent();
  }

}
