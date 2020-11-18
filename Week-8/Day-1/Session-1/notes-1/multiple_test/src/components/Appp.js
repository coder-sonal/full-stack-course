import React from 'react';
import SimpleList from './SimpleList';
import Dairy from './Dairy';
import Grocery from './Grocery';
import './appp.css'

const Appp = () => {
    return (
        <div>
            <h1 class="header">Shopping List</h1>
            <img src = "/shopping.jpeg" height = "20%" width = "20%" />
            <SimpleList />
            <Dairy />
            <Grocery />
        </div>
    )
}
export default Appp; 