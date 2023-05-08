import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/userAuthContext";
import { loginUser } from "../../Utils/API";
import {
  AuthButton,
  AuthForm,
  AuthPageContainer,
  AuthPageInner,
} from "../../Utils/styles/auth.styles";
import { InputField } from "../../Components/InputField/inputField.styles";

const index = () => {
  const { saveUserInfo } = useAuthContext();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(userInfo);
      saveUserInfo();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthPageContainer>
      <AuthPageInner>
        <h1>Login</h1>
        <AuthForm onSubmit={login}>
          <InputField
            name="email"
            value={userInfo.email}
            type="text"
            label="Email"
            fn={handleChange}
          />
          <InputField
            name="password"
            value={userInfo.password}
            type="text"
            label="Password"
            fn={handleChange}
          />

          <AuthButton>Sign Up</AuthButton>
        </AuthForm>
      </AuthPageInner>
    </AuthPageContainer>
  );
};

export default index;
