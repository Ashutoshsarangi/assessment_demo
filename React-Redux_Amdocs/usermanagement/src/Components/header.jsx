/**
 * @description This is a Header Component, this is common for ALL.
 * @author Ashutosh Sarangi
 */

import './header.css';
const Header = (props)=>{

    return (
        <div className="header">
            <span className="taskname" >React- Redux Test</span>
            <span>Ashutosh Sarangi</span>
        </div>
    );
}

export default Header;