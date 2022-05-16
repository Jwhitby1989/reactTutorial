import Navbar from "./components/Navbar";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Infobar from "./components/Infobar";

function App() {
  return (
    <div className="App">
      <div className="row1">
        <Navbar />
      </div>
      <div className="row2">
        <Sidebar className="col1" />

        <Content className="col2" />

        <Infobar className="col3" />
      </div>
    </div>
  );
}

export default App;
