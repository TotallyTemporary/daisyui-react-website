import Project from './Project.js'

let Projects = () => {
    // this class just has all the data of the projects in html form,
    // all of this could just be loaded from .json file but that's a problem for future me.

    return <>
        <h1 className="text-4xl text-accent-content">Projektit</h1>
        
        <Project 
            name="Minecraft-klooni"
            link="https://github.com/TotallyTemporary/3D-LWJGL-Project"
            description="Tässä projektissa koitin luoda yksinkertaisen kloonin Minecraft-maailmasta käyttäen OpenGL:ää Javassa.
                Peli sisältää loputtoman maailman, myös ylös sekä alas, maan jonka päällä kävellä, sekä mahdollisuuden rikkoa kuutioita.
                "
            notes={[
                "Peli käyttää Mavenia rakentamiseen, ja kirjastoja LWJGL, JOML, PNGDecoder ja fastutil.",
                "En omista pelin tekstuureita. Kuutiot ovat Minecraft-packista nimeltä 'Painterlypack' ja muut tekstuurit ovat Minecraftista itsestään.",
                "Ohjelma on vielä hieman keskeneräinen, joten siinä ei ole paljoa 'pelimäistä' sisältöä vielä. Haasteena projektissa oli lähinnä opetella OpenGL:n toimintaa.",
                "Voit käyttää nappeja K ja C laittaaksesi päälle wireframe-moodin ja testitekstuurit."
            ]}
            imagesRoot="/minecraft/"
            images={["generic_view.png", "cave.png", "blocks_broken.png", "tower.png"]}
        />

        <p className="py-5">Lisää projekteja lisätään pian!</p>
    </>
};

export default Projects;