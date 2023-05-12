import { useEffect, useState } from "react";
import InputField from "../../Components/InputField";
import { useNavigate } from "react-router-dom";
import {
  AuthButton,
  AuthForm,
  AuthPageContainer,
  AuthPageInner,
} from "../../Utils/styles/auth.styles";
import { useLoginUserMutation } from "../../features/api/authApi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { storeUserInfo } from "../../features/slices/userSlice";
import useUserLocation from "../../Utils/hooks/useUserLocation";

const index = () => {
  const { coords } = useUserLocation()
  const Navigate = useNavigate();
  const user = useSelector(state => state.User)
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    const { name, password } = userInfo;

    if (!name || !password) {
      toast("name and password is required!");
      return;
    }

    try {
      const data = await loginUser({ name, password });
      if (data.error) {
        toast("Invalid Credentials!");
        return;
      }
      dispatch(storeUserInfo(data.data));
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if(user.isLoggedIn){
      Navigate('/')
    }
  },[])

  return (
    <AuthPageContainer>
      <AuthPageInner>
        <h1>Login</h1>
        <AuthForm onSubmit={login}>
          <InputField
            name="name"
            value={userInfo.name}
            type="text"
            label="Name"
            fn={handleChange}
          />

          <InputField
            name="password"
            value={userInfo.password}
            type="text"
            label="Password"
            fn={handleChange}
          />
          <AuthButton>Sign In</AuthButton>
        </AuthForm>
      </AuthPageInner>
    </AuthPageContainer>
  );
};

export default index;
