import React, { useEffect, useState } from "react";
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
  const [word, setWord] = useState('');
  const [word2, setWord2] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
 

  const handleSearch = (e) => {
    setWord(e.target.value);
  }
  
  useEffect(() => {
    if(word === '') {
      setWord2(null)
      return
    }
    setWord2(word)
  }, [word])

  return (
    <HeaderContainer>
      <div style={{ width: '35%', height: '35px', position: 'relative'}}>
        <HeaderSearch>
          <span>
            <BsSearch />
          </span>
          <HeaderSearchInput
            type="text"
            placeholder="Search for places"
            value={word}
            onChange={handleSearch}
          />
        </HeaderSearch>

       <SearchResult word2={word2}/>
      </div>

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

const SearchResult = ({word2}) => {
  const { data, isLoading, isError } = useGetLocationQuery(word2);
  return(
    <div>
    {data?.map((loc)=> (
      <p key={loc._id}>{loc.name}</p>
    ))}
  </div>
  )
}

export default index;


