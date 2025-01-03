
import { Carousel } from 'react-bootstrap';

const Prop1Page = () => {
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
    <div>
      
      <main className="container py-5">
        <h1 className="text-center">Luxury Apartment in Downtown</h1>
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
        <p><strong>Location:</strong> Petts Wood Road, Petts Wood, Orpington BR5</p>
        <p><strong>Price:</strong> £750,000</p>
        <p><strong>Bedrooms:</strong> 3</p>
        <p>
          <strong>Description:</strong> Attractive three-bedroom semi-detached family home situated 
          within 0.5 miles of Petts Wood station with fast trains to London and within easy walking 
          distance of local shops, schools, bus routes, and National Trust woodland. The property 
          comprises two receptions, a fitted 18'9 x 10'1 kitchen/breakfast room, and a conservatory. 
          Additional features include double glazing, gas central heating, and a well-presented interior.
        </p>
      </main>
     
    </div>
  );
};

export default Prop1Page;
