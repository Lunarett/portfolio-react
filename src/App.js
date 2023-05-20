import './styleSheets/App.css';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
import WorkExperience from './pages/WorkExperiencePage';
import Education from './pages/EducationPage';
import { Link, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">

        <div className='bannerContainer'>
          <img src='https://wallpapercave.com/wp/wp6704850.jpg' className='bannerImg' />
        </div>

        <nav className='App-nav'>
          <div className='App-navContainer'>
            <Link to='/' className={`App-navBtn ${location.pathname === '/' ? 'selected' : ''}`}>About Me</Link>
            <Link to='/projects' className={`App-navBtn ${location.pathname === '/projects' ? 'selected' : ''}`}>Projects</Link>
            <Link to='/work-experience' className={`App-navBtn ${location.pathname === '/work-experience' ? 'selected' : ''}`}>Work Experience</Link>
            <Link to='/education' className={`App-navBtn ${location.pathname === '/education' ? 'selected' : ''}`}>Education</Link>
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

      <footer>
        <div className='footerContainer'>
          <div className='footerContent'>
            <h1>Interested? Contact me for hire!</h1>
            <h4>WhatsApp: +49 173 2029292</h4>
            <h4>email: e.ageev98@proton.me</h4>
            <a href="https://www.linkedin.com/in/egorageev/">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
