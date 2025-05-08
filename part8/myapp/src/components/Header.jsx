import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">
                        <h3>React Router Exercise</h3>
                    </Link>
                    <nav>
                        <ul>
                            <li><NavLink to={'/home'}>Home</NavLink></li>
                            <li><NavLink to={'/contact'}>Contact</NavLink></li>
                            <li><NavLink to={'/about'}>About</NavLink></li>
                            <li><NavLink to={'/product/1001'}>Product</NavLink></li>

                            <li><NavLink to={'/newsletter'}>NewsLetter</NavLink></li>
                            <li><NavLink to={'/donate'}>Donate</NavLink></li>

                            <li><NavLink to={'/product/redbull/1001'}>Product Detail</NavLink></li>
                            <li><NavLink to={'/product/?q=reactjs'}>Product List by query</NavLink></li>
                            <li><NavLink to={'/product/?keyword=reactjs&batch=2&fee=40000'}>Product List by query</NavLink></li>

                            <li><NavLink to={'/language'}>Language</NavLink></li>
                            <li><NavLink to={'/language/en'}>Language English</NavLink></li>
                            <li><NavLink to={'/language/th'}>Language Thailand</NavLink></li>
                            <li><NavLink to={'/language/sri'}>Language Srilanka</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;

// The Different between of Link and NavLink is class = "active"