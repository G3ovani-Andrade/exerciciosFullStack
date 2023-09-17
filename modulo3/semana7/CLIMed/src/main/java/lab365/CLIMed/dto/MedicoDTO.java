package lab365.CLIMed.dto;

import jakarta.validation.constraints.NotBlank;
import lab365.CLIMed.model.MedicoEntity;

public record MedicoDTO(
        @NotBlank(message = "O campo nome é obrigatório") String nome,
        @NotBlank(message = "O campo E-mail é obrigatório")String email,
        @NotBlank(message = "O campo telefone é obrigatório")String telefone,
        @NotBlank(message = "O campo CRM é obrigatório")String crm
) {

    public MedicoDTO(MedicoEntity medicoEntity) {
        this(
                medicoEntity.getNome(),
                medicoEntity.getEmail(),
                medicoEntity.getTelefone(),
                medicoEntity.getCrm()
        );
    }
}
