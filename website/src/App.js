import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import "./variables.css";

function App() {
  return (
    <div>
      <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
