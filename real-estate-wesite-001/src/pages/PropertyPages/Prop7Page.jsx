import { Carousel, Tab, Tabs, Container, Row, Col } from 'react-bootstrap';
import properties from '../../components/data/properties.json'; 
import './PropPage.css';

/* 
   Prop7Page Component
   Displays detailed information about a specific property, including a carousel for images, descriptive tabs, and a Google Map location.
*/
const Prop7Page = () => {
  // Fetch the property details from properties.json based on the id
  const property = properties.properties.find((prop) => prop.id === 'prop7');

  //Array of properties in a carousel
  const carouselImages = [
    '/src/assets/images/prop7pic1small.jpeg',
    '/src/assets/images/prop7Carousel1.jpg',
    '/src/assets/images/prop7Carousel2.jpg',
    '/src/assets/images/prop7Carousel3.jpg',
    '/src/assets/images/prop7Carousel4.jpg',
    '/src/assets/images/prop7Carousel5.jpg',
    '/src/assets/images/prop7Carousel6.jpg',
    '/src/assets/images/prop7Carousel7.jpg',
  ];

  return (
    <Container className="py-5">
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
                    src="/src/assets/images/prop7floorplan1.jpg" // Ensure this floor plan image exists
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
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  property.location
                )}&output=embed`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
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

export default Prop7Page;
