package lab365.CLIMed.excecoes;

import jakarta.persistence.EntityNotFoundException;
import lab365.CLIMed.dto.ErroValidacaoDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class ExcecoesGlobais{

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<List<ErroValidacaoDTO>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        List<FieldError> errors = ex.getFieldErrors();
        List<ErroValidacaoDTO> errosDTO = new ArrayList<>();
        for(FieldError erro:errors){
            errosDTO.add(new ErroValidacaoDTO(erro));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errosDTO);
    }
    @ExceptionHandler(EntityNotFoundException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<String> errorEntityNotFound(EntityNotFoundException e){
        return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
    }
}
