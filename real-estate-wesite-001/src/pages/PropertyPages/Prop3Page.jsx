import { Carousel, Tab, Tabs, Container, Row, Col } from 'react-bootstrap';
import properties from '../../components/data/properties.json'; 
import './PropPage.css';

/* 
   Prop3Page Component
   Displays detailed information about a specific property, including a carousel for images, descriptive tabs, and a Google Map location.
*/

const Prop3Page = () => {
  // Fetch the property details from properties.json based on the id
  const property = properties.properties.find((prop) => prop.id === 'prop3');

  const carouselImages = [
    '/src/assets/images/prop3pic1small.png',
    '/src/assets/images/prop3Carousel1.jpg',
    '/src/assets/images/prop3Carousel2.jpg',
    '/src/assets/images/prop3Carousel3.jpg',
    '/src/assets/images/prop3Carousel4.jpg',
    '/src/assets/images/prop3Carousel5.jpg',
    '/src/assets/images/prop3Carousel6.jpg',
    '/src/assets/images/prop3Carousel7.jpg',
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
                    src="/src/assets/images/prop3floorplan1.jpg" 
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

export default Prop3Page;
