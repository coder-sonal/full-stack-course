import React from 'react';
import './profile.css';

const UserProfilePage = props =>{
    return(
        <div class="main">
            <div>
                <h3 class="head">PRO</h3>
                <img src="./profileimg.jpg" height="40%" width="40%"></img>
                <p class="name">{props.data.name}</p>
                <p class="name">{props.data.location}</p>
                <p>{props.data.description1}</p>
                <p>{props.data.description2}</p>
            </div>
            <div>
                <button class="msg">Message</button>
                <button class="follow">Following</button>
            </div>
            <div class="skilldiv">
                <h3>SKILL</h3>
                <div class="skill">
                    {
                        props && props.data && Array.isArray(props.data.skills) && props.data.skills.map(val => {
                            return (
                                <div>{val}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfilePage;