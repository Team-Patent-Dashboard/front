import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Home from "./pages/Home";
import News from "./pages/News";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
