import React from 'react'

import './navbar.style.scss'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-content container' >
                <ul className='nav-content-links' >
                    <li className='nav-content-links-item' >
                        Home
                    </li>
                    <li className='nav-content-links-item' >
                        About
                    </li>
                    <li className='nav-content-links-item' >
                        Projects
                    </li>
                    <li className='nav-content-links-item' >
                        Contact
                    </li>
                </ul>
                <div className='nav-content-right' >
                    <div className='nav-content-right-lang' >
                        <div className='nav-content-right-lang-item' >
                            <p>CZ</p>
                        </div>
                        <div className='nav-content-right-lang-item' >
                            <p>EN</p>
                        </div>

                    </div>
                    <div className='nav-content-right-switch' ></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar