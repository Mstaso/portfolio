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
                        <li><a href="#">About</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <label for ="nav-toggle" class="nav-toggle-label">
                    <span></span>
                </label>
            </header>
            // <a href="https://www.espn.com/"> 
            // <div id='navbar'>
            //      {/* <meta name='viewport' content='width=device-width, initial-scale=1.0'/> */}
                 
            //      <h4>Malcolm Staso</h4>    
            //      <img src={menu} alt='menu-icon' onClick={this.toggleMenu}/>
                 
           
            // </div>
            // </a>
        )
    }
}

export default Navbar;