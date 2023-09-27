import PropTypes from 'prop-types'
import Project from '../components/Project'

export default function Projects(props){
    return(
        <section>
            <h1>Projects</h1>
            <div className="projects-grid">
                {props.data.map((project) => {
                    return (
                        <Project 
                            key={project.id}
                            title={project.projectTitle}
                            source={project.source}
                            desktopImage={project.desktopVer}
                            phoneImage={project.phoneVer}
                            labels={project.labels}
                        />
                    )
                })}
            </div>
        </section>
    )
}
Projects.propTypes = {
    data: PropTypes.array.isRequired
}