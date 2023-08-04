import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Description from "./pages/Description";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/Description/:KEY" element={<Description />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
