package lab365.CLIMed.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@MappedSuperclass
@Getter
@Setter
public class PessoaEntity {
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    private UUID id;
    private String nome;
    private String email;
    private String telefone;
}
