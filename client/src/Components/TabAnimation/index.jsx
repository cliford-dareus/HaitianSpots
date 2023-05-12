import React from "react";
import { ActiveLinkIndicator } from "../SideBar/sidebar.styles";
import { TbBorderRadius } from "react-icons/tb";

const index = ({ layoutId }) => {
  return (
    <ActiveLinkIndicator
      initial={{ borderRadius: layoutId == "bubble" ? "" : "0.5em" }}
      // animate={{ borderRadius: layoutId == "bubble" ? "" : "0.5em" }}
      style={layoutId == 'bubble'? '': {borderRadius: '0.5em'}}
      layoutId={layoutId}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
    ></ActiveLinkIndicator>
  );
};

export default index;
