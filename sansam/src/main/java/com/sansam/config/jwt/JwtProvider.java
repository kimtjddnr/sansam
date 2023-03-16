package com.sansam.config.jwt;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;

import static io.jsonwebtoken.security.Keys.secretKeyFor;

@Component
public class JwtProvider {

    // 랜덤 키 생성
    private final Key key = secretKeyFor(SignatureAlgorithm.HS512);

    // access token 생성
    public String createAccessToken(String userEmail) {
        System.out.println(userEmail+" received");
        Claims claims = Jwts.claims()
                .setSubject("AccessToken")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1800000));

        claims.put("userEmail", userEmail);

        String accessToken = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setClaims(claims)
                .signWith(key).compact();

        return accessToken;
    }

    // refresh token 생성
    public String createRefreshToken(String userEmail) {
        Calendar expiredDate = Calendar.getInstance();
        expiredDate.add(Calendar.DAY_OF_MONTH, 14);

        Claims claims = Jwts.claims()
                .setSubject("RefreshToken")
                .setIssuedAt(new Date())
                .setExpiration(expiredDate.getTime());

        claims.put("userEmail", userEmail);

        String refreshToken = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setClaims(claims)
                .signWith(key).compact();

        return refreshToken;
    }

    // request header에서 access token 뽑아오는 메서드
    public String extractAccessToken(HttpServletRequest request) {
        return request.getHeader("X-ACCESS-TOKEN");
    }

    // request header에서 refresh token 뽑아오는 메서드
    public String extractRefreshToken(HttpServletRequest request) {
        return request.getHeader("X-REFRESH-TOKEN");
    }

    /*
    token 유효성 검사 메서드
    토큰에서 userEmail을 추출해 반환한다.
    토큰 유효 기간이 만료될 경우 ExpiredJwtException을 던진다.
    토큰 자체가 잘못되었을 경우 JwtException을 던진다.
    */
    public String validateToken(String token) throws ExpiredJwtException, JwtException {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        return String.valueOf(claims.get("userEmail"));
    }
}
