import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import Search_icon from '../../assets/search_icon.svg';
import Bell_icon from '../../assets/bell_icon.svg';
import Profile_icon from '../../assets/profile_img.png';
import Caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../Firebase';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current?.classList.add("nav-dark");
      } else {
        navRef.current?.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);  // ✅ Add event listener

    return () => {
      window.removeEventListener("scroll", handleScroll);  // ✅ Cleanup
    };
  }, []);  // ✅ Empty dependency array ensures this runs only once

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={Search_icon} alt="Search" className="icons" />
        <p>Children</p>
        <img src={Bell_icon} alt="Bell" className="icons" />
        <div className="navbar-profile">
          <img src={Profile_icon} alt="Profile" className="profile" />
          <img src={Caret_icon} alt="Caret" />
          <div className="dropdown">
            <p onClick={() => logout()}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
