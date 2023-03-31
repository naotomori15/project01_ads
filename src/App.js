import './index.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import ReactGA from 'react-ga4';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  const TRACKING_ID = 'G-B33FL1ZZYR';
  ReactGA.initialize(TRACKING_ID);
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Router>
          <Routes>
            <Route
              element={<LandingPages />}
              exatch
              path='/project06/smartwatch'
            />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
