import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { LayoutContainer } from "../assets/styles/containers/LayoutContainer";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main children={children} />
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
