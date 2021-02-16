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
                        <li><a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vST79NS4bBlF3UycWhGHHzGYx2Vikgd9qFX9j0EUi4h4t8mTipY5XEmDb0mkQ6lD-Sgqcjuj3QYZasY/pub?fbclid=IwAR0gkC5RspMKGJL6mhqtifb7isTxVjpAWsAjXjUn3N3gIPc8CLHHjdX6FFY">Resume</a></li>
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