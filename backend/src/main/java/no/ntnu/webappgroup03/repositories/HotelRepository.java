package no.ntnu.webappgroup03.repositories;

import no.ntnu.webappgroup03.entity.Hotel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface HotelRepository extends CrudRepository<Hotel, Integer> {
}
