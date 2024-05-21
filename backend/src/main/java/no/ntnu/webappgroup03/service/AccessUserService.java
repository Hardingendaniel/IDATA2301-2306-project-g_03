package no.ntnu.webappgroup03.service;

import no.ntnu.webappgroup03.dto.UserProfileDto;
import no.ntnu.webappgroup03.model.Role;
import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.repository.RoleRepository;
import no.ntnu.webappgroup03.repository.UserRepository;
import no.ntnu.webappgroup03.security.AccessUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Provides AccessUserDetails needed for authentication.
 */
@Service
public class  AccessUserService implements UserDetailsService {

  private static final int MIN_PASSWORD_LENGTH = 6;
  @Autowired
  UserRepository userRepository;
  @Autowired
  RoleRepository roleRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<User> user = userRepository.findByEmail(username);
    if (user.isPresent()) {
      return new AccessUserDetails(user.get());
    } else {
      throw new UsernameNotFoundException("User " + username + "not found");
    }
  }

  /**
   * Get the user which is authenticated for the current session.
   *
   * @return User object or null if no user has logged in
   */
  public User getSessionUser() {
    SecurityContext securityContext = SecurityContextHolder.getContext();
    Authentication authentication = securityContext.getAuthentication();
    if (authentication == null || !authentication.isAuthenticated()) {
      return null;
    }
    String email = authentication.getName();
    return userRepository.findByEmail(email).orElse(null);
  }

  /**
   * Check if user with given username exists in the database.
   *
   * @param username Username of the user to check, case-sensitive
   * @return True if user exists, false otherwise
   */
  private boolean userExists(String username) {
    try {
      loadUserByUsername(username);
      return true;
    } catch (UsernameNotFoundException ex) {
      return false;
    }
  }

  /**
   * Try to create a new user.
   *
   * @param firstName   First Name of the user.
   * @param lastName    Last Name of the user.
   * @param email       Email of the new user.
   * @param phoneNumber the Phone Number of the user.
   * @param password    Plaintext password of the new user
   * @return null when user created, error message on error
   */
  public String tryCreateNewUser(String firstName, String lastName, String email,
      int phoneNumber, String password) {
    String errorMessage;
    if ("".equals(email)) {
      throw new IllegalArgumentException("Email cant be empty");
    } else if (userExists(email)) {
      throw new IllegalArgumentException("Email already taken");
    } else {
      errorMessage = checkPasswordRequirements(password);
      if (errorMessage == null) {
        createUser(firstName, lastName, email, phoneNumber, password);
      }
    }
    return errorMessage;
  }

  /**
   * Check if password matches the requirements.
   *
   * @param password A password to check
   * @return null if all OK, error message on error
   */
  private String checkPasswordRequirements(String password) {
    String errorMessage = null;
    if (password == null || password.isEmpty()) {
      errorMessage = "Password can't be empty";
    } else if (password.length() < MIN_PASSWORD_LENGTH) {
      errorMessage = "Password must be at least " + MIN_PASSWORD_LENGTH + " characters";
    }
    return errorMessage;
  }

  /**
   * Create a new user in the database.
   *
   * @param firstName   The users first name.
   * @param lastName    The users last name.
   * @param email       The users email address.
   * @param phoneNumber the users phone number
   * @param password    the users password
   */
  private void createUser(String firstName, String lastName, String email,
      int phoneNumber, String password) {
    Role userRole = roleRepository.findOneByName("ROLE_USER");
    if (userRole != null) {
      User user = new User(firstName, lastName, email, phoneNumber, createHash(password));
      user.addRole(userRole);
      userRepository.save(user);
    }
  }

  /**
   * Create a secure hash of a password.
   *
   * @param password Plaintext password
   * @return BCrypt hash, with random salt
   */
  private String createHash(String password) {
    return BCrypt.hashpw(password, BCrypt.gensalt());
  }

  /**
   * Update profile information for a user.
   *
   * @param user        User to update
   * @param profileData Profile data to set for the user
   * @return True on success, false otherwise
   */
  public boolean updateProfile(User user, UserProfileDto profileData) {
    user.setFirstName(profileData.getFirstName());
    user.setLastName(profileData.getLastName());
    user.setEmail(profileData.getEmail());
    user.setPhoneNumber(profileData.getPhoneNumber());
    userRepository.save(user);
    return true;
  }

  /**
   * Updates user password.
   *
   * @param user user to update
   * @param password the password to set/hash
   * @return If false, return the error message.
   */
  public String updateUserPassword(User user, String password) {
    String errorMessage = checkPasswordRequirements(password);
    if (errorMessage == null) {
      user.setPassword(createHash(password));
      userRepository.save(user);
    }
    return errorMessage;
  }
}
