import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Nav/Navigation";
import Home from "./pages/Home";
import CoolCSS from "./pages/Cool-CSS";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cool-css" element={<CoolCSS />} />
      </Routes>
    </>
  );
}

export default App;
