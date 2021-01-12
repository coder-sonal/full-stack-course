import React from 'react';
import './Restaurent.css';

const filterRestro = (restroList, rating) => {
    const filteredRestroList = restroList.filter(restro => restro.rating >= rating);
    return filteredRestroList;
}

class RestaurantDetails extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            restroList: props.restroDeatils,
        }
    }

    render() {
        return(
           <div>
               <div class="navbar">Filter :-
                    <button onClick={() => {
                        let dummyrestroList = filterRestro(this.props.restroDeatils, 4); 
                        this.setState({
                            restroList: dummyrestroList,
                        })
                    }}>Above 4 Stars</button>
                    <button onClick={() =>{
                        let dummyrestroList = filterRestro(this.props.restroDeatils, 3);
                        this.setState({
                            restroList: dummyrestroList,
                        })
                    }

                    }>Above 3 Stars</button>
                    <button onClick={()=>{
                        let dummyrestroList = filterRestro(this.props.restroDeatils, 2);
                        this.setState({
                            restroList: dummyrestroList,
                        })
                    }}>Above 2 Stars</button>
                    <button onClick={()=>{
                        let dummyrestroList = filterRestro(this.props.restroDeatils, 1);
                        this.setState({
                            restroList: dummyrestroList,
                        })
                    }}>Above 1 Star</button>
               </div>
               <div class="comp">
                { this.state.restroList.map(val => {
                    return (
                        <div class="main" key={val.name}>
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
           </div>
        );
    };
}
export default RestaurantDetails; 
