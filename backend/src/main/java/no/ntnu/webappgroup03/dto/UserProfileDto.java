package no.ntnu.webappgroup03.dto;

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

  public UserProfileDto(int id, String firstName, String lastName, String email, int phoneNumber,
      boolean active) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.active = active;
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

  public UserProfileDto() {
  }


  public void setUserDetails(int id, String firstName, String lastName, String email, int phoneNumber,
       boolean active) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.active = active;
  }
}
