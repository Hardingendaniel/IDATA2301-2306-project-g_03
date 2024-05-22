package no.ntnu.webappgroup03.service;

import no.ntnu.webappgroup03.dto.BookingDto;
import no.ntnu.webappgroup03.model.Booking;
import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Business logic related to Bookings.
 */
@Service
public class BookingService {


  @Autowired
  private BookingRepository bookingRepository;

  @Autowired
  private UserService userService;
  @Autowired
  private HotelService hotelService;

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
    Optional<Booking> booking = bookingRepository.findById(id);
    if (booking.isPresent()) {
      Booking existingBooking = booking.get();
      existingBooking.setStartDate(bookingData.getStartDate());
      existingBooking.setEndDate(bookingData.getEndDate());
      bookingRepository.save(existingBooking);
      return true;
    }
    return false;
  }

  /**
   * Add a booking to the application state (persist in the database).
   *
   * @return true when Booking added, false on error
   *
  public void add(Booking booking) {
    if (!booking.isValid()) {
      throw new IllegalArgumentException("Booking not valid");
    }
      bookingRepository.save(booking);
  }
  */

  public Booking addBooking(BookingDto bookingDto) {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    if (auth == null || auth.getName() == null) {
      throw new UsernameNotFoundException("User not authenticated");
    }
    String email = auth.getName();

    Optional<User> userOpt = userService.findUserByEmail(email);
    if (!userOpt.isPresent()) {
      throw new UsernameNotFoundException("User with email " + email + " not found");
    }
    User user = userOpt.get();

    Optional<Hotel> hotelOpt = hotelService.getOne(bookingDto.getHotelId());
    if (!hotelOpt.isPresent()) {
      throw new IllegalStateException("Hotel with ID " + bookingDto.getHotelId() + " not found.");
    }

    Booking booking = new Booking();
    booking.setUser(user);
    booking.setHotel(hotelOpt.get());
    booking.setStartDate(bookingDto.getStartDate());
    booking.setEndDate(bookingDto.getEndDate());

    return bookingRepository.save(booking);
  }


  public BookingDto convertToDto(Booking booking) {
    BookingDto bookingDto = new BookingDto();

    // Include user information
    if (booking.getUser() != null) {
      bookingDto.setUserId(booking.getUser().getId());
      bookingDto.setUserName(booking.getUser().getFirstName() + " " + booking.getUser().getLastName());
    }
    return bookingDto;
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
      return true;
    }
    return false;
  }

}
