
import { Container, Row, Col, Card } from 'react-bootstrap';
import './FeaturedPropertyTypes.css';

const FeaturedPropertyTypes = () => {
  const propertyTypes = [
    { id: 1, image: '/src/assets/images/h1.png', title: 'Villa' },
    { id: 2, image: '/src/assets/images/h2.png', title: 'House' },
    { id: 3, image: '/src/assets/images/h3.png', title: 'Flat'},
    { id: 4, image: '/src/assets/images/h4.png', title: 'Office' },
    { id: 5, image: '/src/assets/images/h6.png', title: 'Suites' },
  ];

  return (
   <section className="featured-property-types py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-title">Featured Property Types</h2>
            <p className="section-subtitle">Find All Types of Property</p>
          </Col>
        </Row>
        <Row className="g-4 align-items-center justify-content-center">
          {propertyTypes.map((type) => (
            <Col xs={6} md={4} lg={2} key={type.id} className="d-flex justify-content-center">
              <Card className="property-card">
                <Card.Body>
                  <div className="icon-wrapper">
                    <img src={type.image} alt={type.title} className="property-icon" />
                  </div>
                  <Card.Title className="mt-3">{type.title}</Card.Title>
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
