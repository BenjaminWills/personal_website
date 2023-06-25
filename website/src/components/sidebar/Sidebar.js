import React from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';


const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        About me
      </a>
      <a className="menu-item" href="/projects">
        Project showcase
      </a>
      <a className="menu-item" href="/blog">
        Blog
      </a>
      <a className="menu-item" href="/tutoring">
        Tutoring
      </a>
    </Menu>
  );
};

export default Sidebar;
