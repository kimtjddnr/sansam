package com.sansam.controller;

import com.sansam.dto.response.CourseResponse;
import com.sansam.dto.response.MountainListResponse;
import com.sansam.service.CourseServiceImpl;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/course")
@AllArgsConstructor
public class CourseController {

    private final CourseServiceImpl courseService;
    @ApiOperation(
			value = "산 목록",
			notes = "산 목록을 조회하여 성공 시 배열에 담아 반환하고, 실패 시 Fail을 반환한다.")
    @GetMapping("/mtlist")
    public ResponseEntity<?> mountainList(@RequestHeader(value = "X-ACCESS-TOKEN") String accessToken, HttpServletResponse response) {
        HttpHeaders headers = new HttpHeaders();
        if (response.getHeader("X-ACCESS-TOKEN") != null) {
            headers.set("X-ACCESS-TOKEN", response.getHeader("X-ACCESS-TOKEN"));
        } else {
            headers.set("X-ACCESS-TOKEN", accessToken);
        }

        MountainListResponse mountainListResponse = new MountainListResponse();
        try {
            mountainListResponse.setMountainList(courseService.createMountainList());
            return new ResponseEntity<>(mountainListResponse, headers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail", headers, HttpStatus.BAD_REQUEST);
        }
    }

     @ApiOperation(
			value = "코스 세부 정보 반환",
			notes = "해당 {no}의 코스 세부 정보를 조회하고, 성공 시 코스 세부 정보를 반환하고 실패 시 Fail을 반환한다.")
    @GetMapping("/search/{no}")
    public ResponseEntity<?> courseByNo(@RequestHeader(value = "X-ACCESS-TOKEN") String accessToken, HttpServletResponse response, @PathVariable int no) {
        HttpHeaders headers = new HttpHeaders();
        if (response.getHeader("X-ACCESS-TOKEN") != null) {
            headers.set("X-ACCESS-TOKEN", response.getHeader("X-ACCESS-TOKEN"));
        } else {
            headers.set("X-ACCESS-TOKEN", accessToken);
        }

        try {
            CourseResponse courseResponse = courseService.getCourseDetails(no);
            return new ResponseEntity<>(courseResponse, headers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail", headers, HttpStatus.BAD_REQUEST);
        }

    }
}
