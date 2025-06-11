"use client";
import { useState, useEffect, useRef } from "react";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

export default function NavWrapper() {
  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setHideNav(false);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed w-full left-0 top-0 z-50 transition-transform duration-300 ${hideNav ? "-translate-y-full" : "translate-y-0"}`} style={{margin:0,padding:0,border:0}}>
      <TopNavbar />
      <Navbar hideNav={hideNav} />
    </div>
  );
} 