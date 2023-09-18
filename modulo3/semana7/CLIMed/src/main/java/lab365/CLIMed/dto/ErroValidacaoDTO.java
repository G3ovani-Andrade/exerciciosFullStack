package lab365.CLIMed.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.validation.FieldError;

@Getter
@Setter
public class ErroValidacaoDTO {

    private String campo;
    private String mensagem;
    public ErroValidacaoDTO(FieldError erro) {
        this.campo = erro.getField();
        this.mensagem = erro.getDefaultMessage();
    }

}
