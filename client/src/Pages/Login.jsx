import React from "react";
import { useState } from "react";
import Form from "../Components/Form";
import { useNavigate } from 'react-router-dom'
import {
  AuthButton,
  PageContainer,
  PageForm,
  PageTitle,
} from "../Utils/Styles/auth";
import { useAuthContext } from "../Context/userAuthContext";
import { loginUser } from "../Utils/API";

const Login = () => {
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
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>

      <PageForm onSubmit={login}>
        <Form
          name="email"
          value={userInfo.email}
          type="text"
          label="Email"
          fn={handleChange}
        />
        <Form
          name="password"
          value={userInfo.password}
          type="text"
          label="Password"
          fn={handleChange}
        />

        <AuthButton>Sign Up</AuthButton>
      </PageForm>
    </PageContainer>
  );
};

export default Login;
