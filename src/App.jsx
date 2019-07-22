import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

// import LogoPage from './components/LogoPage.jsx'
// import Countdown from './components/Countdown.jsx'
import './main.css';

import Intro from './components/Intro.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'


export class App extends Component {
  render() {
    return (

     
      <Fullpage>

        <FullPageSections>

          <FullpageSection>
            <Intro />
          </FullpageSection>

          
          <FullpageSection>
            <AboutMe />
          </FullpageSection>


          <FullpageSection>
            <Projects />
          </FullpageSection>

        </FullPageSections>

      </Fullpage>

    )
  }
}

export default App
