import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import properties from '../components/data/properties.json';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const navigate = useNavigate();
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    // Fetch the properties from properties.json
    setPropertyList(properties.properties);
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
