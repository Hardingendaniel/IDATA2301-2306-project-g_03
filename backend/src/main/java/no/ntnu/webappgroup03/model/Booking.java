package no.ntnu.webappgroup03.model;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.List;
import java.util.Set;

/**
 * Represents a hotel booking.
 */
@Entity(name="booking")
public class Booking  {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  @ManyToOne(fetch = FetchType.EAGER)
  //@JoinColumn(name = "userId", referencedColumnName = "id")
  private User user;
  @ManyToOne(fetch = FetchType.EAGER)
  //@JoinColumn(name = "hotelId", referencedColumnName = "id")
  private Hotel hotel;
  private Date startDate;
  private Date endDate;

  public Booking() {
    //Intentionally left empty
  }

  /**
   * Constructor for booking
   *
   * @param startDate the startDate for booking.
   * @param endDate the endDate for booking.
   */
  public Booking(Date startDate, Date endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public Date getStartDate() {
    return startDate;
  }

  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  public Date getEndDate() {
    return endDate;
  }

  public void setEndDate(Date endDate) {
    this.endDate = endDate;
  }

  public Hotel getHotel() {
    return hotel;
  }

  public void setHotel(Hotel hotel) {
    this.hotel = hotel;
  }

  private User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public boolean isValid() {
    return this.startDate !=null && this.endDate !=null;
  }
}
