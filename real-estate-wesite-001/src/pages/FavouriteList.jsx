
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaMinusCircle } from 'react-icons/fa';

const FavouriteList = ({ favorites, removeFromFavorites, clearFavorites }) => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">My Favorite Properties</h1>
      {favorites.length > 0 && (
        <div className="text-end mb-4">
          <Button variant="danger" onClick={clearFavorites}>
            Remove All
          </Button>
        </div>
      )}
      <Row className="g-4">
        {favorites.length > 0 ? (
          favorites.map((property) => (
            <Col key={property.id} xs={12} md={6} lg={4}>
              <Card className="h-100 property-card d-flex flex-column justify-content-between">
                <Card.Img
                  variant="top"
                  src={property.picture || '/placeholder.jpg'}
                  className="property-image"
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{property.type}</Card.Title>
                    <p>{property.location}</p>
                    <p>Price: £{property.price.toLocaleString()} | Bedrooms: {property.bedrooms}</p>
                     <p>{property.shortdescription.slice(0, 1000)}</p>
                  </div>
                  <div className="mt-3 text-end">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromFavorites(property.id)}
                    >
                      <FaMinusCircle className="me-2" />
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <div className="text-center">
              <h3>No favorite properties added yet</h3>
              <p>Click the heart icon to add properties to your list</p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default FavouriteList;
