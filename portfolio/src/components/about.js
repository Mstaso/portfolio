import React from 'react'
import profile from '../resources/profile.jpg'

class About extends React.Component {

    state = {
        about: false
    }

    aboutHandler = () => {
        this.setState({
            about: !this.state.about
        })
    }

    render() {
        return (
            <div class="home-hero">
            <div class="about">
              <img src={profile} alt="profile-img"></img>
              <h3>Hey, I'm Malcolm.</h3>
              <input type="checkbox" id="about-toggle" class="about-toggle"/>
              <label for="about-toggle" class="about-toggle-label">
                  <span>About</span>
              </label>
              <p>I'm a software engineer - creating useful, innovative and responsive apps is what I love to do.  After years of working on the consumer-facing side of tech, I pivoted and began learning Javascript, React, Ruby, Rails, CSS, HTML, Redux, React through the Flatiron School. When I'm not coding, you can find me playing basketball, chess and Settlers of Catan.</p>
              {/* <button class="about-btn" onClick={this.aboutHandler}> About </button> */}
                
              
            </div>
            </div>
        )
    }
}

export default About;