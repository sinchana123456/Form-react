import React from 'react';
import { FaBars } from 'react-icons/fa'
import { IoIosNotificationsOutline } from "react-icons/io";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

const NavBar = () => {
  
  return (
    <nav>
      <div className="nav-container">
        <div className="home-button">
          <FaBars/>
        </div>
        <Button variant="light" className="home-button1">
        <IoIosNotificationsOutline color="109887" size="30px" /> <Badge bg="danger" className='badge'>9</Badge>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;

