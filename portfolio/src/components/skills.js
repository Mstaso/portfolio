import React from 'react'

class Skills extends React.Component {

    render() {
        return (
            <div id="skills">
                    <h1 class="skills-header">Skills</h1>
                    <div class="row">
                    <div class="col span-1-of-8 blue"><h4>JavaScript</h4></div>
                    <div class="col span-1-of-8 black"><h4>React</h4></div>
                    <div class="col span-1-of-8 blue"><h4>Redux</h4></div>
                    <div class="col span-1-of-8 black"><h4>Ruby</h4></div>
                    <div class="col span-1-of-8 blue"><h4>Rails</h4></div>
                    <div class="col span-1-of-8 black"><h4>PostgreSQL</h4></div>
                    <div class="col span-1-of-8 blue"><h4>HTML</h4></div>
                    <div class="col span-1-of-8 black"><h4>CSS</h4></div>
                    </div>
              
            </div>
        )
    }

}

export default Skills;