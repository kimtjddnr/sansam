import { REST_API_KEY, REDIRECT_URI } from "./KakaoLoginData";

const Start = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="Start">
      <h1>Start입니다</h1>
      <img
        src="img/kakao_login_medium_narrow.png"
        alt="login"
        onClick={handleLogin}
      />
      <img
        src="img/kakao_login_medium_wide.png"
        alt="login_2"
        onClick={handleLogin}
      />
    </div>
  );
};

// function Start() {
//   return (
//     <div className="Start">
//       <h1>Start</h1>
//       {/* <img src="img/kakao_login_large_narrow.png" alt="logo1" />
//       <img src="img/kakao_login_large_wide.png" alt="logo1" /> */}
//       <img src="img/kakao_login_medium_narrow.png" alt="logo2" />
//       <img src="img/kakao_login_medium_wide.png" alt="logo2" />
//     </div>
//   );
// }

export default Start;
