import About from './About';
import Landing from './Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import TripWire from './projects/TripWire';
import LightFlip from './projects/LightFlip';
import Timer from './projects/Timer';
import Plant from './projects/Plant';

function App() {
  return (
    <Router>
      <div className="App">
        {
          // Display the navbar at the top of the website at all times by keeping the Navbar component outside of the routes
        }
        <Navbar />
        <Routes>
          {
            // Define the routes for each page on the website and pass the exact parameter so that the route path has to match exactly
          }
          <Route exact path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path='/tripwire' element={<TripWire />}></Route>
          <Route path='/lightflip' element={<LightFlip />}></Route>
          <Route path='/timer' element={<Timer />}></Route>
          <Route path='/plant' element={<Plant />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
