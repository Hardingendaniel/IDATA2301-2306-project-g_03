package no.ntnu.webappgroup03.dto;

/**
 * Data transfer object (DTO) for data from the sign-up form.
 */
public class SignupDto {
  private final String firstName;
  private final String lastName;
  private final String email;
  private final int phoneNumber;
  private final String password;

  public SignupDto(String firstName, String lastName, String email,
      int phoneNumber, String password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
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

  public String getPassword() {
    return password;
  }
}
