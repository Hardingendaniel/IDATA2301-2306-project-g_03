package no.ntnu.webappgroup03.dto;

/**
 * Data that the user will send in the login request. Code adapted from: <a
 * href="https://github.com/strazdinsg/app-dev/blob/main/security-demos/07-backend-frontend-jwt-auth/backend/src/main/java/no/ntnu/dto/AuthenticationRequest.java">AuthenticationRequest.java</a>
 */
public class AuthenticationRequest {

  private String email;
  private String password;

  public AuthenticationRequest() {
  }

  public AuthenticationRequest(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
