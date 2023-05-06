import React from "react";
import {
  SideBarBottom,
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

const index = () => {
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
            <SideBarNavigationLink to="/locations">
              <span>
                <AiOutlineHome />
              </span>
              <p>Locations</p>
            </SideBarNavigationLink>
          </SideBarNavigationItem>
          <SideBarNavigationItem>
            <SideBarNavigationLink to="/locations">
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

        <SideBarNavigationLink to="/g">
          <span>
            <AiOutlineLogout />
          </span>
          <p>Logout</p>
        </SideBarNavigationLink>
      </SideBarBottom>
    </SideBarContainer>
  );
};

export default index;
