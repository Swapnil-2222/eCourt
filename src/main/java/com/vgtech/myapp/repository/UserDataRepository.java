package com.vgtech.myapp.repository;

import com.vgtech.myapp.domain.UserData;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the UserData entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserDataRepository extends JpaRepository<UserData, Long> {}
