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

  /**
   * Constructor for User Profile Dto.
   *
   * @param id id of the user
   * @param firstName first name of user
   * @param lastName last name of user
   * @param email email of user
   * @param phoneNumber phone number of user
   * @param active active status for user
   * @param roles roles for the user
   */
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

  /**
   * Constructor for User Profile Dto without roles.
   *
   * @param id id of the user
   * @param firstName first name of user
   * @param lastName last name of user
   * @param email email of user
   * @param phoneNumber phone number of user
   * @param active active status for user
   */
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
