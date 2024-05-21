package no.ntnu.webappgroup03.service;

import java.util.List;
import java.util.Optional;
import no.ntnu.webappgroup03.dto.HotelDto;
import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Business logic related to Hotels.
 */
@Service
public class HotelService {

  @Autowired
  private HotelRepository hotelRepository;

  /**
   * Constructor class for hotel service class
   *
   * @param hotelRepository hotelRepository
   */
  public HotelService(HotelRepository hotelRepository) {
    this.hotelRepository = hotelRepository;
  }

  /**
   * Find all the hotels and returns it in a list
   *
   * @return a list of all hotels
   */
  public List<Hotel> findAllHotels() {

    return (List<Hotel>) hotelRepository.findAll();
  }

  /**
   * Get all the hotels stored in the database.
   *
   * @return all hotels.
   */
  public Iterable<Hotel> getAll() {
    return hotelRepository.findAll();
  }

  public Iterable<Hotel> getHotelsForUser(boolean isAdmin) {
    if (isAdmin) {
      return hotelRepository.findAll();
    } else {
      return hotelRepository.findByActive(true);
    }
  }

  /**
   * Returns the hotel with the specified id
   *
   * @param id id of the wanted hotel.
   * @return the wanted hotel.
   */
  public Optional<Hotel> getOne(int id) {
    return this.hotelRepository.findById(id);
  }

  /**
   * Updates hotel information for a hotel.
   *
   * @param id id of the hotel to update
   * @param hotelData Hotel data to set for the user
   * @return True on success, false otherwise
   */
  public boolean updateHotel(int id, HotelDto hotelData) {
    Optional<Hotel> hotel = this.hotelRepository.findById(id);
    boolean updated;
    if (hotel.isPresent()) {
      Hotel existingHotel = hotel.get();
      existingHotel.setHotelName(hotelData.getHotelName());
      existingHotel.setDescription(hotelData.getDescription());
      existingHotel.setLocation(hotelData.getLocation());
      existingHotel.setRoomTypes(hotelData.getRoomType());
      existingHotel.setPrice(hotelData.getPrice());
      existingHotel.setProviders(hotelData.getProviders());
      existingHotel.setActive(hotelData.isActive());
      existingHotel.setRating(hotelData.getRating());
      existingHotel.setReview(hotelData.getReview());
      this.hotelRepository.save(existingHotel);
      updated = true;
    } else {
      updated = false;
    }
    return updated;
  }

  /**
   * Look up Hotel in the application state.
   *
   * @param id ID of the Hotel to look up
   * @return The hotel or null if none found by that ID
   */
  public Hotel findById(int id) {
    Optional<Hotel> hotel= hotelRepository.findById(id);
    return hotel.orElse(null);
  }

  /**
   * Add a Hotel to the application state (persist in the database).
   *
   * @param hotel Hotel to persist
   * @return true when Hotel added, false on error
   */
  public boolean add(Hotel hotel) {
    boolean added = false;
    if (hotel != null && hotel.isValid()) {
      Hotel existingHotel = findById(hotel.getId());
      if (existingHotel == null) {
        hotelRepository.save(hotel);
        added = true;
      }
    }
    return added;
  }

  /**
   * Remove a hotel from application state (database).
   *
   * @param id ID of the hotel to delete
   * @return true when hotel deleted, false when hotel was not found in the database
   */
  public boolean delete(int id) {
    Optional<Hotel> hotel = hotelRepository.findById(id);
    if (hotel.isPresent()) {
      hotelRepository.deleteById(id);
    }
    return hotel.isPresent();
  }

  /**
   * Update active status for given hotel.
   *
   * @param hotel to update
   * @param active new active status
   */
  public void updateActiveStatus(Hotel hotel, boolean active) {
    boolean newStatus;
    newStatus = active;
    hotel.setActive(newStatus);
    this.hotelRepository.save(hotel);
  }
}