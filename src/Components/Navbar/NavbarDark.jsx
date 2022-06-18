import React, { useState } from 'react';
export default function Navbar() {
    return (
        <>
            <nav className='navbar navbar-dark bg-dark'>
                <header>
                    Navbar
                </header>
                <ul className='nav-links'>
                    <li className="nav-link"><a href='#' className='link-dark'>Home</a></li>
                    <li className="nav-link"><a href='#' className='link-dark'>About</a></li>
                    <li className="nav-link"><a href='#' className='link-dark'>News</a></li>
                    <li className="nav-link"><a href='#' className='link-dark'>Social</a></li>
                    <div class="dropdownd">
                        <li class="dropbtn">Dropdown</li>
                        <div class="dropdownd-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 4</a>
                            <a href="#">Link 5</a>
                            <a href="#">Link 6</a>
                        </div>
                    </div> <div class="dropdownd">
                        <li class="dropbtn">Dropdown 2</li>
                        <div class="dropdownd-content">
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
        </>
    )
}
