import React from "react";
import Search from "../components/Search";
// import Results from "../components/Results";
// import axios from "axios";
import API from "../utils/API";

class SearchPage extends React.Component{
    constructor(props) {
        super(props) 
            this.state = {
                books: [],
            };
        
    }


    componentDidMount() {
        API.getBooks()
        .then(response => {
            
        console.log(response.data);
        })
        .catch(error => {
        console.log(error);
        });
    };
    
    render() {

        return (
            <div>
                <Search/>
            </div>
        )
    }

};

export default SearchPage;