package com.sansam.data.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "USER")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_NO", nullable = false)
    private int userNo;

    @Column(name = "USER_EMAIL", nullable = false)
    private String userEmail;

    @Column(name = "USER_NICKNM", nullable = false)
    private String userNicknm;

    @Column(name = "USER_AGE", nullable = false)
    private int userAge;

    @Column(name = "USER_NM", nullable = false)
    private String userNm;

    @Column(name = "USER_GENDER", nullable = false)
    private String userGender;

    @Column(name = "USER_LOCATION", nullable = false)
    private String userLocation;

    @Enumerated(EnumType.STRING)
    private Role userRole;

    @Builder
    public User(int userNo, String userEmail, String userNicknm, int userAge, String userNm, String userGender, String userLocation, Role userRole) {
        this.userNo = userNo;
        this.userEmail = userEmail;
        this.userNicknm = userNicknm;
        this.userAge = userAge;
        this.userNm = userNm;
        this.userGender = userGender;
        this.userLocation = userLocation;
        this.userRole = userRole;
    }
}

