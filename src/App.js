import "./App.css";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Taskbar from "./components/section/Taskbar";

function App() {
  return (
    <div className="container">
      <div className="center">
        <Header />
        {false && <Taskbar/>}
        <Section />
      </div>
    </div>
  );
}

export default App;
