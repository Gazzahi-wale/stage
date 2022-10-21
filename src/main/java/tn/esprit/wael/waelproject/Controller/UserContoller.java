package tn.esprit.wael.waelproject.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tn.esprit.wael.waelproject.Entities.User;
import tn.esprit.wael.waelproject.Repositories.UserRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserContoller {
    @Autowired
    private UserRepository userRepository;



    @GetMapping("/getuser")
    public List<User> findAll(){
        return userRepository.findAll();
    }
    @PostMapping("/setUser")
    public User createUser(@Validated @RequestBody User c) {
        return userRepository.save(c);
    }

    @GetMapping("/getuser/{id}")
    public Optional<User> getUserById(@PathVariable Long id)
    {
        return userRepository.findById(id);

    }

    @DeleteMapping("/getuser/{id}")
    public boolean supprimer(@PathVariable Long id) {
        userRepository.deleteById(id);
        return true;
    }


}
