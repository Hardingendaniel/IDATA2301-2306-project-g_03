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
  private int rating;
  private String review;


  public HotelDto(int id, String hotelName, String description, String location, String roomType,
                  double price, int rating, String review) {
    this.id = id;
    this.hotelName = hotelName;
    this.description = description;
    this.location = location;
    this.roomType = roomType;
    this.price = price;
    this.rating = rating;
    this.review = review;
  }

  public void setHotelDetails(int id, String hotelName, String description, String location,
                              String roomType, double price, int rating, String review) {
    this.id = id;
    this.hotelName = hotelName;
    this.description = description;
    this.location = location;
    this.roomType = roomType;
    this.price = price;
    this.rating = rating;
    this.review = review;

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

  public int getRating() {
    return rating;
  }

  public String getReview() {
    return review;
  }

  public HotelDto() {
    // Intentionally left blank.
  }
}