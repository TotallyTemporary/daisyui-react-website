import './App.css';
import { Avatar, Button, Theme, Hero } from 'react-daisyui';

function App() {
  return (
    <div className="flex bg-base-100">
        <Hero className="absolute py-5 top-12 right-1/4 bg-base-100 rounded-md w-5/12 h-2/12">
          <Hero.Content className="items-center text-neutral-content m-5">
            <div className="top-0 py-5">
              <h1 className="text-xl">Moi! Minä olen</h1>
              <h1 className="text-4xl py-3 text-primary-content">Paavo Rotstén</h1>
              <p  className="text-s py-2">Fullstack-harrastelija, jonka toiveena on edistyä ohjelmistokehittäjän uralla.</p>
            </div>
            <Avatar src="https://loremflickr.com/256/256" size="30rem" shape="circle"></Avatar>
          </Hero.Content>
        </Hero>
    </div>
  );
}

export default App;
