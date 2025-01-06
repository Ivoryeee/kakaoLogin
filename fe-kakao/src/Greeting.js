import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json();
      userData.then((user) => {
        setName(user.properties.nickname);
        setProfileImg(user.properties.profile_image);
      });
    });
  }, []);
  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;