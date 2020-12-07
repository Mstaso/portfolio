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
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Contact</a></li>
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