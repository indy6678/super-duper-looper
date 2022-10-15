import React, {useState} from 'react';
import './App.css';
// import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  // jsx below, resembling html
  const [sections] = useState([
    {name: 'aboutme', description: 'All about me'},
    {name: 'portfolios', description: 'My stuff'},
    {name: 'Contact', description: 'Get a hold of me here!'},
    {name: 'Resume'},
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>  
      <Nav
        sections={sections}
        setCurrentSection = {setCurrentSection}
        currentSection = {currentSection}
        ></Nav>
      <main>
      <Gallery currentSection={currentSection}></Gallery>
        {/* <About></About>         */}
      </main>
    </div>
  );
}

export default App;