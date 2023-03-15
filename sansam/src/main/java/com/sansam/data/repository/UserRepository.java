package com.sansam.data.repository;

import com.sansam.data.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findByUserEmail(String userEmail);
}
