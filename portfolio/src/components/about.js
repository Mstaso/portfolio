import React from 'react'

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
              <img class="about-img" src="https://media-exp1.licdn.com/dms/image/C4E03AQFtRrPhnjHRtA/profile-displayphoto-shrink_200_200/0?e=1613001600&v=beta&t=qYbOlDUJp6XmQPJj4jW8yj2PK8DKsAWHuFSTet4BKhI" alt="about-img"></img>
              <h1>Hey, I'm Malcolm.</h1>
              <input type="checkbox" id="about-toggle" class="about-toggle"/>
              <label for="about-toggle" class="about-toggle-label">
                  <span>About</span>
              </label>
              <p>I'm a software engineer and I love creating useful projects and learning more about web development.  After spending over 3 years working in E-commerce, I realized I was most passionate about working on the product side and I went to the Flatiron School to develop my technical skills.  When I'm not coding, I like to play basketball, chess and Settlers of Catan.</p>
              {/* <button class="about-btn" onClick={this.aboutHandler}> About </button> */}
                
              
            </div>
            </div>
        )
    }
}

export default About;