package com.sansam.controller;

import com.sansam.config.jwt.JwtProvider;
import com.sansam.data.entity.User;
import com.sansam.data.repository.UserRepository;
import com.sansam.dto.request.SignUpRequest;
import com.sansam.dto.response.SignUpResponse;
import com.sansam.service.UserServiceImpl;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {
    private final JwtProvider jwtProvider;

    private final UserServiceImpl userService;

    private final UserRepository userRepository;

    @ApiOperation(
			value = "카카오 인가코드 발송",
			notes = "인가코드를 받으면 success를 반환하고, 실패하면 fail을 반환한다.")
    @GetMapping("/oauth/code")
    public ResponseEntity<String> kakaoCode(@RequestParam String code) {
        try {
            System.out.println(code);
            return new ResponseEntity<>("success", HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>("fail", HttpStatus.BAD_REQUEST);
        }
    }

//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
//        System.out.println("Entered login");
//        String userEmail = loginRequest.getUserEmail();
//        System.out.println(userEmail);
//        String accessToken = jwtProvider.createAccessToken(userEmail);
//        System.out.println(accessToken);
//        return new ResponseEntity<>("success", HttpStatus.OK);
//    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignUpRequest signUpRequest) {
        try {
            userService.SignUp(signUpRequest);
            User user = userRepository.findByUserNo(signUpRequest.getUserNo());

            String accessToken = jwtProvider.createAccessToken(user.getUserEmail());
            String refreshToken = jwtProvider.createRefreshToken(user.getUserEmail());

            SignUpResponse signUpResponse = new SignUpResponse();
            signUpResponse.setAccessToken(accessToken);
            signUpResponse.setRefreshToken(refreshToken);
            return new ResponseEntity<>(signUpResponse, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>("Fail", HttpStatus.BAD_REQUEST);
        }
    }
}
