package no.ntnu.webappgroup03.repository;

import java.util.Optional;
import no.ntnu.webappgroup03.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

  Optional<User> findByEmail(String email);
}
