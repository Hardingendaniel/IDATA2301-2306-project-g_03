package no.ntnu.webappgroup03.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Represents a hotel booking.
 */
@Entity(name="booking")
public class Booking  {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  @ManyToMany(fetch = FetchType.EAGER)
  private Set<User> userId = new HashSet<>();
  @ManyToMany(fetch = FetchType.EAGER)
  private Set<Hotel> hotelId = new HashSet<>();
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
  public Booking(long id, Date startDate, Date endDate) {
    this.id = id;
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
}
