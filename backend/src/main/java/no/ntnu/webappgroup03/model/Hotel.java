package no.ntnu.webappgroup03.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;


/**
 * Represents a hotel
 */
@Entity(name = "hotels")
public class Hotel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String hotelName;
  private String locationType;
  private String roomTypes;
  private double price;

  private String description;

  @ManyToMany(mappedBy = "hotels")
  private Set<User> users = new HashSet<>();

  public Hotel() {
    // Intentionally left blank
  }

  /**
   *
   * @param hotelName     Title of the hotel
   * @param locationType  The location of the hotel
   * @param roomTypes     The type of the room
   * @param price         The price for the hotel
   */
  public Hotel(String hotelName, String locationType, String roomTypes, double price , String description) {
    this.hotelName = hotelName;
    this.locationType = locationType;
    this.roomTypes = roomTypes;
    this.price = price;
    this.description = description;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getHotelName() {
    return hotelName;
  }

  public void setHotelName(String hotelName) {
    this.hotelName = hotelName;
  }

  public String getLocationType() {
    return locationType;
  }

  public void setLocationType(String locationType) {
    this.locationType = locationType;
  }

  public String getRoomTypes() {
    return roomTypes;
  }

  public void setRoomTypes(String roomTypes) {
    this.roomTypes = roomTypes;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isValid() {
    return hotelName != null && !hotelName.equals("");
  }

  /**
   * Add a user to the user list of the Hotel
   *
   * @param user The user to add
   */
  public void addUser(User user) {
    users.add(user);
  }

}

