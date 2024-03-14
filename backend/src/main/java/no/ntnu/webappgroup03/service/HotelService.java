package no.ntnu.webappgroup03.service;

import java.util.Optional;
import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelService {

  @Autowired
  private HotelRepository hotelRepository;

  /**
   * Add a new hotel to the collection. Note. ID will be auto-generated.
   *
   * @param hotel the hotel to add
   * @return the id of the hotel
   * @throws IllegalArgumentException When the provided hotel is note valid
   */
  public int add(Hotel hotel) throws IllegalArgumentException {
    if (!hotel.isValid()) {
      throw new IllegalArgumentException("Hotel is invalid");
    }
    hotelRepository.save(hotel);
    return hotel.getId();
  }

  /**
   * Return all hotels.
   *
   * @return all hotels.
   */
  public Iterable<Hotel> getAll() {
    return hotelRepository.findAll();
  }

  public Optional<Hotel> findById(int id) {
    return hotelRepository.findById(id);
  }

  public boolean delete(int id) {
    Optional<Hotel> hotel = hotelRepository.findById(id);
    if (hotel.isPresent()) {
      hotelRepository.deleteById(id);
    }
    return hotel.isPresent();
  }
}
