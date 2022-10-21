package tn.esprit.wael.waelproject.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.wael.waelproject.Entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
