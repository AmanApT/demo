import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navChild1">
        <img src={logo} />
      </div>
      <div className="navChild2">
        <span className="nav2Item">Home</span>
        <span className="nav2Item">LP</span>
        <span className="nav2Item">Earn</span>
        <span className="nav2Item">Lucky Drop</span>
        <span className="nav2Item">AICODE</span>
        <span className="nav2Item">DAO</span>
      </div>
      <div className="navChild3">Connect Wallet</div>
    </nav>
  );
};

export default NavBar;
