import React, { useState, useEffect } from "react";
import "./HeaderNavigation.css";
import Logo from "../../media/kbkm.png";

const HeaderNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky scroll
  useEffect(() => {
    const navbar = document.getElementById("Header-navigation");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="Header-navigation">
      <div className="container">
        <div id="Header-logo">
          <a href="/">
            <img src={Logo} alt="Company logo" loading="lazy" />
            Kichik biznesga <br /> ko'maklashish markazi
          </a>
        </div>

        <div
          id="burger"
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="Header-nav" className={menuOpen ? "show" : ""}>
          <ul>
            <li><a href="/">Bosh sahifa</a></li>
            <li><a href="#HeaderMainProducts">Xizmatlar</a></li>
            <li><a href="#Home-main-top-products">Loyihalar</a></li>
            <li><a href="#Home-main-top-info">Biz haqimizda</a></li>
            <li><a href="#Contact">Bo'glanish</a></li>
          </ul>
        </div>

        <div id="Header-contact" className={menuOpen ? "show" : ""}>
          <p>Bog'lanish telefon raqami</p>
          <b><a href="tel:+998973024500">+998(97) 302-45-00</a></b>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
