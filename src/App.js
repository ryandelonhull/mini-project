import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Axios from "axios";
import "./App.css";



function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Jumbotron/>
      <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/books" component={SavedPage} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
      </Switch>

    </div>
    </Router>
  );
}


export default App;
