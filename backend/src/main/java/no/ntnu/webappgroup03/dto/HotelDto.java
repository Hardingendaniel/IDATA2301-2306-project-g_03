package no.ntnu.webappgroup03.dto;

/**
 * Data transfer object (DTO) for submitting changes to hotels data.
 */
public class HotelDto {
  private int id;
  private String hotelName;
  private String description;
  private String location;
  private String roomType;
  private double price;


  public HotelDto(int id, String hotelName, String description, String location, String roomType,
      double price) {
    this.id = id;
    this.hotelName = hotelName;
    this.description = description;
    this.location = location;
    this.roomType = roomType;
    this.price = price;
  }

  public void setHotelDetails(int id, String hotelName, String description, String location,
      String roomType, double price) {
    this.id = id;
    this.hotelName = hotelName;
    this.description = description;
    this.location = location;
    this.roomType = roomType;
    this.price = price;

  }

  public int getId() {
    return id;
  }

  public String getHotelName() {
    return hotelName;
  }

  public String getDescription() {
    return description;
  }

  public String getLocation() {
    return location;
  }

  public String getRoomType() {
    return roomType;
  }

  public double getPrice() {
    return price;
  }

  public HotelDto() {
    // Intentionally left blank.
  }
}
