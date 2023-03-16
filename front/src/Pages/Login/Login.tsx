import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { REST_API_KEY, REDIRECT_URI } from "../Start/KakaoLoginData";

function Login() {
  const location = useLocation(); // 주소값(localhost:3000/login?code='인가코드') 받아오기 위해 useLocation 사용
  const navigate = useNavigate(); // navigation기능 사용을 위해 navigate 선언
  const KAKAO_CODE = location.search.split("=")[1]; // parameter로 전달받은 카카오측 인가코드 받아오기

  // 주소에서 인가코드 받아오는 또 다른 방법
  // const params = new URL(document.location).searchParams;
  // const KAKAO_CODE = params.get("code");

  // 카카오 토큰 받아오는 함수
  const getKakaoToken = async (KAKAO_CODE: string) => {
    axios
      .post(
        "https://kauth.kakao.com/oauth/token",
        `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem("token", res.data.access_token); // 카카오 Access token 로컬 스토리지에 저장
          console.log(res.data.access_token); // 카카오 Access token 콘솔에 출력
        } else {
          navigate("/");
        }
      });
  };

  // 인가 코드가 존재할 경우(초기 로그인) => 토큰 발급 함수 실행
  useEffect(() => {
    if (KAKAO_CODE) {
      getKakaoToken(KAKAO_CODE);
    }
  }, []);

  return (
    <div className="Login">
      <h1>Login</h1>
    </div>
  );
}

export default Login;
