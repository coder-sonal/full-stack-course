import React from 'react';
import './Restaurent.css'

const RestaurantDeatails = (props) => {
    return(
        <div class="comp">
            { props.restroDeatils.map(val => {
                return (
                    <div class="main">
                        <div>
                            <img src={val.url} height="120px" width="150"></img>
                            <p class="rate">Rating {val.rating}</p>
                            <p class="cat">{val.reviews}</p>
                        </div>
                        <div>
                            <p class="name">{val.name}</p>
                            <p class="cat">{val.foodCategory}</p>
                            <p class="cat">Cost Rs {val.costForOne}/- for one</p>
                            <p>Min Rs 50/-  * Up to {val.time} mins</p>
                            <p>{val.paymentMode}</p>
                            <p>{val.votes} votes</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default RestaurantDeatails; 
