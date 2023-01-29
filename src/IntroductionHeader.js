import { Avatar, Button, Theme, Hero } from 'react-daisyui';

var IntroductionHeader = () => {
    return <Hero className="py-5 bg-base-100 rounded-md pt-5">
        <Hero.Content className="flex items-center m-5 h-60">
            <div className="top-0">
                <h1 className="text-xl">Moi! Minä olen</h1>
                <h1 className="text-4xl py-2 text-accent-content">Paavo Rotstén</h1>
                <p  className="text-s py-2">Tietotekniikan opiskelija ja entinen harrastelija, jonka toiveena on edistyä ohjelmistokehittäjän uralla.</p>
            </div>
            <div className="top-0 h-full aspect-square">
                <Avatar className="h-full" src="/headshot.jpg" size="30rem" shape="circle"></Avatar>
            </div>
        </Hero.Content>
    </Hero>
}

export default IntroductionHeader;