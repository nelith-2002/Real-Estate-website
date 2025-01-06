import React, { useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import Select from 'react-select'; // For the enhanced dropdown
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // For the date picker
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker styles
import './SearchBar.css';


/* 
   SearchBar Component
   Provides a banner with a search form for filtering properties based on multiple criteria.
*/
const SearchBar = () => {
  const navigate = useNavigate();
   // State for storing the user's search criteria
  const [searchCriteria, setSearchCriteria] = useState({
    postcode: '',
    propertyType: { value: 'any', label: 'Any' }, // Using react-select format
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    startDate: null, // Use Date objects for DatePicker
    endDate: null,   // Use Date objects for DatePicker
  });

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission
    const queryParams = new URLSearchParams();

    // Iterates over search criteria and appends them as query parameters
    Object.entries(searchCriteria).forEach(([key, value]) => {
      if (value) {
        // Format dates as strings or use the value for react-select
        const formattedValue =
          value instanceof Date
            ? value.toISOString().split('T')[0]
            : value.value || value.trim();
        queryParams.append(key, formattedValue);
      }
    });
   // Navigates to the search results page with query parameters
    navigate(`/search?${queryParams.toString()}`);
  };

   // Handles input and dropdown changes
  const handleInputChange = (name, value) => {
    setSearchCriteria((prev) => ({
      ...prev, // Preserves other criteria
      [name]: value, // Updates the specific field
    }));
  };

   // Options for property type dropdown
  const propertyTypeOptions = [
    { value: 'any', label: 'Any' },
    { value: 'flat', label: 'Flat' },
    { value: 'house', label: 'House' },
  ];

   // Custom styles for react-select dropdown
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '5px',
      border: '1px solid #ced4da',
      boxShadow: 'none',
      padding: '5px',
      fontSize: '0.9rem',
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: '0.9rem',
      color: state.isSelected ? '#fff' : '#333',
      backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? '#f8f9fa' : '#fff',
      padding: '10px',
      cursor: 'pointer',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    }),
  };

  return (
    <section className="search-bar">
      {/* Banner Section */}
      <div className="banner d-flex flex-column justify-content-center align-items-center">
        {/* Overlay for semi-transparent effect */}
        <div className="overlay">
          <Container className="text-center text-white">
            {/* Title and Subtitle */}
            <h1 className="fw-bold text-3d-effect">Search Your Next Home</h1>
            <p>Discover the latest and top-rated properties available in your city</p>

            {/* Search Form */}
            <Form className="search-form mt-4" onSubmit={handleSubmit}>
              <Row className="gy-3">
                {/* Post Code */}
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Form.Group controlId="postcode">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex-BR1, NW1"
                      name="postcode"
                      value={searchCriteria.postcode}
                      onChange={(e) => handleInputChange("postcode", e.target.value)}
                    />
                  </Form.Group>
                </Col>

                {/* Property Type */}
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Form.Group controlId="propertyType">
                    <Form.Label>Property Type</Form.Label>
                    <Select
                      options={propertyTypeOptions}
                      value={searchCriteria.propertyType}
                      onChange={(selectedOption) => handleInputChange("propertyType", selectedOption)}
                      styles={customSelectStyles}
                    />
                  </Form.Group>
                </Col>

                {/* Price Range */}
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
                          onChange={(e) => handleInputChange("minPrice", e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Max Price"
                          name="maxPrice"
                          value={searchCriteria.maxPrice}
                          onChange={(e) => handleInputChange("maxPrice", e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>

                {/* Bedrooms */}
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Form.Group controlId="bedrooms">
                    <Form.Label>Bedrooms</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Min"
                          name="minBedrooms"
                          value={searchCriteria.minBedrooms}
                          onChange={(e) => handleInputChange("minBedrooms", e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Max"
                          name="maxBedrooms"
                          value={searchCriteria.maxBedrooms}
                          onChange={(e) => handleInputChange("maxBedrooms", e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>

                {/* Start Date */}
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Form.Group controlId="startDate">
                    <Form.Label>Start Date</Form.Label>
                    <DatePicker
                      selected={searchCriteria.startDate}
                      onChange={(date) => handleInputChange("startDate", date)}
                      className="form-control"
                      placeholderText="Select Start Date"
                      dateFormat="yyyy-MM-dd"
                    />
                  </Form.Group>
                </Col>

                {/* End Date */}
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Form.Group controlId="endDate">
                    <Form.Label>End Date</Form.Label>
                    <DatePicker
                      selected={searchCriteria.endDate}
                      onChange={(date) => handleInputChange("endDate", date)}
                      className="form-control"
                      placeholderText="Select End Date"
                      dateFormat="yyyy-MM-dd"
                    />
                  </Form.Group>
                </Col>

                {/* Search Button */}
                <Col xs={12} md={6} lg={2}>
                  <button
                    type="submit"
                    className="btn btn-success w-100 d-flex align-items-center justify-content-center"
                  >
                    <FaSearch className="me-2" /> Search
                  </button>
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
