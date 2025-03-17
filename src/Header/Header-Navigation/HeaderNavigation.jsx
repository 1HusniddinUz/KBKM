import React, { useEffect, useState } from "react";
import "./HeaderNavigation.css";


const HeaderNavigation = () => {
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", function () {
  //     const navbar = document.getElementById("Header-navigation");
  //     if (window.scrollY > 50) { 
  //         navbar.classList.add("sticky");
  //     } else {
  //         navbar.classList.remove("sticky");
  //     }
  //   });
  // }, []);

  // * Header-navigation ga qo'shiladi bu
  // className={isSticky ? "sticky" : ""} 

  return (
    <div id="Header-navigation">
      <div className="container">
        <div id="Header-logo">
          <img src="https://kbrj.uz/images/logo_black.png" alt="Company logo" />
        </div>
        <div id="Header-nav">
          <ul>
            <li><a href="#Header">Bosh sahifa</a></li>
            <li><a href="#Home-main-top-products">Servislar</a></li>
            <li><a href="#Home-main-top-info">Biz haqimizda</a></li>
            <li><a href="#Contact">Bo'glanish</a></li>
          </ul>
        </div>
        <div id="Header-contact">
          <p>Bog'lanish telefon raqami</p>
          <b><a href="#">+999(91) 820-84-46</a></b>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
