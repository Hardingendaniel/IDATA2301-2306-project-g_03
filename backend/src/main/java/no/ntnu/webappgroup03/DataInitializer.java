package no.ntnu.webappgroup03;

import java.util.Iterator;
import no.ntnu.webappgroup03.model.Hotel;
import no.ntnu.webappgroup03.model.Role;
import no.ntnu.webappgroup03.model.User;
import no.ntnu.webappgroup03.repository.RoleRepository;
import no.ntnu.webappgroup03.service.AccessUserService;
import no.ntnu.webappgroup03.service.HotelService;
import no.ntnu.webappgroup03.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements ApplicationListener<ApplicationReadyEvent> {

  @Autowired
  private RoleRepository roleRepository;
  @Autowired
  private UserService userService;
  @Autowired
  private AccessUserService accessUserService;
  @Autowired
  private HotelService hotelService;
  private final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

  /**
   * This method is called when the application is loaded.
   *
   * @param event Event which is not used.
   */
  @Override
  public void onApplicationEvent(ApplicationReadyEvent event) {
    this.logger.info("Importing data...");
    this.loadUserRoles();
    this.loadUsers();
    this.loadHotels();
    this.logger.info("Done importing data");
  }

  private void loadUserRoles() {
    boolean isEmpty = true;
    Iterable<Role> existingRole = this.roleRepository.findAll();
    Iterator<Role> rolesIt = existingRole.iterator();
    if (rolesIt.hasNext()) {
      isEmpty = false;
    }
    this.logger.info("Loading user role data");
    if (isEmpty) {
      Role user = new Role("ROLE_USER");
      Role admin = new Role("ROLE_ADMIN");

      this.roleRepository.save(user);
      this.roleRepository.save(admin);

      this.logger.info("Done loading user role data");
    } else {
      this.logger.info("User role already in the database, not loading data");
    }
  }

  private void loadUsers() {
    boolean isEmpty = true;
    Iterable<User> existingUser = this.userService.getAll();
    Iterator<User> userIt = existingUser.iterator();
    if (userIt.hasNext()) {
      isEmpty = false;
    }
    this.logger.info("Loading user data...");
    if (isEmpty) {
      User admin = new User("Chuck", "Norris", "chuck_norris@stay-finder.com",
          12345678, "temp");

      Role userRole = this.roleRepository.findOneByName("ROLE_USER");
      Role adminRole = this.roleRepository.findOneByName("ROLE_ADMIN");

      admin.addRole(userRole);
      admin.addRole(adminRole);

      this.userService.add(admin);

      this.accessUserService.updateUserPassword(admin, "Nunchucks79");

      this.logger.info("Done loading user data");
    } else {
      this.logger.info("Users already in the database, not loading data");
    }
  }

  private void loadHotels() {
    boolean isEmpty = true;
    Iterable<Hotel> existingHotel = this.hotelService.getAll();
    Iterator<Hotel> hotelIt = existingHotel.iterator();
    if (hotelIt.hasNext()) {
      isEmpty = false;
    }
    this.logger.info("Loading hotel data...");
    if (isEmpty) {
      // Hotel 1:
      Hotel hotel1 = new Hotel("Villa Gåseid",
          "Welcome to this hotel. Hope you enjoy your stay", "Ålesund",
          "Single", 4200);

      // Hotel 2:
      Hotel hotel2 = new Hotel("Hotel Trondheim",
          "Welcome to this hotel. Hope you enjoy your stay", "Trondheim",
          "Family", 6900);

      // Hotel 3:
      Hotel hotel3 = new Hotel("Totens Fineste",
          "Welcome to this hotel. Hope you enjoy your stay", "Gjøvik",
          "Single", 3999);

      // Hotel 4:
      Hotel hotel4 = new Hotel("Scandic Alta",
          "Welcome to this hotel. Hope you enjoy your stay", "Alta",
          "Double", 5200);

      // Hotel 5:
      Hotel hotel5 = new Hotel("Slotsgata Hotel",
          "Welcome to this hotel. Hope you enjoy your stay", "Oslo",
          "Double", 7500);

      // Hotel 6:
      Hotel hotel6 = new Hotel("Jugend Hotel",
          "Welcome to this hotel. Hope you enjoy your stay", "Ålesund",
          "Single", 5800);

      // Hotel 7:
      Hotel hotel7 = new Hotel("Stryns Fineste",
          "Welcome to this hotel. Hope you enjoy your stay", "Stryn",
          "Family", 2500);

      // Hotel 8:
      Hotel hotel8 = new Hotel("Molde Hotel",
          "Welcome to this hotel. Hope you enjoy your stay", "Molde",
          "Double", 6500);

      // Hotel 9:
      Hotel hotel9 = new Hotel("Gløshaugen Hotel",
          "Welcome to this hotel. Hope you enjoy your stay", "Trondheim",
          "Single", 4800);

      // Hotel 10:
      Hotel hotel10 = new Hotel("Stavanger Hotel",
          "Welcome to this hotel. Hope you enjoy your stay", "Stavanger",
          "Double", 6200);

      this.hotelService.add(hotel1);
      this.hotelService.add(hotel2);
      this.hotelService.add(hotel3);
      this.hotelService.add(hotel4);
      this.hotelService.add(hotel5);
      this.hotelService.add(hotel6);
      this.hotelService.add(hotel7);
      this.hotelService.add(hotel8);
      this.hotelService.add(hotel9);
      this.hotelService.add(hotel10);

      this.logger.info("Done loading hotel data");
    } else {
      this.logger.info("Hotels already in the database, not loading data");
    }
  }
}
