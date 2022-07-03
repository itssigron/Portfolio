import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import reportWebVitals from './reportWebVitals'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-233472729-1');

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, Math.floor(Math.random() * 1200) + 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  
    reportWebVitals(({ id, name, value }) =>
      ReactGA.event({
        action: name,
        category: 'Web Vitals',
        label: id,
        nonInteraction: true,
        value: Math.round(
          name === 'CLS' ? value * 1000 : value
        ),
      })
    );
  }, [window.location.pathname]);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
