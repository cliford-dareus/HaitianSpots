import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const SideBarContainer = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--bg--primary-800);
  transform: translateX(-100%);

  @media screen and (min-width: 750px) {
    position: initial;
    transform: initial;
    top: initial;
    left: initial;
    bottom: initial;
    position: relative;
    width: var(--sidebar--tablet-width);
    background-color: var(--bg--primary-800);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 1em;
    overflow: hidden;
  }

  @media screen and (min-width: 1024px) {
    width: var(--sidebar--width);
  }
`;

export const SideBarTop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-inline: 1.5em;
  text-transform: uppercase;
`;

// Logo
export const SideBarLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const SideBarLogoInner = styled.span`
  font-size: 2.55rem;
  color: var(--accent--color-200);
`;

export const SideBarLogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--txt--color-100);

  @media screen and (min-width: 750px) {
    display: none;
  }
`;

// Navigation
export const SideBarMiddle = styled.div`
  width: 100%;
  margin-top: 12em;
`;

export const SideBarNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`;

export const SideBarNavigationItem = styled.li`
  position: relative;
  width: 100%;

  cursor: pointer;
  isolation: isolate;
  &:hover {
    background-color: var(--accent--color-200);
  }
`;

export const ActiveLinkIndicator = styled(motion.span)`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: var(--accent--color-200);
  border-radius: ${(props) => (props.rounded ? "0" : "0.5em")};
`;

export const SideBarNavigationLink = styled(NavLink)`
  height: 100%;
  color: var(--txt--color-100);
  display: flex;
  align-items: center;
  padding: 0.8em 1.5em;
  gap: 1em;
  text-decoration: none;
  position: relative;
  isolation: isolate;

  @media screen and (min-width: 750px) {
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    justify-content: start;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--txt--color-100);
    font-size: 1.5em;
  }

  p {
    font-size: 1.1rem;

    @media screen and (min-width: 750px) {
      display: none;
    }

    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
`;

//
export const SideBarBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  bottom: 0;
  left: 0;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 1em;
  border-radius: 0.5em 0.5em 0.5em 0;
  background-color: var(--accent--color-200);

  a {
    padding-inline: 0;
  }
`;

export const SideBarBottomBtn = styled.button`
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  border-radius: 0.5em;
  font-size: 1rem;
  font-weight: bold;
  color: var(--accent--color-200);

  p {
    @media screen and (min-width: 750px) {
      display: none;
    }

    @media screen and (min-width: 1024px) {
      width: var(--sidebar--width);
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin-right: 0.5em;

    @media screen and (min-width: 750px) {
      margin-right: 0;
    }

    @media screen and (min-width: 1024px) {
      margin-right: 0.5em;
    }
  }
`;
