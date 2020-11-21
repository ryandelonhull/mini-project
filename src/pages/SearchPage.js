import React from "react";
import Search from "../components/Search";

// import axios from "axios";
import API from "../utils/API";

class SearchPage extends React.Component{
    constructor(props) {
        super(props) 
            this.state = {
                books: [{}],
                filteredBooks: [{}]
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
    
    getBooks = (event) => {
        const filter = event.target.value;
        const filterBooks = this.state.users.filter( item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        })
        this.setState({filteredBooks: filterBooks})
    }

    render() {

        return (
            <div>
                <Search />
            </div>
        )
    }

};

export default SearchPage;