
import { Container, Row, Col, Card } from 'react-bootstrap';
import './FeaturedPropertyTypes.css';

const FeaturedPropertyTypes = () => {
  const propertyTypes = [
    { id: 1, image: '/src/assets/images/h1.png', title: 'Family House', count: '122 Property' },
    { id: 2, image: '/src/assets/images/h2.png', title: 'House & Villa', count: '155 Property' },
    { id: 3, image: '/src/assets/images/h3.png', title: 'Apartment', count: '300 Property' },
    { id: 4, image: '/src/assets/images/h4.png', title: 'Office & Studio', count: '80 Property' },
    { id: 5, image: '/src/assets/images/h1.png', title: 'Villa & Condo', count: '80 Property' },
  ];

  return (
    <section className="featured-property-types py-5">
      <Container fluid className="px-5">
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-title">Featured Property Types</h2>
            <p className="section-subtitle">Find All Types of Property</p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          {propertyTypes.map((type) => (
            <Col xs={12} sm={6} md={4} lg={2} key={type.id} className="d-flex justify-content-center">
              <Card className="property-card">
                <Card.Body>
                  <div className="icon-wrapper">
                    <img src={type.image} alt={type.title} className="property-icon" />
                  </div>
                  <Card.Title className="mt-3">{type.title}</Card.Title>
                  <Card.Text className="text-muted">{type.count}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedPropertyTypes;
