import React from "react";
import { useState } from "react";
import Form from "../../Components/Form";
import { registerUser } from "../../Utils/API";
import {
  AuthButton,
  PageContainer,
  PageForm,
  PageTitle,
} from "../Utils/Styles/auth";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    const { userName, email, password }=userInfo;
    if(!userName || !email || !password) return;
    try {
      const data = await registerUser(userInfo);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <PageContainer>
      <PageTitle>Register</PageTitle>
      <PageForm onSubmit={register}>
        <Form
          name="userName"
          value={userInfo.userName}
          type="text"
          label="Name"
          fn={handleChange}
        />
        <Form
          name="email"
          value={userInfo.email}
          type="email"
          label="Email"
          fn={handleChange}
        />
        <Form
          name="password"
          value={userInfo.password}
          type="password"
          label="Password"
          fn={handleChange}
        />
        <AuthButton>Sign Up</AuthButton>
      </PageForm>
    </PageContainer>
  );
};

export default Register;
