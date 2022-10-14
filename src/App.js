import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  // jsx below, resembling html
  const [sections] = useState([
    {name: 'About', description: 'test'},
    {name: 'Portfolios'},
    {name: 'Contact'},
    {name: 'Resume'}
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <h1>
        <a href='/'>ES</a>
      </h1>
      <Nav
        sections={sections}
        setCurrentSection = {setCurrentSection}
        currentSection = {currentSection}
        ></Nav>
      <main>
        <Nav currentSection={currentSection}></Nav>
        <About></About>
      </main>
    </div>
  );
}

export default App;