package no.ntnu.webappgroup03.repository;

import no.ntnu.webappgroup03.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface BookingRepository extends CrudRepository<Booking, Integer> {
  Optional<Booking> findById(int id);
}
