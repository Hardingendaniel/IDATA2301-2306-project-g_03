package no.ntnu.webappgroup03.repositories;

import no.ntnu.webappgroup03.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}
