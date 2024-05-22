package no.ntnu.webappgroup03.repository;

import no.ntnu.webappgroup03.model.Booking;
import no.ntnu.webappgroup03.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Integer> {
  Optional<Booking> findById(long id);
  List<Booking> findAllByUser(User user);
}
