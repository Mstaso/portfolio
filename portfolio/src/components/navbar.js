import React from 'react'


class Navbar extends React.Component{


    render() {
        return(
            <header>
                <h1 class="title">Malcolm Staso</h1>
                <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="https://docs.google.com/document/d/11QfRgzFTeX6yFZLohjj9YFapaZnzXJ9a4TvAPhQWF9w/edit?usp=sharing">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <label for ="nav-toggle" class="nav-toggle-label">
                    <span></span>
                </label>
            </header>
        )
    }
}

export default Navbar;