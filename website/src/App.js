import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import "./variables.css";

import { Routes, Route, HashRouter } from "react-router-dom";

// IMPORT PAGES
import CV from './pages/CV/CV';
import Tutoring from './pages/tutoring/Tutoring';
import AboutMe from './pages/aboutMe/AboutMe';
import Projects from './pages/projects/Projects';
import Blog from './pages/blog/Blog';


function App() {
  return (
    <HashRouter>
      <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <Footer></Footer>
      <div>
        <Routes>
            <Route exact path="/personal_website/projects:optionalParam" component={<Projects />} />
            <Route exact path="/personal_website/about:optionalParam" component={<AboutMe />} />
            <Route exact path="/personal_website/cv:optionalParam" component={<CV />} />
            <Route exact path="/personal_website/tutoring:optionalParam" component={<Tutoring />} />
            <Route exact path="/personal_website/blog:optionalParam" component={<Blog />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;