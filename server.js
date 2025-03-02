const express=require("express");
const app=express();
const cors=require('cors')
const jwt=require('jsonwebtoken');

const dbConfig=require('./db');

const roomsRoute=require('./routes/roomsRoute')
const userRoute=require('./routes/userRoute')
const bookingsRoute=require('./routes/bookingsRoute')


app.use(cors(
    origin="http://localhost:3000"
));

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  });



app.use('/api/rooms',roomsRoute);
app.use('/api/users',userRoute);
app.use('/api/bookings',bookingsRoute);













// server.js

const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');


app.use(bodyParser.json());
app.use(cors());

let generatedOTP = null;  // In a real-world scenario, store this securely

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to 'outlook', 'yahoo', etc.
    auth: {
        user: 'moonlightstay77@gmail.com', // Replace with your email
        pass: 'zpcf xgrb ftrp lpeb', // Replace with your email password or app password
    },
});

// Route to send OTP
app.post('/send-otp', (req, res) => {
    const { email } = req.body;

    // Generate a 6-digit OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000);

    // Setup email data
    const mailOptions = {
        from: 'moonlightstay77@gmail.com',  // Replace with your email
        to: email,
        subject: 'OTP for MoonlightStay Account',
        text: ` Welcome ${email} Greetings from MoonlightStay

        Your OTP Code is ${generatedOTP}
        
        Thanks for Choosing MoonlightStay!

                            With Regards,
                        Team MoonlightStay`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending OTP');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('OTP sent successfully');
    });
});

// Route to verify OTP
app.post('/verify-otp', (req, res) => {
    const { otp } = req.body;

    if (parseInt(otp) === generatedOTP) {
        res.status(200).send('OTP verified successfully');
    } else {
        res.status(400).send('Invalid OTP');
    }
});





const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`server listening at ${port}`))  ;