import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  // jsx below, resembling html
  const [sections] = useState([
    {name: 'About Me'},
    {name: 'Portfolios'},
    {name: 'Contact'},
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
        <About></About>
      </main>
    </div>
  );
}

export default App;