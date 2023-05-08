import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../Components/InputField";
import { registerUser } from "../../Utils/API";
import {
  AuthButton,
  AuthForm,
  AuthPageContainer,
  AuthPageInner,
} from "../../Utils/styles/auth.styles";

const index = () => {
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
    const { userName, email, password } = userInfo;
    if (!userName || !email || !password) return;
    try {
      const data = await registerUser(userInfo);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthPageContainer>
      <AuthPageInner>
        <h1>Register</h1>
        <AuthForm onSubmit={register}>
          <InputField
            name="userName"
            value={userInfo.userName}
            type="text"
            label="Name"
            fn={handleChange}
          />
          <InputField
            name="email"
            value={userInfo.email}
            type="email"
            label="Email"
            fn={handleChange}
          />
          <InputField
            name="password"
            value={userInfo.password}
            type="password"
            label="Password"
            fn={handleChange}
          />
          <AuthButton>Sign Up</AuthButton>
        </AuthForm>
        <p>
          Already have an account, <Link to="/login">login here!</Link>{" "}
        </p>
      </AuthPageInner>
    </AuthPageContainer>
  );
};

export default index;
