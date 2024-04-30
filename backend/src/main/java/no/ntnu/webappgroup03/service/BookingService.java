package no.ntnu.webappgroup03.service;

import no.ntnu.webappgroup03.model.Booking;
import no.ntnu.webappgroup03.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Business logic related to Bookings.
 */
@Service
public class BookingService {


  @Autowired
  private BookingRepository bookingRepository;

  /**
   * Return all the bookings
   *
   * @return all the bookings.
   */
  public Iterable<Booking> getAll() {
    return bookingRepository.findAll();
  }

  public Booking findById(int id) {
    Optional<Booking> booking = bookingRepository.findById(id);
    return booking.orElse(null);
  }

  /**
   * Add a booking to the application state (persist in the database).
   *
   * @param booking to persist
   * @return true when Booking added, false on error
   */
  public boolean add(Booking booking) {
    boolean added = false;
    Booking existingBooking = findById((int) booking.getId());
    if (existingBooking == null) {
      bookingRepository.save(booking);
      added = true;
    }

    return added;
  }

  /**
   * Remove a booking from application state (database).
   *
   * @param id ID of the booking to delete
   * @return true when booking deleted, false when booking was not found in the database
   */
  public boolean delete(int id) {
    Optional<Booking> booking = bookingRepository.findById(id);
    if (booking.isPresent()) {
      bookingRepository.deleteById(id);
    }
    return booking.isPresent();
  }

}
