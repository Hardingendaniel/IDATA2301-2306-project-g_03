package no.ntnu.webappgroup03.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;


/**
 * Represents a user.
 */
@Entity(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String firstName;
  private String lastName;
  private String email;
  private int phoneNumber;
  private String password;
  private boolean active = true;
  @JsonIgnore
  @ManyToMany(fetch = FetchType.EAGER)
  //TODO: finne ut av relasjonen
  private Set<Booking> bookings = new HashSet<>();
  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "user_role",
      joinColumns = @JoinColumn(name = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "role_id")
  )
  private Set<Role> roles = new LinkedHashSet<>();

  public User() {
    // Intentionally left blank
  }

  /**
   * @param firstName   The firstName of the user
   * @param lastName    The lastName of the user
   * @param email       The email of the user
   * @param phoneNumber The phoneNumber of the user
   * @param password    The password of the user
   */
  public User(String firstName, String lastName, String email, int phoneNumber, String password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }


  public User(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public int getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(int phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public boolean isActive() {
    return active;
  }

  public void setActive(boolean active) {
    this.active = active;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void addRole(Role role) {
    roles.add(role);
  }

  /**
   * Checks if the user is an admin.
   *
   * @return true if the user is an admin, false otherwise.
   */
  public boolean isAdmin() {
    return this.hashRole("ROLE_ADMIN");
  }

  /**
   * Check if the user has a specific role.
   *
   * @param roleName name of the role.
   * @return true if the user has the wanted role, false otherwise.
   */
  public boolean hashRole(String roleName) {
    boolean found = false;
    Iterator<Role> it = roles.iterator();
    while (!found && it.hasNext()) {
      Role role = it.next();
      if (role.getName().equals(roleName)) {
        found = true;
      }
    }
    return found;
  }

  @Override
  public String toString() {
    return "User{" +
        "id=" + id +
        ", firstName='" + firstName + '\'' +
        ", lastName='" + lastName + '\'' +
        ", email='" + email + '\'' +
        ", phoneNumber=" + phoneNumber +
        ", password='" + password +
        '}';
  }

  public boolean isValid() {
    return email != null && !email.equals("");
  }

}
