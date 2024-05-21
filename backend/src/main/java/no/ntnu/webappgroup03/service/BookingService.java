package no.ntnu.webappgroup03.service;

import no.ntnu.webappgroup03.dto.BookingDto;
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

  public Booking findById(long id) {
    Optional<Booking> booking = bookingRepository.findById(id);
    return booking.orElse(null);
  }

  /**
   * Returns the booking with the specified id
   *
   * @param id id of the wanted booking.
   * @return the wanted booking.
   */
  public Optional<Booking> getOne(int id) {
    return this.bookingRepository.findById(id);
  }


  /**
   * Updates booking information for a booking.
   *
   * @param id id of the hotel to update
   * @param bookingData Hotel data to set for the user
   * @return True on success, false otherwise
   */
  public boolean updateBooking(int id, BookingDto bookingData) {
    Optional<Booking> booking = this.bookingRepository.findById(id);
    boolean updated;
    if (booking.isPresent()) {
      Booking existingBooking = booking.get();
      existingBooking.setStartDate(bookingData.getStartDate());
      existingBooking.setEndDate(bookingData.getEndDate());
      updated = true;
    } else {
      updated = false;
    }
    return updated;
  }

  /**
   * Add a booking to the application state (persist in the database).
   *
   * @param booking to persist
   * @return true when Booking added, false on error
   */
  public void add(Booking booking) {
    if (!booking.isValid()) {
      throw new IllegalArgumentException("Booking not valid");
    }
      bookingRepository.save(booking);
  }

  /**
   * Remove a booking from application state (database).
   *
   * @param id ID of the booking to delete
   * @return true when booking deleted, false when booking was not found in the database
   */
  public boolean delete(int id) {
    Optional<Booking> booking1 = bookingRepository.findById(id);
    if (booking1.isPresent()) {
      bookingRepository.deleteById(id);
    }
    return booking1.isPresent();
  }

}
