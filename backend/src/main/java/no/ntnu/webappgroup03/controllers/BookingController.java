package no.ntnu.webappgroup03.controllers;

import no.ntnu.webappgroup03.model.Booking;
import no.ntnu.webappgroup03.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Map;

@RestController
@RequestMapping
public class BookingController {

  private Map<Integer, Booking> bookings;

  @Autowired
  private BookingService bookingService;

  /**
   * Get all bookings.
   * HTTP GET to /
   *
   * @return List of all bookings currently stored in the collection
   */
  @GetMapping("/bookings/")
  public Collection<Booking> getAll() {
    return bookings.values();
  }


}
