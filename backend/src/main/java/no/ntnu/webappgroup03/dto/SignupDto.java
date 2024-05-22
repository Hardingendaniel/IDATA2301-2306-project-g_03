package no.ntnu.webappgroup03.dto;

/**
 * Data transfer object (DTO) for data from the sign-up form. Code adapted from: <a
 * href="https://github.com/strazdinsg/app-dev/blob/main/security-demos/07-backend-frontend-jwt-auth/backend/src/main/java/no/ntnu/dto/SignupDto.java">SignupDto</a>
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
