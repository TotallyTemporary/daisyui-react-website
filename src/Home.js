import { Divider } from 'react-daisyui'
import IntroductionHeader from './IntroductionHeader.js'
import Skills from './Skills.js'
import Projects from './Projects.js'

function Home() {
  return <>
    <IntroductionHeader/>

    <Skills/>
    <Divider/>
    <Projects/>
  </>;
}

export default Home;
