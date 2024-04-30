package no.ntnu.webappgroup03.repository;

import no.ntnu.webappgroup03.model.Hotel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface HotelRepository extends CrudRepository<Hotel, Integer> {
  Optional<Hotel> findById(int id);
}
