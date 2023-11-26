import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Red from '../src/components/Red';
import Blue from '../src/components/Blue';
import Home from '../src/components/Home';
import "./index.css";
import './App.css';


export default function App() {

  return (
    <BrowserRouter>
      <div id="container">
        <Routes>
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route
            path="/"
            element={
              <div>
                <div id="navbar">
                  <Link to="/blue">Blue</Link>
                  <Link to="/red">Red</Link>
                  <Link to="/home">Home</Link>
                </div>
                <div id="main-section">
                    <Routes>
                      <Route path="/blue" element={<Blue />} />
                      <Route path="/red" element={<Red />} />
                      <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


