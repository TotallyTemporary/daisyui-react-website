import { Divider } from 'react-daisyui'
import IntroductionHeader from './IntroductionHeader.js'
import Projects from './Projects.js'
import Skills from './Skills.js'

function App() {
  return (
    <div id="scroller-center" className="flex justify-center items-center">
      <div id="scroller" className="flex gap-10 flex-col justify-center items-center w-5/12 h-auto">
          <IntroductionHeader/>

          <Skills/>
          <Divider/>
          <Projects/>
      </div>
    </div>
  );
}

export default App;
