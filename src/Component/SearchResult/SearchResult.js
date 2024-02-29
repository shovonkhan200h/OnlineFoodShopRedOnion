import React from 'react';
import { useParams } from 'react-router-dom';
import {products} from './../Data/Data'

const SearchResult = () => {
    const {search} = useParams()
    const SearchResult = products.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
    console.log(SearchResult);

    
    

    return (
        <div>
            
        </div>
    );
};

export default SearchResult;