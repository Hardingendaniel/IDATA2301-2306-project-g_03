package no.ntnu.webappgroup03.dto;

import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.model.User;

import java.sql.Date;

/**
 * Data transfer object (DTO) for submitting changes to booking data.
 */
public class BookingDto {
  private long id;
  private Hotel hotel;
  private User user;
  private Date startDate;
  private Date endDate;



  public BookingDto(long id, Hotel hotel, User user, Date startDate, Date endDate ) {
    this.id = id;
    this.hotel = hotel;
    this.user = user;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  public void setBookingDetails(long id, Hotel hotel, User user, Date startDate, Date endDate)  {
    this.id = id;
    this.hotel = hotel;
    this.user = user;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  public long getId() {
    return id;
  }

  public Hotel getHotel() {
    return hotel;
  }

  public User getUser() {
    return user;
  }

  public Date getStartDate() {
    return startDate;
  }

  public Date getEndDate() {
    return endDate;
  }

  public BookingDto() {
    // Intentionally left blank.
  }
}
