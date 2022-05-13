import Navbar from "./components/Navbar";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="row1">
        <Navbar />
      </div>

      <Sidebar className="col1" />

      <Content />

      <div className="row3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
