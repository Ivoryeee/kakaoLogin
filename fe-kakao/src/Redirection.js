import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  const [params, setParams] = useSearchParams();
  const authCode = params.get("code");
  const grant_type = "authorization_code";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST",
        // body: JSON.stringify({
        //   grant_type: "authorization_code",
        //   client_id: process.env.REACT_APP_REST_API_KEY,
        //   redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        //   code: authCode,
        // }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      const data = res.json();
      data.then((data) => {
        localStorage.setItem("accessToken", data.access_token);
        navigate("/greeting");
      });
    });
  }, []);
  return <div>Redirection Page: 카카오 로그인 중 ...</div>;
};

export default Redirection;