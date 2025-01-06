// Importing global styles and necessary components
import './App.css'; 
import Pagenavigator from './pages/Pagenavigator';  // Main routing component
import { Helmet } from 'react-helmet'; // Updated App.js with Google Maps CSP Fix

/* 
   App Component
   The root component of the application. Includes global styles, security policies, and the main routing navigator.
*/
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

      <Pagenavigator />
    </>
  );
}

export default App;