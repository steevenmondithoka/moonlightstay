import React from 'react';
import { Row, Col, Card } from 'antd';
 // CSS file for responsive styling

const services = [
  {
    title: "Free WiFi",
    description: "Enjoy unlimited high-speed internet during your stay.",
    image: "https://i0.wp.com/solutionincblog.com/wp-content/uploads/2022/12/Benefits-of-Public-WiFi.jpg?fit=3072%2C2048&ssl=1",
  },
  {
    title: "24/7 Room Service",
    description: "Our staff is available at all hours to assist you.",
    image: "https://www.24-hotel.info/foto_statey_2/rooom_service.jpg",
  },
  {
    title: "Swimming Pool",
    description: "Relax and unwind in our temperature-controlled pool.",
    image: "https://cdn-61e62012c1ac18f874f78489.closte.com/wp-content/uploads/2022/09/Pool-at-Beach-Hotel-03-scaled.jpg",
  },
  {
    title: "Free Parking",
    description: "Convenient parking space for all our guests.",
    image: "https://i0.wp.com/www.goaprism.com/wp-content/uploads/2022/01/Free-Parking-at-Mall-says-HIGH-COURT-1.jpg?fit=1200%2C800&ssl=1",
  },
  {
    title: "Spa & Wellness",
    description: "Rejuvenate with our professional spa services.",
    image: "https://info.ehl.edu/hubfs/AdobeStock_190029404.jpeg",
  },
];

const ServicesComponent = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <Row gutter={[16, 16]} justify="center">
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              className="service-card"
              hoverable
              cover={<img alt={service.title} src={service.image} className="service-image" />}
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesComponent;
