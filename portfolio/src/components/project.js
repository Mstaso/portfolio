import React from 'react'


class Project extends React.Component {
    render() {
        let tools = this.props.project.tools.map(tool => <li class="tool">  {tool} </li>)
        return(
            <div class="project-card">
                <h3 class="project-title">{this.props.project.title}</h3>
                <div class="project-card-body">
                <img class="project-card-image" src={this.props.project.image} alt={this.props.project.title}/>
                    <p class="card-text">{this.props.project.description}</p>
                </div>
                <div className = "project-buttons">
                    <a
                      target = "_blank"
                      rel="noopener noreferrer"
                      class="project-button"
                      href = {this.props.project.code}
                      >Code</a>
                    <a 
                      target = "_blank"
                      rel="noopener noreferrer"
                      class="project-button"
                      href={this.props.project.demo}
                        > Demo </a>
                      {/* <a target = "_blank" rel="noopener noreferrer" href = {this.props.project.demo}>Demo</a> */}
                  </div>
                  <ul className="tool-list">{tools}</ul>
                  
            </div>
        )
    }

}

export default Project;