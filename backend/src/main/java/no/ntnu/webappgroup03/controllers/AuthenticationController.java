package no.ntnu.webappgroup03.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import no.ntnu.webappgroup03.dto.AuthenticationRequest;
import no.ntnu.webappgroup03.dto.AuthenticationResponse;
import no.ntnu.webappgroup03.dto.SignupDto;
import no.ntnu.webappgroup03.security.JwtUtil;
import no.ntnu.webappgroup03.service.AccessUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Controller responsible for authentication. Code Adapted from: <a
 * href="https://github.com/strazdinsg/app-dev/blob/main/security-demos/07-backend-frontend-jwt-auth/backend/src/main/java/no/ntnu/controllers/AuthenticationController.java">AuthenticationController.java</a>
 */
@CrossOrigin
@RestController
public class AuthenticationController {

  @Autowired
  private AuthenticationManager authenticationManager;
  @Autowired
  private AccessUserService userService;
  @Autowired
  private JwtUtil jwtUtil;

  /**
   * HTTP POST request to /authenticate.
   *
   * @param authenticationRequest The request JSON object containing username and password
   * @param response              The HTTP response
   * @return OK + JWT token; Or UNAUTHORIZED
   */
  @PostMapping("/api/authenticate")
  @Operation(summary = "Logs in a user", description = "Sends a request to try and logg in a user")
  @ApiResponses(value = {
      @ApiResponse(responseCode = "401", description = "Invalid email or password")
  })
  public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest,
      HttpServletResponse response) {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
          authenticationRequest.getEmail(),
          authenticationRequest.getPassword()));
    } catch (BadCredentialsException e) {
      return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
    }
    UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getEmail());
    return generateJwtAndSetCookie(userDetails, response);
  }

  /**
   * This method processes data received from the sign-up form (HTTP POST).
   *
   * @param signupData The sign-up data
   * @param response   The HTTP response
   * @return OK if sign-up is successful
   */
  @PostMapping("/api/signup")
  @Operation(summary = "Process data from the sign up form", description = "Initiates a create user")
  public ResponseEntity<String> signupProcess(@RequestBody SignupDto signupData,
      HttpServletResponse response) {
    userService.tryCreateNewUser(signupData.getFirstName(), signupData.getLastName(),
        signupData.getEmail(), signupData.getPhoneNumber(), signupData.getPassword());
    UserDetails userDetails = userService.loadUserByUsername(signupData.getEmail());
    return (ResponseEntity<String>) generateJwtAndSetCookie(userDetails, response);
  }

  /**
   * Generates a JWT token for the given user and sets it in a cookie in the response.
   *
   * @param userDetails The user details
   * @param response    The HTTP response
   * @return ResponseEntity with JWT token
   */
  private ResponseEntity<?> generateJwtAndSetCookie(UserDetails userDetails,
      HttpServletResponse response) {
    String jwt = jwtUtil.generateToken(userDetails);

    Cookie cookie = new Cookie("auth", jwt);
    cookie.setHttpOnly(true);
    cookie.setPath("/");
    cookie.setMaxAge(60 * 60); // 1 hour
    response.addCookie(cookie);

    return ResponseEntity.ok(new AuthenticationResponse(jwt));
  }
}
