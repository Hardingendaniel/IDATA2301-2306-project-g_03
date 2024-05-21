package no.ntnu.webappgroup03.dto;
import no.ntnu.webappgroup03.model.User;

import java.sql.Date;

/**
 * Data transfer object (DTO) for submitting changes to booking data.
 */
public class BookingDto {
  private Date startDate;
  private Date endDate;
  private Integer userId;
  private String userName;

  public BookingDto(Date startDate, Date endDate) {
    this.startDate = startDate;
    this.endDate = endDate;

  }

  public void setStartDate(Date startDate) {
    this.startDate = startDate;
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

  public void setUserId(Integer userId) {
    this.userId = userId;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public Integer getUserId() {
    return userId;
  }
}
