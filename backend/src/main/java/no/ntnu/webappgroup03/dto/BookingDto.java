package no.ntnu.webappgroup03.dto;
import no.ntnu.webappgroup03.model.User;

import java.sql.Date;

/**
 * Data transfer object (DTO) for submitting changes to booking data.
 */
public class BookingDto {
  private Date startDate;
  private Date endDate;

  public BookingDto(Date startDate, Date endDate) {
    this.startDate = startDate;
    this.endDate = endDate;

  }

  public void setBookingDetails( User user, Date startDate, Date endDate)  {
    this.startDate = startDate;
    this.endDate = endDate;
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
