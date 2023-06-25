import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT PAGES
import App from './App';
import CV from './pages/CV/CV';
import Tutoring from './pages/tutoring/Tutoring';
import AboutMe from './pages/aboutMe/AboutMe';
import Projects from './pages/projects/Projects';
import Blog from './pages/blog/Blog';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/personal_website/" element={<App />}>
        <Route path="/personal_website/projects" element={<Projects />} />
        <Route path="/personal_website/about" element={<AboutMe />} />
        <Route path="/personal_website/cv" element={<CV />} />
        <Route path="/personal_website/tutoring" element={<Tutoring />} />
        <Route path="/personal_website/blog" element={<Blog />} />
        </Route>
    </Routes>
  </BrowserRouter>
);
