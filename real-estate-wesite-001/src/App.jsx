// Updated App.js with Google Maps CSP Fix
import './App.css';
import Pagenavigator from './pages/Pagenavigator';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      {/* Add Content Security Policy with Google Maps Fix */}
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' https://maps.googleapis.com; img-src 'self' data: https://maps.gstatic.com; style-src 'self' 'unsafe-inline'; font-src 'self'; frame-src https://www.google.com https://maps.googleapis.com;"
        />
      </Helmet>

      {/* Main Page Navigator */}
      <Pagenavigator />
    </>
  );
}

export default App;