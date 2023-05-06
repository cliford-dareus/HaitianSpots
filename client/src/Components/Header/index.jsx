import React from "react";
import {
  HeaderActions,
  HeaderContainer,
  HeaderProfile,
  HeaderSearch,
  HeaderSearchInput,
} from "./header.styles";
import { BsSearch } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";

const index = () => {
  return (
    <HeaderContainer>
      <HeaderSearch>
        <span>
          <BsSearch />
        </span>
        <HeaderSearchInput type="text" placeholder="Search for places" />
      </HeaderSearch>

      <HeaderActions>
        <span>
          <BsMoon />
        </span>
        <span>
          <IoNotificationsOutline />
        </span>

        <HeaderProfile></HeaderProfile>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default index;
