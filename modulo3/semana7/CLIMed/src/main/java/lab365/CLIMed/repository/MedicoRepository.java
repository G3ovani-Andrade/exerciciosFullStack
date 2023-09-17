package lab365.CLIMed.repository;

import lab365.CLIMed.model.MedicoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MedicoRepository extends JpaRepository<MedicoEntity, UUID> {
}
