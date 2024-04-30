package no.ntnu.webappgroup03.controllers;
import no.ntnu.webappgroup03.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//TODO: må ha sikkert ha en anna request mapping
@RequestMapping("/api")
public class HotelController {
  @Autowired
  private HotelService hotelService;


}
