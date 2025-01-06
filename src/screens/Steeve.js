import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import MapComponent from '../components/MapComponent';
import { Rate, Flex } from 'antd';
import { Button, message } from 'antd';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2'


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

function Steeve({ booking }) {
    const [comment, setComment] = useState('');
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()
    const [room, setroom] = useState()
    const { roomid } = useParams();

    const { fromdate, todate } = useParams();
    const [rating, setRating] = useState(0);

    const fromDateMoment = moment(fromdate, 'DD-MM-YYYY');
    const toDateMoment = moment(todate, 'DD-MM-YYYY');

    const totaldays = moment.duration(toDateMoment.diff(fromDateMoment)).asDays() + 1

    const [totalamount, settotalamount] = useState()
    const hotelPosition = [15.497520, 80.053177];



    const handleRatingChange = (value) => {
        setRating(value);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!localStorage.getItem('currentUser')) {
                window.location.href = '/login';
            }
            try {
                setloading(true)
                const data = (await axios.post('/api/rooms/getroombyid', { roomid: roomid })).data;
                console.log(data)
                settotalamount(data.rentperday * totaldays)
                setroom(data);
                setloading(false)
            } catch (error) {
                setloading(false)
                seterror(true)

            }

        }
        fetchData();
    }, []);



    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Thanks for your Feedback! Have a great Day!!',
            duration: 2,
        });
    };


    async function onToken(token) {
        console.log(token)
        const bookingDetails = {
            room,
            userid: JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalamount,
            totaldays

        }

        try {
            setloading(true);
            const result = await axios.post('/api/bookings/bookroom', bookingDetails)
            setloading(false);
            Swal.fire('Congratulations Room booked sucessfully', room.name, 'success').then(result => {
                window.location.href = '/profile'
            })

        } catch (error) {
            setloading(false)
            Swal.fire('Opps', 'Something went wrong', 'error')
        }
    }



    const submitRating = async () => {

        message.success(`Rating submitted successfully!`);

    };

    const handleCommentSubmit = () => {
        // Submit comment and rating to backend
        console.log({ rating, comment });
        alert('Thank you for your feedback!');
        setRating(0); // Reset rating
        setComment(''); // Reset comment
    };



    return (
        <div>

            {loading ? (<Loader />) : error ? (<Error message={'Cannot connect to network !! Try Again '} />) : (<div>

                <div className="booking-screen">
                    {/* Hotel Header */}
                    <div className="hotel-header bs">
                    <h2>{room.name}</h2>
                        <img src={room.imgurls[2]} className="hotel-image" />
                        
                    </div>

                    {/* Booking Details */}

                     
                    <div className="booking-details bs ">
                        <hr/>
                        <h2 style={{marginRight:'800px'}}>Booking Details:</h2>
                        <hr/>
                      <b>  <p>Name: {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                        <p>From Date: {fromDateMoment.format('DD-MM-YYYY')}</p>
                        <p>To Date: {toDateMoment.format('DD-MM-YYYY')}</p>
                        <p>Maximum Count: {room.maxcount}</p>
                       <hr/>
                        <h2 style={{marginRight:'1100px'}}>Amount</h2>
                        <p>Total days: {totaldays}</p>
                        <p>Cost Per Day: {room.rentperday}/-</p>
                        <p>Total Amount: {totalamount}/-</p>
                    </b>

                      
                        <StripeCheckout
                            amount={totalamount * 100}
                            token={onToken}
                            currency='INR'
                            stripeKey="pk_test_51Q0hB6JlQgM78p5cEb88xIir1fmt1424JUqBhxS09tV748YLVPo4sYFxf9kszItnhqez2aOXngcq5qYtQ83XZwip00vXUKe4ON"
                        >
                            <button className='btn btn-primary '>Pay Now</button>

                        </StripeCheckout>

                    </div>

                    

                    {/* Map Section */}
                    <div className="hotel-map bs">
                        <h3>Hotel Location</h3>
                        <hr/>

                        <MapComponent position={hotelPosition} />

                    </div>
                    
                    {/* Rating and Comment Section */}
                    <div className="rating-section bs">
                        <h3>Rate and Comment</h3>
                        <hr/>
                        <Rate value={rating} onChange={handleRatingChange} />
                        <br></br>
                       

                       <br></br>
                        <textarea
                    placeholder="Leave a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows="4"
                ></textarea>
                

                <br></br>
                <Button
                            type="primary"
                            onClick={submitRating}
                            style={{ marginTop: '10px' }}
                            disabled={!rating}  // Disable button until a rating is selected
                        >
                            Submit 
                        </Button>
                    </div>


                </div>


            </div>)}
        </div>
    )
}

export default Steeve
