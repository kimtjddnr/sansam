package com.sansam.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class SignUpRequest {
    private int userNo;
    private String userNicknm;
    private int userAge;
    private Character userGender;
    private String userLocation;
}
