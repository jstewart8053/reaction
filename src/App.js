import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
