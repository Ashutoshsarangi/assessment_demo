/**
 * @description This is the Entry Point of the Application
 * @author Ashutosh Sarangi
 */
import logo from '../logo.svg';
import './home.css';


function Home(props){
    const btnText = 'User Listing >>';

    const handleClick =( ) =>{
        props.history.push('/users');
    }
    return (
        <div className="homeContainer">
            <header>
                <img src={logo} className="App-logo"/>
            </header>
            <button className="btn" onClick={handleClick}>{btnText}</button>
        </div>
    )
}

export default Home;