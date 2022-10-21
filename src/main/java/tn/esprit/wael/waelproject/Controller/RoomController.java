package tn.esprit.wael.waelproject.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tn.esprit.wael.waelproject.Entities.Room;
import tn.esprit.wael.waelproject.Repositories.RoomRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/room")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;
    


    @GetMapping("/getRoom")
    public List<Room> findAll(){
        return roomRepository.findAll();
    }
    @PostMapping("/setRoom")
    public Room createRoom(@Validated @RequestBody Room c) {
        return roomRepository.save(c);
    }

    @GetMapping("/getRoom/{id}")
    public Optional<Room> getRoomById(@PathVariable Long id)
    {
        return roomRepository.findById(id);

    }

    @DeleteMapping("/getRoom/{id}")
    public boolean supprimer(@PathVariable Long id) {
        roomRepository.deleteById(id);
        return true;
    }
}
