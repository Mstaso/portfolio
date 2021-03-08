import React from 'react'


class Navbar extends React.Component{


    render() {
        return(
            <header>
                <h1 class="title">Malcolm Staso</h1>
                <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a target="_blank" href="https://drive.google.com/file/d/15KqCEJMAe5ZoqTbOAjc-y-dFgfP2NOCw/view?usp=sharing">Resume</a></li>
                        <li><a href="#get-in-touch">Contact</a></li>
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