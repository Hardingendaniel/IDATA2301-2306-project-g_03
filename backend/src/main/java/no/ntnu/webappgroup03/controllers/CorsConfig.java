package no.ntnu.webappgroup03.controllers;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * CORS global
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

  public void addCorsMapping (CorsRegistry registry) {
    registry.addMapping("/**") // Allow CORS request for all endpoints
            .allowedOrigins("http://localhost:3000")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
            .allowedHeaders("*")
            .allowCredentials(true); // Send cookies
  }
}
