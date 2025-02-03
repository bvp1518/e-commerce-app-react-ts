import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./header/Header";

export const AppLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
