import React, { useState } from "react";
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
import { sideBarData } from "./SideBarData";
import ActiveLinkIndicator from "../TabAnimation";
import { useLogoutUserMutation } from "../../../features/api/authApi";
import { removeUserInfo } from "../../../features/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useGetActiveUrl from "../../../Utils/hooks/useGetActiveUrl";

const index = () => {
  const location = useGetActiveUrl();
  const token = useSelector((state) => state.User.user);
  let [activeTab, setActiveTab] = useState(location[0].to);
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();

  const handledLogout = async () => {
    try {
      const refreshToken = token?.refreshTokenJWT;
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
        <SideBarLogo to="/">
          <SideBarLogoInner>
            <SiCodechef />
          </SideBarLogoInner>
          <SideBarLogoText>Z-Spot</SideBarLogoText>
        </SideBarLogo>
      </SideBarTop>

      <SideBarMiddle>
        <SideBarNavigation>
          {sideBarData.map((item) => (
            <SideBarNavigationItem
              key={item.id}
              onClick={() => setActiveTab(item.to)}
            >
              <SideBarNavigationLink to={item.to}>
                <span>
                  {item.icon}
                  {/* <AiOutlineHome /> */}
                </span>
                <p>{item.name}</p>
              </SideBarNavigationLink>
              {activeTab === item.to && (
                <ActiveLinkIndicator layoutId="bubble" rounded="true" />
              )}
            </SideBarNavigationItem>
          ))}
        </SideBarNavigation>
      </SideBarMiddle>

      <SideBarBottom>
        <SideBarNavigationLink to="/">
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
