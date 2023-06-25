import React from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';


const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        About me
      </a>
      <a className="menu-item" href="/salads">
        Project showcase
      </a>
      <a className="menu-item" href="/pizzas">
        Blog
      </a>
      <a className="menu-item" href="/desserts">
        Tutoring
      </a>
    </Menu>
  );
};

export default Sidebar;
