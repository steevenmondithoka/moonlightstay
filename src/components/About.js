import React from 'react';
import { Row, Col, Typography } from 'antd';


const { Title, Paragraph } = Typography;

const About= () => {
  return (
    <div className="about-container">
      <Row gutter={[16, 16]} justify="center" align="middle">
        {/* Left Section: About Image */}
        <Col xs={24} md={12}>
          <div className="about-image-container">
            <img
              src="https://digital.ihg.com/is/image/ihg/hotel-indigo-diqing-6872039264-2x1"
              alt="Hotel booking overview"
              className="about-image"
            />
          </div>
        </Col>
        
        {/* Right Section: About Text */}
        <Col xs={24} md={12}>
          <div className="about-content">
            <Title level={2}>About MoonlightStay Hotel Booking Platform</Title>
            <Paragraph className="about-text">
              Our MoonlightStay hotel booking platform is designed to offer you a wide range of accommodation options from luxury hotels to cozy budget stays, catering to every type of traveler. Whether you are planning a business trip, a family vacation, or a quick weekend getaway, we provide seamless hotel booking experiences across various destinations.
            </Paragraph>
            <Paragraph className="about-text">
              We partner with a diverse collection of hotels, resorts, and boutique stays, allowing you to choose the best fit for your needs. From beachfront resorts to city-center hotels, our platform ensures that your stay is comfortable and memorable.
            </Paragraph>
            <Paragraph className="about-text">
              MoonlightStay guarantees competitive pricing, hassle-free bookings, and exceptional customer support, so you can focus on enjoying your trip. Start exploring now and find the perfect place to stay!
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
