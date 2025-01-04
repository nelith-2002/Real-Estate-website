import { Carousel, Tab, Tabs, Container, Row, Col } from 'react-bootstrap';
import properties from '../../components/data/properties.json';
import './PropPage.css';

const Prop6Page = () => {
  // Fetch the property details from properties.json based on the id
  const property = properties.properties.find((prop) => prop.id === 'prop6');

  const carouselImages = [
    '/src/assets/images/prop6pic1small.png',
    '/src/assets/images/prop6Carousel1.jpg',
    '/src/assets/images/prop6Carousel2.jpg',
    '/src/assets/images/prop6Carousel3.jpg',
    '/src/assets/images/prop6Carousel4.jpg',
    '/src/assets/images/prop6Carousel5.jpg',
    '/src/assets/images/prop6Carousel6.jpg',
    '/src/assets/images/prop6Carousel7.jpg',
  ];

  return (
    <Container className="py-5">
      {/* Property Title */}
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h1 className="mb-4">{property.type} in {property.location}</h1>
        </Col>
      </Row>

      {/* Carousel Section */}
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Carousel className="mb-4" style={{ borderRadius: '10px' }}>
            {carouselImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ borderRadius: '10px', maxHeight: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Tabs Section */}
      <Row className="justify-content-center">
        <Col xs={12}>
          <Tabs defaultActiveKey="description" id="property-tabs" className="mb-3">
            {/* Description Tab */}
            <Tab eventKey="description" title="Description of the Property">
              <p className="mt-3">{property.description}</p>
              <p className="mt-3 text-info">Holding - {property.tenure}</p>
            </Tab>

            {/* Floor Plan Tab */}
            <Tab eventKey="floorplan" title="Floor Plan">
              <Row className="justify-content-center mt-3">
                <Col xs={12} md={8}>
                  <img
                    src="/src/assets/images/prop6floorplan1.jpg" // Ensure this floor plan image exists
                    alt="Floor Plan"
                    className="img-fluid"
                    style={{ borderRadius: '10px', maxHeight: '500px', objectFit: 'contain' }}
                  />
                </Col>
              </Row>
            </Tab>

            {/* Google Map Tab */}
            <Tab eventKey="googlemap" title="Google Map">
              <Row className="justify-content-center mt-3">
                <Col xs={12}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.49010433492!2d-0.0755!3d51.5913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ac6bb8e5f6d%3A0x54e3a814d9ed7d12!2sPetts%20Wood%20Station!5e0!3m2!1sen!2suk!4v123456789"
                    width="100%"
                    height="400"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Prop6Page;
