import React from "react";
import {
  SideBarBottom,
  SideBarBottomBtn,
  SideBarContainer,
  SideBarLogo,
  SideBarLogoInner,
  SideBarLogoText,
  SideBarMiddle,
  SideBarNavigation,
  SideBarNavigationItem,
  SideBarNavigationLink,
  SideBarTop,
} from "./sidebar.styles";
import { SiCodechef } from "react-icons/si";
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";
import { useLogoutUserMutation } from "../../features/api/authApi";
import { removeUserInfo } from "../../features/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const index = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.User);
  const [logoutUser] = useLogoutUserMutation();

  const handledLogout = async () => {
    const refreshToken = token?.user?.refreshTokenJWT;
    try {
      await logoutUser({ refreshToken });
      dispatch(removeUserInfo());
      toast("Logout successfully", { type: "success" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SideBarContainer>
      <SideBarTop>
        <SideBarLogo>
          <SideBarLogoInner>
            <SiCodechef />
          </SideBarLogoInner>
          <SideBarLogoText>Z-Spot</SideBarLogoText>
        </SideBarLogo>
      </SideBarTop>

      <SideBarMiddle>
        <SideBarNavigation>
          <SideBarNavigationItem>
            <SideBarNavigationLink to="/">
              <span>
                <AiOutlineHome />
              </span>
              <p>Home</p>
            </SideBarNavigationLink>
          </SideBarNavigationItem>
          <SideBarNavigationItem>
            <SideBarNavigationLink to="/places">
              <span>
                <AiOutlineHome />
              </span>
              <p>Locations</p>
            </SideBarNavigationLink>
          </SideBarNavigationItem>
          <SideBarNavigationItem>
            <SideBarNavigationLink to="/favorites">
              <span>
                <AiOutlineHome />
              </span>
              <p>Favorites</p>
            </SideBarNavigationLink>
          </SideBarNavigationItem>
          <SideBarNavigationItem>
            <SideBarNavigationLink to="/g">
              <span>
                <AiOutlineHome />
              </span>
              <p>Added</p>
            </SideBarNavigationLink>
          </SideBarNavigationItem>
        </SideBarNavigation>
      </SideBarMiddle>

      <SideBarBottom>
        <SideBarNavigationLink to="/g">
          <span>
            <AiOutlineSetting />
          </span>
          <p>Setting</p>
        </SideBarNavigationLink>

        <SideBarBottomBtn onClick={handledLogout}>
          <span>
            <AiOutlineLogout />
          </span>
          <p>Logout</p>
        </SideBarBottomBtn>
      </SideBarBottom>
    </SideBarContainer>
  );
};

export default index;
