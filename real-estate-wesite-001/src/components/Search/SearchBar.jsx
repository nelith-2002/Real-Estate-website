import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchCriteria, setSearchCriteria] = useState({
    postcode: '',
    propertyType: 'any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAdded: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();

    Object.entries(searchCriteria).forEach(([key, value]) => {
      if (value.trim()) queryParams.append(key, value);
    });

    navigate(`/search?${queryParams.toString()}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="search-bar">
      <div className="banner">
        <div className="overlay">
          <Container className="text-center text-white">
            <h1 className="fw-bold">Search Your Next Home</h1>
            <p>Discover the latest and top-rated properties available in your city</p>
            <Form className="search-form" onSubmit={handleSubmit}>
              <Row className="gy-3 align-items-end">
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Form.Group controlId="postcode">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex-BR1, NW1"
                      name="postcode"
                      value={searchCriteria.postcode}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Form.Group controlId="propertyType">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Select
                      name="propertyType"
                      value={searchCriteria.propertyType}
                      onChange={handleInputChange}
                    >
                      <option value="any">Any</option>
                      <option value="flat">Flat</option>
                      <option value="house">House</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Form.Group controlId="priceRange">
                    <Form.Label>Price Range</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Min Price"
                          name="minPrice"
                          value={searchCriteria.minPrice}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Max Price"
                          name="maxPrice"
                          value={searchCriteria.maxPrice}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Form.Group controlId="bedrooms">
                    <Form.Label>Bedrooms</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Min"
                          name="minBedrooms"
                          value={searchCriteria.minBedrooms}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Max"
                          name="maxBedrooms"
                          value={searchCriteria.maxBedrooms}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Form.Group controlId="dateAdded">
                    <Form.Label>Date Added</Form.Label>
                    <Form.Control
                      type="date"
                      name="dateAdded"
                      value={searchCriteria.dateAdded}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={2} className="text-center">
                  <Button
                    variant="success"
                    type="submit"
                    className="w-100 d-flex align-items-center justify-content-center"
                  >
                    <FaSearch className="me-2" /> Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
