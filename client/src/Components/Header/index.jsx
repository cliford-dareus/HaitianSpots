import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderActions,
  HeaderContainer,
  HeaderPopup,
  HeaderProfile,
  HeaderSearch,
  HeaderSearchInput,
} from "./header.styles";
import DefaultPic from "../../assets/profile.jpg";
import { BsSearch } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { useGetLocationQuery } from "../../features/api/locationApi";

const index = () => {
  const [word, setWord] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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

        <HeaderProfile onClick={() => setIsOpen(!isOpen)}>
          <img src={DefaultPic} alt="" />
        </HeaderProfile>
        {isOpen && (
          <HeaderPopup>
            <ul>
              <li>
              <Link to="/register">Create an account</Link>
              </li>
              <li>
                <Link to="/register">Create an account</Link>
              </li>
              <li>Logout</li>
            </ul>
            

          </HeaderPopup>
        )}
      </HeaderActions>
    </HeaderContainer>
  );
};

export default index;
