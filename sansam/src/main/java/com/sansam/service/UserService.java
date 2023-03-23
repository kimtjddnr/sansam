package com.sansam.service;

import com.sansam.dto.request.SaveExperienceRequest;
import com.sansam.dto.request.SignUpRequest;
import com.sansam.dto.response.FavoriteListResponse;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    void SignUp(SignUpRequest signUpRequest);
    void SaveRefreshToken(String refreshToken, int userNo);
    void SignOut(String refreshToken);
    void SaveInitialExperience(int userNo, SaveExperienceRequest saveExperienceRequest);
    FavoriteListResponse getFavoriteList(String userEmail);
}
