import React, {Component} from 'react'; 
import { withRouter } from "react-router-dom";
import "./Navbar.css";


class Navbar extends Component {

 handleClick=(e,url) => {
     e.preventDefault();
     this.props.history.push(url);
 }
 render() { 
    return ( 
        <nav className='nav-container'> 
             <div className="menu-container">
                <span><div className='logo'></div></span>
                 <span onClick= {(event)=> this.handleClick(event,'/e-shop')}>E-shop</span>
                 <span onClick= {(event)=> this.handleClick(event,'/lookbook')}>lookbook</span>
                 <span onClick= {(event)=> this.handleClick(event,'/news')}>News</span>
                 <span onClick= {(event)=> this.handleClick(event,'/about')}>About</span>    
             </div>
             <div className="shop-menu-container">
                     <span>
                            <div className='search'>
                                <input type="text" placeholder="search" className='searchinput'/> 
                                <i className= 'logosearch'></i>
                            </div>
                    </span>
                    <span ><div className = 'logostyle'></div> </span>
                    <span ><div className = 'logobag'></div></span> 
                    
                </div>
             </nav>    
         )
    }
}




export default withRouter(Navbar);