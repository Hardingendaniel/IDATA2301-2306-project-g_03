package no.ntnu.webappgroup03.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Represents a hotel
 */
@Entity
public class Hotel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String hotelName;
  private String locationType;
  private String roomTypes;
  private double price;

  public Hotel() {
    // Intentionally left blank
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

  public boolean isValid() {
    return hotelName != null && !hotelName.equals("");
  }
}

