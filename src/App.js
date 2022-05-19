import Navbar from "./components/Navbar";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Infobar from "./components/Infobar";
import Funbox from "./components/Funbox";

function App() {
  return (
    <div className="App">
      <div className="row1">
        <Navbar />
      </div>
      <Sidebar className="col1" />
      <Content className="col2" />
      <Infobar className="col3" />
      <div>
        <Funbox className="row3" />
      </div>
    </div>
  );
}

export default App;
