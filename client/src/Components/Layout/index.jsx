import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutContainer, MainContent } from "./layout.styles";
import SideBar from "../SideBar";
import Header from "../Header";

const index = () => {
  return (
    <LayoutContainer>
      <SideBar />
      <MainContent>
        <Header />
        <div
          style={{
            height: '100vh',
            overflow: "scroll",
          }}
        >
          <Outlet />
        </div>
      </MainContent>
    </LayoutContainer>
  );
};

export default index;
