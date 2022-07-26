import React, { Component } from 'react';
import {MenuItems} from './MenuItems'

class Navbar extends Component {
    render() { 
        return (
            <nav className='NavbarItems'>
                    <h1 className='navbar-logo'>React<i class="fa-duotone fa-align-center"></i></h1>
                    <div className='new-ico'>
                    </div>
                    <ul>
                        {MenuItems.map((items, index) =>{
                                return(
                                    <li key={index}>
                                        <a className={MenuItems.cName} href={items.url}>
                                            {items.title}
                                         </a>
                                    </li>

                                )
                        })}

                    </ul>
            </nav>
        );
    }
}
 
export default Navbar;