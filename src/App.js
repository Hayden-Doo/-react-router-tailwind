import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h2>홈 페이지</h2>} />
          <Route path="/about" element={<h2>About 페이지</h2>} />
          <Route path="/login" element={<h2>Login Page</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
