package lab365.CLIMed.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lab365.CLIMed.model.MedicoEntity;

public record MedicoDTO(
        @NotBlank(message = "O campo nome é obrigatório")
        String nome,
        @NotBlank(message = "O campo E-mail é obrigatório") @Email(message = "E-mail em formato inválido")
        String email,
        @NotBlank(message = "O campo telefone é obrigatório")
        @Pattern(regexp = "\\(\\d{2}\\)\\s\\d{1}\\s\\d{4}-\\d{4}",message = "O telefone deve ter o formato (00) 0 0000-0000")
        String telefone,
        @NotBlank(message = "O campo CRM é obrigatório")
        String crm
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
