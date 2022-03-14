package com.vgtech.myapp.repository;

import com.vgtech.myapp.domain.CourtCase;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CourtCase entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourtCaseRepository extends JpaRepository<CourtCase, Long> {}
