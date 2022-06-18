import React from 'react'

export default function NavbarLight() {
    return (
        <div>
            <nav className='navbar navbar-light bg-light'>
                <header>
                    Navbar
                </header>
                <ul className='nav-links'>
                    <li className="nav-link"><a href='#' className='link-light'>Home</a></li>
                    <li className="nav-link"><a href='#' className='link-light'>About</a></li>
                    <li className="nav-link"><a href='#' className='link-light'>News</a></li>
                    <li className="nav-link"><a href='#' className='link-light'>Social</a></li>
                    <div class="dropdownl">
                        <li class="dropbtn">Dropdown</li>
                        <div class="dropdownl-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 4</a>
                            <a href="#">Link 5</a>
                            <a href="#">Link 6</a>
                        </div>
                    </div> <div class="dropdownl">
                        <li class="dropbtn">Dropdown 2</li>
                        <div class="dropdownl-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 4</a>
                            <a href="#">Link 5</a>
                            <a href="#">Link 6</a>
                        </div>
                    </div>

                </ul>
            </nav>
        </div>
    )
}
