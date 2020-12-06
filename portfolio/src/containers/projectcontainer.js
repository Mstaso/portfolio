import React from 'react';
import project_data from '../data/projects.json'
import Project from '../components/project'


class ProjectContainer extends React.Component {

    render() {
        let projects = project_data.map(project => <Project project={project} key={project.id}/>)
        // console.log(project_data)
        return (
            <div class="project-section">
                {projects}
            </div>
        )
    }
}

export default ProjectContainer;