import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import data from '../components/data/properties.json'; // Adjust the path if needed
import './SearchResult.css';

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

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState([]);

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
        const dateAdded = searchParams.get('dateAdded');

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

        const propertyDate = new Date(
          property.added.year,
          monthMap[property.added.month],
          property.added.day
        );
        const formattedPropertyDate = formatDate(propertyDate);

        const matchesDate = dateAdded
          ? formattedPropertyDate === dateAdded
          : true;

        return matchesPostcode && matchesType && matchesPrice && matchesBedrooms && matchesDate;
      });
    };

    setFilteredProperties(filterProperties());
  }, [searchParams]);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Search Results</h1>
      <Row className="g-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Col key={property.id} xs={12} md={6} lg={4}>
              <Card className="h-100 property-card">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={property.picture || '/placeholder.jpg'}
                    className="property-image"
                  />
                 
                  <button className="favorite-btn">
                    <FaHeart />
                  </button>
                </div>
                <Card.Body>
                  <Card.Title>{property.type}</Card.Title>
                  <p>{property.location}</p>
                  <p>
                    Price: £{property.price.toLocaleString()} | Bedrooms: {property.bedrooms}
                  </p>
                  <p>{property.shortdescription.slice(0, 1000)}</p>
                </Card.Body>
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
    </Container>
  );
};

export default SearchResults;
