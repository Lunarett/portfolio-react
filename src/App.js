import logo from './logo.svg';
import './App.css';
import MyPage1 from './MyPage1';
import MyPage2 from './MyPage2';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Page 1</Link>
        <Link to="/2">Page 2</Link>
      </nav>

      <Routes>
        <Route path='/' element={<MyPage1/>} />
        <Route path='/2' element={<MyPage2/>} />
      </Routes>
    </div>
  );
}

export default App;
