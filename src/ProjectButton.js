import './Projects.css'
import { Link } from 'react-router-dom'

let ProjectButton = ({ name, path, image }) => {
    return (
        <Link to={path} className="button-element project-button">
            <img className=" button-element project-button-image" src={image}/>
            <span className="button-element project-button-text">{name}</span>
        </Link>
    )
};

export default ProjectButton;