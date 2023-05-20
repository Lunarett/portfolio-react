import './styleSheets/App.css';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
import WorkExperience from './pages/WorkExperiencePage';
import Education from './pages/EducationPage';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='bannerContainer'>
          <img src='https://wallpapercave.com/wp/wp6704850.jpg' className='bannerImg' />
        </div>

        <nav className='App-nav'>
          <div className='App-navContainer'>
            <Link to='/' className='App-navBtn'>About Me</Link>
            <Link to='/projects' className='App-navBtn'>Projects</Link>
            <Link to='/work-experience' className='App-navBtn'>Work Experience</Link>
            <Link to='/education' className='App-navBtn'>Education</Link>
          </div>
        </nav>
      </header>

      <body>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/work-experience' element={<WorkExperience />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </body>
    </div>
  );
}

export default App;
