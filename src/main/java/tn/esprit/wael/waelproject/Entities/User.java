package tn.esprit.wael.waelproject.Entities;
import javax.persistence.*;
import java.io.Serializable;

@Entity


public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    @Column(unique=true)
    private String email;
    private String role;
}
