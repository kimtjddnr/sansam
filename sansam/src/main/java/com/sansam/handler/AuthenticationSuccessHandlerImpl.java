package com.sansam.handler;

import com.sansam.config.jwt.JwtProvider;
import com.sansam.config.oauth.AuthUser;
import com.sansam.data.entity.User;
import com.sansam.data.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
@RequiredArgsConstructor
public class AuthenticationSuccessHandlerImpl implements AuthenticationSuccessHandler {
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        try {
            AuthUser authUser = (AuthUser) authentication.getPrincipal();
            User user = userRepository.findByUserEmail(authUser.getEmail());

            String accessToken = jwtProvider.createAccessToken(user.getUserEmail());
            String refreshToken = jwtProvider.createRefreshToken(user.getUserEmail());
            //토큰 전송
            response.sendRedirect("http://localhost:3000/login?accessToken="+accessToken+"refreshToken="+refreshToken);
        } catch (Exception e) {
            throw e;
        }

    }
}