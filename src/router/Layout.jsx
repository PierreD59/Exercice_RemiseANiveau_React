import { Outlet } from "react-router";
import Header from "../commons/header/header";
import React from "react";
import Footer from "../commons/footer/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
