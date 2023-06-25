import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import "./variables.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT PAGES
import CV from './pages/CV/CV';
import Tutoring from './pages/tutoring/Tutoring';
import AboutMe from './pages/aboutMe/AboutMe';
import Projects from './pages/projects/Projects';
import Blog from './pages/blog/Blog';


function App() {
  return (
    <BrowserRouter>
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
    <Footer></Footer>
    <Routes>
        <Route path="/personal_website/projects" element={<Projects />} />
        <Route path="/personal_website/about" element={<AboutMe />} />
        <Route path="/personal_website/cv" element={<CV />} />
        <Route path="/personal_website/tutoring" element={<Tutoring />} />
        <Route path="/personal_website/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;