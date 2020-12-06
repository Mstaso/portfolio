import React from 'react'


class Project extends React.Component {
    render() {
        console.log(this.props)
        let tools = this.props.project.tools.map(tool => <span class="tool"> {tool} </span>)
        return(
            <div class="project-card">
                <img class="project-card-image" src={this.props.project.image} alt={this.props.project.title}/>
                <div class="project-card-body">
                {/* <h3 class="project-title">{this.props.project.title}</h3> */}
                    {/* <p class="card-text">{this.props.project.description}</p> */}
                </div>
                {/* {tools} */}
             
            </div>
        )
    }

}

export default Project;