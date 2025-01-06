import { message } from 'antd';
import { set } from 'mongoose';
import React, { useState } from 'react'
import { Button } from 'antd';
function Contact() {


    const [comment, setcomment] = useState(0);
    const [names, setnames] = useState()
    const [email, setemail] = useState()
    const [messages, setmessages] = useState()
    const handleCommentSubmit = () => {
        // Submit comment and rating to backend
        console.log({ names, email, messages });

        message.success(`Thanks for your Feedback!`);
        // Reset rating
        setcomment(''); // Reset comment
        setnames('')
        setemail('')
        setmessages('')
    };
    return (
        <div>

            <header class="contact-header">
                <h1>Contact Us</h1>
            </header>


            <div class="container">


                <section class="contact-info">
                    <div>
                        <h3>Our Location</h3>
                        <p>Vijayawada,<br />Andhrapradesh, India</p>
                    </div>
                    <div>
                        <h3>Call Us</h3>
                        <p>Phone: +917893834064<br />Email: moonlightstay77@gmail.com</p>
                    </div>
                    <div>
                        <h3>Business Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                </section>


                <section className="contact-form">
                    <h2>We’d Love to Hear from You!</h2>
                    <form action="/submit-form" method="post">
                        <input type="text" name="name" S value={names} onChange={(e) => setnames(e.target.value)} placeholder="Your Name" required />
                        <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Your Email" required />
                        <textarea name="message" rows="5" value={messages} onChange={(e) => setmessages(e.target.value)} placeholder="Your Message" required></textarea>




                        {(names && email && messages) && (

                            <Button
                                type="primary"
                                onClick={handleCommentSubmit}
                                style={{ marginTop: '10px' }}
                            // Disable button until a rating is selected
                            >
                                Submit
                            </Button>

                        )}

                    </form>
                </section>

            </div>


            <footer>
                <p>&copy; 2024 Hotel Booking | All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Contact
