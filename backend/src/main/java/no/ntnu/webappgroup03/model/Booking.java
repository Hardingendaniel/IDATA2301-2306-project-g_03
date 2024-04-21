package no.ntnu.webappgroup03.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import java.util.Date;

/**
 * Represents a hotel booking.
 */
@Entity(name="booking")
public class Booking  {
  //TODO hør med Gørtsærn!
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "userId", referencedColumnName = "id")
  private User user;
  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "hotelId", referencedColumnName = "id")
  private Hotel hotel;
  private Date startDate;
  private Date endDate;

  public Booking() {
    //Intentionally left empty
  }

  /**
   * Constructor for booking
   *
   * @param id the id for booking.
   * @param startDate the startDate for booking.
   * @param endDate the endDate for booking.
   */
  public Booking(long id, User user, Hotel hotel, Date startDate, Date endDate) {
    this.id = id;
    this.user = user;
    this.hotel = hotel;
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

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Hotel getHotel() {
    return hotel;
  }

  public void setHotel(Hotel hotel) {
    this.hotel = hotel;
  }
}
