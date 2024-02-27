import React from 'react';
import { useParams } from 'react-router-dom';
import product from '../Data/Data'


const SerachResult = () => {
    const {search} = useParams()
    const serachResult = product.filter(food=> food.name.toLowerCase().includes(search.toLocaleLowerCase()))
    return (
        <div>
            {
                serachResult.map(food=> {
                     return <div>
                        <h2>{food.name}</h2>
                     </div>
                })
            }
        </div>
    );
};

export default SerachResult;