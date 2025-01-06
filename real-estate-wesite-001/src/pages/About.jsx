import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

/* 
   About Component
   Provides a detailed overview of the company, including sections for Who We Are, Vision, and Mission.
*/
const About = () => {
  return (
    <section className="about-us">
      <Container>
       {/* Header Section: Title and Subtitle */}
        <Row className="justify-content-center text-center mb-4">
          <Col xs={12}>
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">
              We are dedicated to helping you find your dream home.
            </p>
          </Col>
        </Row>

        {/* Image on Right and Content on Left */}
        <Row className="align-items-center about-content-section">
          <Col xs={12} md={6} className="order-md-2">
            <Image
              src="/src/assets/images/About.jpg"
              alt="About Us"
              className="about-image img-fluid"
            />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h2 className="about-heading">Who We Are</h2>
            <p className="about-content">
  We are a team of experienced real estate professionals committed to helping you navigate the property market with ease. 
  With years of expertise, our dedicated team is passionate about simplifying the home-buying and renting journey for 
  individuals, families, and businesses alike. Whether your looking for a cozy flat in the heart of the city, a spacious 
  suburban house, or a luxurious villa with breathtaking views, we have the expertise and resources to make your dream a reality.
</p>
<p className="about-content">
  Our comprehensive platform combines cutting-edge technology with a personalized approach, allowing you to explore property 
  listings, compare features, and make informed decisions with confidence. We pride ourselves on our strong relationships with 
  property owners, agents, and buyers, ensuring seamless transactions and a stress-free experience.
</p>

          </Col>
        </Row>

        {/* Vision and Mission Section */}
        <Row className="mt-5">
          <Col xs={12} md={6} className="text-center p-4 about-bordered-section">
            <h2 className="about-heading">Our Mission</h2>
            <p className="about-content">
              To empower individuals and families by providing exceptional real
              estate services. We aim to simplify the property search process
              with innovative tools, personalized guidance, and a commitment to
              customer satisfaction.
            </p>
            
          </Col>
          <Col xs={12} md={6} className="text-center p-4 about-bordered-section">
            <h2 className="about-heading">Our Vision</h2>
            <p className="about-content">
              To be the most trusted and innovative real estate platform,
              delivering unmatched value to our clients and helping them build
              a better future.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
