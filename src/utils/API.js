import React from "react";
import axios from "axios";


export default {
    searchBooks: function(search) {
        return axios.get("http://books.google.com/books?id=sazytgAACAAJ&dq=title:" + search + "&hl=&source=gbs_api")
    }
};
