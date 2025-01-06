// Importing key components for the Home page
import SearchBar from './components/Search/SearchBar'; // Search bar component
import FeaturedPropertyTypes from './components/FeaturedPropertyTypes/FeaturedPropertyTypes';
import RecentPropertyListed from './components/RecentPropertyListed/RecentPropertyListed'; 

/* 
   Home Component
   Serves as the landing page of the application. Displays the search bar, featured properties, and recent property listings.
*/

function Home() {
  return (
    <div>
      <SearchBar /> {/* Search bar for finding properties */}
      <FeaturedPropertyTypes /> {/* Section showcasing property categories */}
       <RecentPropertyListed />  {/* Section displaying recently listed properties */}
     
      
     
      
    </div>
  );
}

export default Home;
