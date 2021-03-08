import React from 'react'
import profile from '../resources/profile.jpg'

class Home extends React.Component {

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
              
              <p>I'm a software engineer - creating useful, innovative and responsive apps is what I love to do. After working in tech/e-commerce for over 3 years on multiple sides of the business, I discovered my passion for developing products.  I went to the Flatiron School to improve my technical skills and learned Javascript, React, Redux, Ruby, Rails, CSS, HTML.  When I'm not coding, you can find me playing basketball, chess or Settlers of Catan.   </p>
            </div>
            </div>
        )
    }
}

export default Home;