import { Avatar, Button, Theme, Hero } from 'react-daisyui';

var IntroductionHeader = () => {
    return <Hero className="py-5 bg-base-100 rounded-md pt-5">
        <Hero.Content className="items-center m-5">
        <div className="top-0 py-5">
            <h1 className="text-xl">Moi! Minä olen</h1>
            <h1 className="text-4xl py-2 text-accent-content">Paavo Rotstén</h1>
            <p  className="text-s py-2">Fullstack-harrastelija, jonka toiveena on edistyä ohjelmistokehittäjän uralla.</p>
        </div>
        <Avatar src="https://loremflickr.com/256/256" size="30rem" shape="circle"></Avatar>
        </Hero.Content>
    </Hero>
}

export default IntroductionHeader;