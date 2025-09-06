import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="py-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
