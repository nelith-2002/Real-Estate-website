import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import properties from '../../components/data/properties.json'; // Adjust the path to your JSON file
import './RecentPropertyListed.css';

const RecentPropertyListed = () => {
  // Extract the first 4 properties from the JSON file
  const recentProperties = properties.properties.slice(0, 4);

  return (
    <section className="recent-property-listed py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-title">Recent Property Listed</h2>
            <p className="section-subtitle">Discover the latest properties added to our platform</p>
          </Col>
        </Row>
        <Row className="g-4">
          {recentProperties.map((property) => (
            <Col xs={12} sm={6} md={4} lg={3} key={property.id}>
              <Card className="property-card h-100">
                <Card.Img
                  variant="top"
                  src={property.picture}
                  alt={property.type}
                  className="property-image"
                />
               <Card.Body>
                  <Card.Title className="property-title">{property.type}</Card.Title>
                  <p className="property-location">{property.location}</p>
                  <p className="property-price">£{property.price.toLocaleString()}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RecentPropertyListed;
