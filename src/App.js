import React from "react";
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import './App.css';



function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <Search/>
    </div>
  );
}

export default App;
