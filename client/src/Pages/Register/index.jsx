import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../Components/UI/InputField";
import {
  AuthButton,
  AuthForm,
  AuthPageContainer,
  AuthPageInner,
} from "../../Utils/styles/auth.styles";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../../features/api/authApi";

const index = () => {
  const [registerUser] = useRegisterUserMutation()
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    const { name, email, password } = userInfo;
    if (!name || !email || !password) {
      toast('name, email and password is required!')
      return
    };
    try {
      const data = await registerUser(userInfo);
      toast('Account created!', {type: 'error'})
      console.log(data);
    } catch (error) {
      toast(`${error.message}`, {type: 'error'})
      console.log(error.message);
    }
  };

  return (
    <AuthPageContainer>
      <AuthPageInner>
        <h1>Register</h1>
        <AuthForm onSubmit={register}>
          <InputField
            name="name"
            value={userInfo.name}
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
