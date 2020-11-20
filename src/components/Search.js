import React from "react";
import axios from "axios";
import API from "../utils/API";


function Search () {
    API.getBooks() 
    return (
        <div style={{ height: 110, clear: "both", paddingTop: 120, textAlign: "center" }} className="jumbotron border border-success">       
            <form className="form-inline my-2 my-lg-0">
                <h2>Lookup a Book up in here...</h2>   
                <input className="form-control mr-lg-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onChange={e => this.API.getBooks(e)}>Search</button>
            </form>
        </div>
    )
}

export default Search;