import Project from '../project/Project';
import projectsData from '../../data/projects.json';

import './Projects.styles.scss';

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className='projects-grid'>
        {
          projectsData.map((project) => {
            return (
            <Project 
              key={project.id}
              title={project.title}
              technologies={project.technologies}
              github={project.github}
              liveLink={project.link}
              imageUrl={project.imgUrl}
            />
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects;