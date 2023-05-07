import React, { useState } from "react";
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
import { useGetLocationQuery } from "../../features/api/locationApi";

const index = () => {
  const [word, setWord] = useState("");
  const { data, isLoading, isError } = useGetLocationQuery(word);

  return (
    <HeaderContainer>
      <HeaderSearch>
        <span>
          <BsSearch />
        </span>
        <HeaderSearchInput
          type="text"
          placeholder="Search for places"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </HeaderSearch>

      <HeaderActions>
        <span>
          <BsMoon />
        </span>
        <span>
          <IoNotificationsOutline />
        </span>

        <HeaderProfile>{word}</HeaderProfile>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default index;
