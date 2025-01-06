import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import properties from '../components/data/properties.json'; // Importing property data from JSON file
import './PropertyDetails.css'; // Custom styles for the Property Details section

/* 
   PropertyDetails Component
   Displays a grid of all properties available, fetched from a JSON file. Each property card includes key details and a button to view more information.
*/
const PropertyDetails = () => {
  const navigate = useNavigate();  // React Router's hook for navigation
  const [propertyList, setPropertyList] = useState([]);  // State to hold the list of properties

   // Fetch the property data when the component mounts
  useEffect(() => {
    setPropertyList(properties.properties); // Load properties from JSON into the state
  }, []);

  return (
    <section className="property-details">
      <Container>
        <h1 className="text-center mb-4">All Properties</h1>
        <Row className="gy-4">
          {propertyList.map((property) => (
            <Col key={property.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="property-card">
                <Card.Img
                  variant="top"
                  src={property.picture}
                  alt={property.type}
                  className="property-image"
                />
                <Card.Body>
                  <Card.Title>{property.type}</Card.Title>
                  <p className="property-location">{property.location}</p>
                  <p className="property-price">Price: £{property.price.toLocaleString()}</p>
                  <p className="property-bedrooms">Bedrooms: {property.bedrooms}</p>
                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={() => navigate(`/property-${property.id}`)}
                  >
                    View More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col> 
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PropertyDetails;
