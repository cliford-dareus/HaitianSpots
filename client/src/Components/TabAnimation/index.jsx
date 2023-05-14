import React from "react";
import { ActiveLinkIndicator } from "../SideBar/sidebar.styles";
import { TbBorderRadius } from "react-icons/tb";

const index = ({ layoutId, rounded }) => {
  return (
    <ActiveLinkIndicator
      rounded={layoutId === 'bubble'}
      layoutId={layoutId}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
    ></ActiveLinkIndicator>
  );
};

export default index;
