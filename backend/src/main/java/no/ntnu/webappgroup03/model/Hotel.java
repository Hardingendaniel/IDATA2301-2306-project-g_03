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
  private String description;
  private String location;
  private String roomTypes;
  private double price;

  private int rating;

  private String review;

  @ManyToMany(mappedBy = "hotels")
  private Set<Booking> bookings = new HashSet<>();

  public Hotel() {
    // Intentionally left blank
  }

  /**
   * Constructor for hotels.
   *
   * @param hotelName   Title of the hotel
   * @param description The description of the hotel
   * @param location    The location of the hotel
   * @param roomTypes   The type of the room
   * @param price       The price for the hotel
   */
  public Hotel(String hotelName, String description, String location,
      String roomTypes, double price, int rating, String review) {
    this.hotelName = hotelName;
    this.location = location;
    this.roomTypes = roomTypes;
    this.price = price;
    this.description = description;
    this.review = review;
    this.rating = rating;
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

  public String getLocation() {
    return location;
  }

  public void setLocation(String locationType) {
    this.location = locationType;
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

  public void setRating(int rating) {
    this.rating = rating;
  }

  public int getRating(){
    return rating;
  }

  public void setReview(String review) {
    this.review = review;
  }

  public String getReview() {
    return review;
  }

  public boolean isValid() {
    return hotelName != null && !hotelName.equals("");
  }

  //TODO should this be on the user class instead
  /**
   * Add a booking to the booking list of the Hotel
   *
   * @param booking The booking to add
   */
  public void addBooking(Booking booking) {
    bookings.add(booking);
  }

}

