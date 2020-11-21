import React from "react";

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>GOOGLE BOOKS</h1>
      <a className="navbar-brand" href="/">
        SEARCH
      </a>
      <br></br>
      <a className="navbar-brand" href="/books">
        SAVED
      </a>
    </nav>
  );
}
export default Navbar;