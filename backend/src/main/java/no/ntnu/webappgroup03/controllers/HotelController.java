package no.ntnu.webappgroup03.controllers;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST API Controller for hotel collection.
 * Code adapted from ...
 */
@RestController
@RequestMapping("/hotels")
public class HotelController {
  private Map<Integer, Hotel> hotels;
  private int latestId;
  @Autowired
  private HotelService hotelService;

  /**
   * Get all hotels.
   * HTTP GET to /hotels
   *
   * @return List of all hotels currently stored in the collection
   */
  @GetMapping
  public Collection<Hotel> getAll() {
    return hotels.values();
  }

  /**
   * Get a specific hotel.
   *
   * @param id ID` of the hotel to be returned
   * @return Hotel with the given ID or status 404
   */
  @GetMapping("/{id]")
  public ResponseEntity<Hotel> getOne(@PathVariable Integer id) {
    ResponseEntity<Hotel> response;
    Hotel hotel = findHotelById(id);
    if (hotel != null) {
      response = new ResponseEntity<>(hotel, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    return response;
  }

  /**
   * Searches through the book collection, find the book with given ID.
   *
   * @param id hotel ID
   * @return Hotel or null if not found
   */
  private Hotel findHotelById(Integer id) {
    return hotels.get(id);
  }

  /**
   * Get all hotels
   *
   * @return return all the hotels
   */
  public List<Hotel> getAllHotels() {
    return hotelService.findAllHotels();
  }

}
