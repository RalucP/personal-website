import Project from '../components/Project'

export default function Projects(){
    return(
        <section>
            <h1>Projects</h1>
            <div className="projects-grid">
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    )
}