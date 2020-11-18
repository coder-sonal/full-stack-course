import React from 'react';
import './simpleList.css'
const SimpleList = () => {
    return(
        <div>
            <h2>Fruits</h2>
            <ol class="list">
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
                <li>Watermellon</li>
            </ol>
        </div>
    );
};
export default SimpleList;