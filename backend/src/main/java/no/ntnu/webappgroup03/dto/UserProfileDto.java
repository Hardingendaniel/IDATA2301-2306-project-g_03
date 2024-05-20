package no.ntnu.webappgroup03.dto;

import java.util.List;

/**
 * Data transfer object (DTO) for submitting changes to user profile data.
 */
public class UserProfileDto {
  private int id;
  private String firstName;
  private String lastName;
  private String email;
  private int phoneNumber;
  private boolean active = true;
  private List<String> roles;

  public UserProfileDto(int id, String firstName, String lastName, String email, int phoneNumber,
      boolean active, List<String> roles) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.active = active;
    this.roles = roles;
  }

  public UserProfileDto(int id, String firstName, String lastName, String email, int phoneNumber,
      boolean active) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.active = active;
  }

  public UserProfileDto() {
    //Intentionally left blank
  }

  public int getId() {
    return id;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getEmail() {
    return email;
  }

  public int getPhoneNumber() {
    return phoneNumber;
  }

  public boolean isActive() {
    return active;
  }

  public List<String> getRoles() {
    return roles;
  }
}
