import React from 'react';
import UserProfilePage from './UserProfilePage';

class ProfileData extends React.Component{
    render(){
        const userData = {
            name : "Sonal Singh",
            location : "India",
            description1: "User interface designer and",
            description2 : "front-end developer",
            skills : ['UI/UX','Front End Development','HTML','CSS','JavaScript','React','Node']
        }
    return(
        <UserProfilePage data = {userData}/>
    )
    }
}
export default ProfileData;