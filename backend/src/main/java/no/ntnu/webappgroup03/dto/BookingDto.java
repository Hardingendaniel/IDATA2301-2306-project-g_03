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
  private int totalPrice;



  public BookingDto(long id, Hotel hotel, User user, Date startDate, Date endDate, int totalPrice ) {
    this.id = id;
    this.hotel = hotel;
    this.user = user;
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalPrice = totalPrice;
  }

  public void setBookingDetails(long id, Hotel hotel, User user, Date startDate, Date endDate, int totalPrice)  {
    this.id = id;
    this.hotel = hotel;
    this.user = user;
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalPrice = totalPrice;
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

  public int getTotalPrice() {
    return totalPrice;
  }

  public BookingDto() {
    // Intentionally left blank.
  }
}
