package no.ntnu.webappgroup03.controllers;

import no.ntnu.webappgroup03.model.Booking;
import no.ntnu.webappgroup03.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class BookingController {

  @Autowired
  private BookingService bookingService;

  /**
   * Get all bookings.
   * HTTP GET to /
   *
   * @return List of all bookings currently stored in the collection
   */
  @GetMapping("/api/bookings")
  public Iterable<Booking> getAll() {
    return bookingService.getAll();
  }


}
