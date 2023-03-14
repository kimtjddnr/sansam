package com.sansam.controller;

import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

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
}
