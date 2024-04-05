package no.ntnu.webappgroup03.repository;

import no.ntnu.webappgroup03.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
  Role findOneByName(String name);
}
