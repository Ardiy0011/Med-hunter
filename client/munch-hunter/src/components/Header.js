import React, { useState } from 'react';
import './Header.css';
import '../components/Login.css';
import { Link } from 'react-router-dom';
import { useUserContext } from './UserContext';


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { username, clearUser } = useUserContext();
  const { accesstitle } = useUserContext();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
  setTimeout(()=>{
    <div className="alert-modal">
    <div className="modal-content">
      <p>Logged out</p>
    </div>
  </div>
  }, 3000)

    clearUser(); // Clear the user context
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        Med-hunter
      </Link>
      <div>
      {username ? <p>Signed in as {username}</p> : null}
      
      </div>

      <div className={`nav-toggle ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <div id='slimbar'>
        <ul>
        <li>
              <Link to="/Home">Home</Link>
        </li>
            {username ? (
              <li>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">{accesstitle}</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
