import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../Home';
import About from './About';
import Contact from './Contact';
import SearchResults from './SearchResult';
import FavouriteList from './FavouriteList';  
import Prop1Page from './PropertyPages/Prop1Page';
import Prop2Page from './PropertyPages/Prop2Page';
import Prop3Page from './PropertyPages/Prop3Page';
import Prop4Page from './PropertyPages/Prop4Page';
import Prop5Page from './PropertyPages/Prop5Page';
import Prop6Page from './PropertyPages/Prop6Page';
import Prop7Page from './PropertyPages/Prop7Page';


function Pagenavigator() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (property) => {
    if (!favorites.some((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter((fav) => fav.id !== propertyId));
  };

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
