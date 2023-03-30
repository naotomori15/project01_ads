import './index.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import ReactGA from 'react-ga4';
function App() {
  const TRACKING_ID = 'G-B33FL1ZZYR';
  ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <Router>
        <Routes>
          <Route
            element={<LandingPages />}
            exatch
            path='/project06/smartwatch'
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
