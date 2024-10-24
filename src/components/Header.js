import React,{useState} from 'react';
import "../asset/styles/header.css";
import Logo from '../asset/images/logo.png'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false); // State for toggling mobile menu
  const [showSubMenu, setShowSubMenu] = useState(false); // State for toggling submenu

  // Toggle the mobile menu
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // Toggle the submenu for "Online Store"
  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <header className="header">
    <div className="left-section">
      {/* Logo */}
      <Link to="/">
      <img src={Logo} alt="Logo" className="logo" />
      </Link>
      
      {/* Menu icon for mobile */}
      <div className="menu-icon" onClick={handleMenuToggle}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation list */}
      <ul className={`nav-list ${showMenu ? 'active' : ''}`}>
        <Link
          to="/website"
          onClick={() => setShowMenu(false)}
          style={{ color: "black", textDecoration: "none" }}
          >
         <li>Website</li>
          </Link>
        
        <Link
          to="/email"
          onClick={() => setShowMenu(false)}
          style={{ color: "black", textDecoration: "none"}}
        >
       <li>Email</li>
        </Link>
        


        <li className="submenu" onClick={handleSubMenuToggle}>
          Online Store
          {showSubMenu && (
            <div className="submenu-content">
              <h2>Products</h2>
              <ul>
                <Link
                  to="/online store"
                  onClick={() => setShowMenu(false)}
                  state={{ color: "black", textDecoration: "none"}}
                >
              <li>Online Store</li>
              </Link>
                
                <li>Online Courses</li>
                <li>Digital Downloads</li>
                <li>Webinars</li>
                <li>Coaching</li>
              </ul>
            </div>
          )}
        </li>
        <li>Switch to Podia</li>
        <li>Pricing</li>
      </ul>
    </div>

    {/* Right section with login and signup button */}
    <div className="right-section">
      <span className="login">Login</span>
      <button className="signup-btn">Sign Up Free</button>
    </div>
  </header>
  );
}

export default Header;
