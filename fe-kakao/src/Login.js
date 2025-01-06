import React from 'react';

import kakao_btn_img from './kakao_btn_img.png';
import google_btn_img from './google_btn_img.png';

const Login = () => {
    const authServerLink =  `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
    const handleKakao = () => {
        window.location.href = authServerLink;
    };

    return (
        <div>
            <h2> 로그인 </h2>
            <div calssName="btns-container">
                <button onClick={handleKakao}>
                    <img src={kakao_btn_img} alt="kakao_button" />
                </button>
                <button>
                    <img src={google_btn_img} alt="google_button" />
                </button>
            </div>
        </div>
    )
};

export default Login;