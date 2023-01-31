import { Link, Button, Carousel } from 'react-daisyui'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import GithubButton from './GithubButton';

import Projects from './ProjectsData'

var Project = () => {
    let { projectID } = useParams();
    let { name, description, link, notes, imagesRoot, images } = Projects[projectID]

    let [carouselIndex, setCarouselIndex] = useState(0)

    let moveLeft = () => {
        let newIndex = (carouselIndex - 1 + images.length) % images.length;
        setCarouselIndex(newIndex)
        window.location.hash = name + newIndex;
    };

    let moveRight = () => {
        let newIndex = (carouselIndex + 1) % images.length;
        setCarouselIndex(newIndex)
        window.location.hash = name + newIndex;
    };

    return <div id="projects" className="flex flex-col items-start w-full">
        <div id={`project-${name}`}>
            <h1 className="text-4xl py-2 text-accent-content">{name}</h1>
            <p  className="text-s py-2">{description}</p>
            <GithubButton title="Kokeile projektia tästä!" link={link}/>
            <p  className="text-s pt-2 text-accent-content">Huomautuksia:</p>
            <ul>
                {notes.map((note_text, index) => 
                    <li className="" key={index}>{note_text}</li>
                )}
            </ul>
            <div name="carouselWrapper" className="relative w-full py-2">
                <Carousel id={name} className="rounded-sm">
                        {images.map((file, index) => 
                        <img className="carousel-item w-full"
                            id={name + index}
                            src={imagesRoot + file}
                            alt={file}
                        />)}
                </Carousel>

                <Button variant="outline" onClick={() => moveLeft() } className="absolute left-3 top-1/2">&larr;</Button>
                <Button variant="outline" onClick={() => moveRight()} className="absolute right-3 top-1/2">&rarr;</Button>
            </div>
        </div>
    </div>
}

export default Project;