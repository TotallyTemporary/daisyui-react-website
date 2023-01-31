import ProjectButton from './ProjectButton.js'
import ProjectsData from './ProjectsData.js'

let Projects = () => {
    return <> 
        <h1 className="text-4xl text-accent-content">Projektit</h1>
        <div className={`grid grid-rows-2 grid-cols-3 gap-5`}>
            {Object.keys(ProjectsData).map(projectID => {
                let root = ProjectsData[projectID].imagesRoot
                let firstImage = root + ProjectsData[projectID].images[0]
                let name = ProjectsData[projectID].name

                return <ProjectButton name={name} path={`/projects/${projectID}`} image={firstImage}/>
            })}
        </div>
    </>
};

export default Projects;