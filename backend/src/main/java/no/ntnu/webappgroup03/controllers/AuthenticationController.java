package no.ntnu.webappgroup03.controllers;

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

/**
 * Controller responsible for authentication.
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
   * @return OK + JWT token; Or UNAUTHORIZED
   */
  @PostMapping("/api/authenticate")
  public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
          authenticationRequest.getEmail(),
          authenticationRequest.getPassword()));
    } catch (BadCredentialsException e) {
      return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
    }
    final UserDetails userDetails = userService.loadUserByUsername(
        authenticationRequest.getEmail());
    final String jwt = jwtUtil.generateToken(userDetails);
    return ResponseEntity.ok(new AuthenticationResponse(jwt));
  }

  /**
   * This method processes data received from the sign-up form (HTTP POST).
   *
   * @return Name of the template for the result page
   */
  @PostMapping("/api/signup")
  public ResponseEntity<String> signupProcess(@RequestBody SignupDto signupData) {
    ResponseEntity<String> response;
    userService.tryCreateNewUser(signupData.getFirstName(), signupData.getLastName(),
        signupData.getEmail(), signupData.getPhoneNumber(), signupData.getPassword());
    response = new ResponseEntity<>(HttpStatus.OK);
    return response;
  }
}