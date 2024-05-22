package no.ntnu.webappgroup03.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SwaggerRedirectController {

  /**
   * Code generated with AI
   * @return
   */
  @GetMapping("/api-docs")
  public String redirectToSwaggerUi() {
    return "redirect:/swagger-ui/index.html";
  }
}
