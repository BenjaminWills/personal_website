import React from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';


const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/personal_website/about">
        About me
      </a>
      <a className="menu-item" href="/personal_website/cv">
        CV
      </a>
      <a className="menu-item" href="/personal_website/projects">
        Project showcase
      </a>
      <a className="menu-item" href="/personal_website/blog">
        Blog
      </a>
      <a className="menu-item" href="/personal_website/tutoring">
        Tutoring
      </a>
    </Menu>
  );
};

export default Sidebar;
