import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/header/Header'; // Header component for the navigation bar
import Footer from '../components/footer/Footer'; // Footer component for the application
import Home from '../Home'; // Home page component
import About from './About'; // About page component
import Contact from './Contact'; // Contact page component
import SearchResults from './SearchResult'; // Search results page component
import FavouriteList from './FavouriteList'; // Favourite list page component
import PropertyDetails from './PropertyDetails'; // Property details page component
import Prop1Page from './PropertyPages/Prop1Page'; // Property page one page component import
import Prop2Page from './PropertyPages/Prop2Page'; // Property page two page component import
import Prop3Page from './PropertyPages/Prop3Page'; // Property page three page component import
import Prop4Page from './PropertyPages/Prop4Page'; // Property pages four page component import
import Prop5Page from './PropertyPages/Prop5Page';  // Property page five page component import
import Prop6Page from './PropertyPages/Prop6Page';  // Property page six page component import
import Prop7Page from './PropertyPages/Prop7Page';  // Property page seven page component import


/* 
   Pagenavigator Component
   Serves as the main routing hub for the application, managing page navigation and favorite properties.
*/
function Pagenavigator() {
  const [favorites, setFavorites] = useState([]);

  // Adds a property to the favorites list if it isn't already present
  const addToFavorites = (property) => {
    if (!favorites.some((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  // Removes a property from the favorites list based on its ID
  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter((fav) => fav.id !== propertyId));
  };

  // Clears all properties from the favorites list
  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/search"
              element={
                <SearchResults
                  favorites={favorites}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  clearFavorites={clearFavorites}
                />
              }
            />
            <Route
              path="/favourites"
              element={
                <FavouriteList
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                  clearFavorites={clearFavorites}
                />
              }
            />
            <Route path="/properties" element={<PropertyDetails />} />
            <Route path="/property-prop1" element={<Prop1Page />} />
            <Route path="/property-prop2" element={<Prop2Page />} />
            <Route path="/property-prop3" element={<Prop3Page />} />
            <Route path="/property-prop4" element={<Prop4Page />} />
            <Route path="/property-prop5" element={<Prop5Page />} />
            <Route path="/property-prop6" element={<Prop6Page />} />
            <Route path="/property-prop7" element={<Prop7Page />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default Pagenavigator;
