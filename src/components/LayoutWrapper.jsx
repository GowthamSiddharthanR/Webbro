// components/LayoutWrapper.js
"use client"; // This will make it a client-side component

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname(); // Access the pathname here

  // List of paths where the header and footer should be hidden
  const noLayoutPages = ["/", "/register","/login","/test"];

  // Check if the current page is in the noLayoutPages list
  const isNoLayoutPage = noLayoutPages.includes(pathname);

  return (
    <>
      {!isNoLayoutPage && <Header />}
      {children}
      {!isNoLayoutPage && <Footer />}
    </>
  );
};

export default LayoutWrapper;
