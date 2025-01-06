// ColorfulHomePage.js
import React from 'react';
import HomelyPage from './HomelyPage';


const HomePage = () => {
  return (
    <div className="colorful-home-page">
      {/* Hero Section */}
    
    <HomelyPage/>

      <br/>
      {/* Features Section */}
      <section className="features">
        <h2>Why Book with Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-dollar-sign"></i>
            <h3>Best Price Guarantee</h3>
            <p>We offer the best prices on hotel bookings.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-hands-helping"></i>
            <h3>24/7 Customer Support</h3>
            <p>Our team is here to help you anytime, anywhere.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-bolt"></i>
            <h3>Easy & Quick Booking</h3>
            <p>Book your stay in just a few clicks.</p>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-item">
            <img src=" https://cdn.siasat.com/wp-content/uploads/2023/10/2023_10img08_Oct_2023_PTI10_08_2023_000020B-scaled.jpg" alt="Destination 1" />
            <h3>Hyderabad</h3>
            <button><a href='/rooms' style={{textDecoration:'none', color:'white'}}>Book Now</a></button>
          </div>
          <div className="destination-item">
            <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/1765681589chennai-1696645169332.jpg" alt="Destination 2" />
            <h3>Chennai</h3>
            <button><a href='/rooms' style={{textDecoration:'none', color:'white'}}>Book Now</a></button>
          </div>
          <div className="destination-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgu4_laDJysl5zmWnwMQKGbAI2Vv2NT7yOKtOMmxgKn2TC7g_ZWPqrl2aIXv-kMBYoCvM&usqp=CAU" alt="Destination 3" />
            <h3>Banglore</h3>
            <button><a href='/rooms' style={{textDecoration:'none', color:'white'}}>Book Now</a></button>
          </div>

          <div className="destination-item">
            <img src="https://static.toiimg.com/photo/msid-103532002,width-96,height-65.cms" alt="Destination 3" />
            <h3>Mumbai</h3>
            <button><a href='/rooms' style={{textDecoration:'none', color:'white'}}>Book Now</a></button>
          </div>

          <div className="destination-item">
            <img src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" alt="Destination 3" />
            <h3>Delhi</h3>
            <button><a href='/rooms' style={{textDecoration:'none', color:'white'}}>Book Now</a></button>
          </div>

          <div className="destination-item">
            <img src="https://lp-cms-production.imgix.net/2019-06/GettyImages-143559567_high.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75" alt="Destination 3" />
            <h3>Kolkata</h3>
            <button><a href='/rooms' style={{textDecoration:'none', color:'white'}}>Book Now</a></button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-item">
            <p>"Amazing experience! The booking process was so easy and the hotel was fantastic."</p>
            <h4>- Steeve</h4>
          </div>
          <div className="testimonial-item">
            <p>"I found the best deals here and the support team was super helpful."</p>
            <h4>-Mini</h4>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <h2>Stay Updated!</h2>
        <p>Sign up for our newsletter to get exclusive deals and updates.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;
