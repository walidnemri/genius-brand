import React, {Component} from 'react'; 
import "./Navbar.css";
import logo from './logo.svg';
import profile from './profile.svg';
import bag from './bag.svg';
import loupe from './loupe.svg';

class Navbar extends Component {
    render() {
        return (  
            <nav className='nav-container'> 
                <div className="menu-container">
                <span><a><div className='logo'></div></a></span>
                        <span><a >E-shop</a></span>
                        <span><a>Lookbook</a></span>
                        <span><a >News</a></span>
                        <span><a >About</a></span>   
                    
                </div>
                <div className="shop-menu-container">

                     <span>
                                <div className='search'>
                                    <input type="text" placeholder="search" className='searchinput'/> 
                                    <i className= 'logosearch'></i>
                                </div>
                    </span>
                     <span ><a><div className = 'logostyle'></div> </a></span>
                     <span ><a><div className = 'logobag'></div></a></span> 
                    
                </div>
            </nav>
           
        )
    }
}




export default Navbar