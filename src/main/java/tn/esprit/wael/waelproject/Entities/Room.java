package tn.esprit.wael.waelproject.Entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data //lombok
public class Room implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomCours;
    private String description;
    private String timeStart;

}
