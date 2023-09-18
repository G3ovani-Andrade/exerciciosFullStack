package lab365.CLIMed.controller;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lab365.CLIMed.dto.MedicoDTO;
import lab365.CLIMed.model.MedicoEntity;
import lab365.CLIMed.repository.MedicoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/medico")
public class MedicoController {
    @Autowired
    private MedicoRepository medicoRepository;

    @GetMapping
    public ResponseEntity<List<MedicoDTO>> getAllMedicos(){
        return ResponseEntity.status(HttpStatus.OK).body(this.medicoRepository.findAll().stream().map(MedicoDTO::new).toList());
    }
    @PostMapping
    public ResponseEntity<MedicoDTO> saveMedico(@RequestBody @Valid MedicoDTO newMedico){
        var medicoEntity = new MedicoEntity();
        BeanUtils.copyProperties(newMedico,medicoEntity);
        return ResponseEntity.status(HttpStatus.OK).body(new MedicoDTO(this.medicoRepository.save(medicoEntity)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicoDTO> getMedicoByID(@PathVariable UUID id){
        MedicoEntity medicoEntity = this.medicoRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Medico não encontrado."));
        return ResponseEntity.status(HttpStatus.OK).body(new MedicoDTO(medicoEntity));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MedicoDTO> updateMedico(@PathVariable(value = "id") UUID id,@RequestBody @Valid MedicoDTO medicoDTO){
        MedicoEntity medicoEntity = this.medicoRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Medico não encontrado."));
        BeanUtils.copyProperties(medicoDTO,medicoEntity);
        return ResponseEntity.status(HttpStatus.OK).body(new MedicoDTO(this.medicoRepository.save(medicoEntity)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMedico(@PathVariable UUID id){
        this.medicoRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Medico não encontrado."));
        this.medicoRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("");
    }
}
