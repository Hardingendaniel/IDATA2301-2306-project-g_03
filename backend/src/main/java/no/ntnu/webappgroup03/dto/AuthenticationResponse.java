package no.ntnu.webappgroup03.dto;

/**
 * Data that we will send as a response to the user when the authentication is successful.
 * Code adapted from: <a href="https://github.com/strazdinsg/app-dev/blob/main/security-demos/07-backend-frontend-jwt-auth/backend/src/main/java/no/ntnu/dto/AuthenticationResponse.java">AuthenticationResponse.java</a>
 */
public class AuthenticationResponse {
  private final String jwt;

  public AuthenticationResponse(String jwt) {
    this.jwt = jwt;
  }

  public String getJwt() {
    return jwt;
  }
}
