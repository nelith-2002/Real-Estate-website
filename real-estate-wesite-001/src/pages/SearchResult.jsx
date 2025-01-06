import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FaHeart, FaMinusCircle } from 'react-icons/fa';
import data from '../components/data/properties.json'; // Adjust the path if needed
import './SearchResult.css';

/* 
   SearchResults Component
   Displays properties matching search criteria and allows users to manage favorites.
   Features a sidebar for favorite properties and a grid layout for search results.
*/

/*mothmap of months to numbers to be used in date comparison */
const monthMap = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

/* format date to YYYY-MM-DD for comparison */
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/* SearchResults Component */
const SearchResults = ({ favorites, addToFavorites, removeFromFavorites, clearFavorites }) => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate();

  /* filter properties based on search criteria */
  useEffect(() => {
    const filterProperties = () => {
      const properties = data.properties || [];
      return properties.filter((property) => {
        const postcode = searchParams.get('postcode')?.toLowerCase();
        const propertyType = searchParams.get('propertyType')?.toLowerCase();
        const minPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')) : null;
        const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')) : null;
        const minBedrooms = searchParams.get('minBedrooms') ? parseInt(searchParams.get('minBedrooms')) : null;
        const maxBedrooms = searchParams.get('maxBedrooms') ? parseInt(searchParams.get('maxBedrooms')) : null;
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        
        /* Check if the property matches the search criteria*/
        const matchesPostcode = postcode
          ? property.location.toLowerCase().includes(postcode)
          : true;
         const matchesType =
          propertyType && propertyType !== 'any'
            ? property.type.toLowerCase() === propertyType
            : true;
        const matchesPrice =
          (minPrice ? property.price >= minPrice : true) &&
          (maxPrice ? property.price <= maxPrice : true);
        const matchesBedrooms =
          (minBedrooms ? property.bedrooms >= minBedrooms : true) &&
          (maxBedrooms ? property.bedrooms <= maxBedrooms : true);

        /* Check if the property is within the date range */
        const propertyDate = new Date(
          property.added.year,
          monthMap[property.added.month],
          property.added.day
        );

        /* Check if the property is within the date range */
        const isWithinDateRange =
          (!startDate || new Date(startDate) <= propertyDate) &&
          (!endDate || new Date(endDate) >= propertyDate);

        return matchesPostcode && matchesType && matchesPrice && matchesBedrooms && isWithinDateRange;
      });
    };

    setFilteredProperties(filterProperties());
  }, [searchParams]);

  /* Add or remove property from favorites */
  return (
    <Container fluid className="py-5">
      <Row>
        {/* Sidebar for Favorite List */}
        <Col xs={12} md={4} lg={3} className="sticky-sidebar">
          <h5>Favorite List</h5>
          <ListGroup>
            {favorites.length > 0 ? (
              favorites.map((fav) => (
                <ListGroup.Item key={fav.id} className="d-flex align-items-center">
                  <img
                    src={fav.picture}
                    alt={fav.type}
                    className="img-fluid"
                    style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' }}
                  />
                  <div>
                    <p className="mb-0">{fav.type} in {fav.location}</p>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-auto"
                    onClick={() => removeFromFavorites(fav.id)}
                  >
                    <FaMinusCircle />
                  </Button>
                </ListGroup.Item>
              ))
            ) : (
              <p>No favorites added yet.</p>
            )}
          </ListGroup>
          {favorites.length > 0 && (
            <div className="mt-3">
              <Button variant="danger" className="w-100" onClick={clearFavorites}>
                Remove All
              </Button>
            </div>
          )}
        </Col>

        {/* Search Result Section */}
        <Col xs={12} md={8} lg={9}>
          <h1 className="text-center mb-4">Search Results</h1>
          <Row className="g-4">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <Col key={property.id} xs={12} sm={6} md={4}>
                  <Card className="h-100 property-card">
                    <div className="position-relative">
                      <Card.Img
                        variant="top"
                        src={property.picture || '/placeholder.jpg'}
                        className="property-image"
                      />
                      <button
                        className="favorite-btn"
                        onClick={() =>
                          favorites.some((fav) => fav.id === property.id)
                            ? removeFromFavorites(property.id)
                            : addToFavorites(property)
                        }
                      >
                        <FaHeart
                          color={
                            favorites.some((fav) => fav.id === property.id) ? 'red' : 'gray'
                          }
                        />
                      </button>
                    </div>
                    <Card.Body>
                      <Card.Title>{property.type}</Card.Title>
                      <p>{property.location}</p>
                      <p>
                        Price: £{property.price.toLocaleString()} | Bedrooms: {property.bedrooms}
                      </p>
                      <p>{property.shortdescription.slice(0, 100)}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        variant="primary"
                        className="w-100"
                        onClick={() => navigate(`/property-${property.id}`)}
                      >
                        View More Details
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))
            ) : (
              <Col xs={12}>
                <div className="text-center py-5">
                  <h3>No properties found matching your criteria</h3>
                  <p>Try adjusting your search filters</p>
                </div>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
