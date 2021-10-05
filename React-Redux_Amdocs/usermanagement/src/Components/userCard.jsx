/**
 * @description This is a Card component for Each user.
 * @author Ashutosh Sarangi
 */

import './userCard.css';
const UserCard = (props)=>{
    const {name, email, phone, website} = props.user;
    const {city} =props.user.address;
    return (
        <div className="card" onDoubleClick={props.onDoubleClick}>
            <header className="cardHeader"> {name}</header>
           <div className="cardItem">
                <span> {email}</span>
                <span>{city}</span>
                <span>{phone}</span>
                <span>{website}</span>
                <span>{props.user.company.name}</span>
           </div>
        </div>
    );
}

export default UserCard;