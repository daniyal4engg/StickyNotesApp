import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Navbar";
import NoteHome from "./components/NoteHome";
function App() {
  return (
    <div className="App">
      <Nav />
      <NoteHome />
    </div>
  );
}

export default App;
