import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { loginUser } from "../../../../reduxToolkit/authSlice/authSlice";
import { useDispatch } from "react-redux";

const SignInWithGoogle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = location.search.slice(6);

  useEffect(() => {
    const getGoogleUser = async () => {
      try {
        const user = await axios
          .get(
            `https://api.vatandoshlarfondi.uz/api/oauth/call-back/google?code=${url}`
          )
          .then((res) => res.data);

        dispatch(loginUser(user));
        if (user.token) {
          navigate("/registration/register");
        }
      } catch (e) {
        console.log(e);
      }
    };

    getGoogleUser();
  }, []);

  return <div>Login with Google</div>;
};

export default SignInWithGoogle;