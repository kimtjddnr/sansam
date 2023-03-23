package com.sansam.controller;

import com.sansam.dto.response.MountainListResponse;
import com.sansam.service.CourseServiceImpl;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/course")
@AllArgsConstructor
public class CourseController {

    private final CourseServiceImpl courseService;
    @ApiOperation(
			value = "산 목록",
			notes = "산 목록을 배열에 담아 반환한다.")
    @GetMapping("/mtlist")
    public ResponseEntity<MountainListResponse> mountainList() {
        MountainListResponse mountainListResponse = new MountainListResponse();
        mountainListResponse.setMountainList(courseService.createMountainList());
        return new ResponseEntity<>(mountainListResponse, HttpStatus.OK);
    }
}
