import React, { useEffect, useState } from 'react'
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

function Bookingscreen({booking}) {

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
            
            Swal.fire('Opps', 'Something went wrong', 'error')
            setloading(false)
        }
    }



    const submitRating = async () => {
       
            message.success(`Rating submitted successfully!`);
      
    };

   
    return (
        <div>


            {loading ? (<Loader />) : error ? (<Error message={'Cannot connect to network !! Try Again '} />) : (<div>

                <div className='row bs justify-content-center mt-5'>

                    <div className='col-md-7 '>
                        <h1>{room.name}</h1>
                        <hr />
                        <img src={room.imgurls[2]} className='bigimg mt-1' style={{ borderRadius: '5px' }} />
                        <div className='mt-5' style={{width:'500px'}}>

                            <h1>Details On Map:</h1>
                            <hr />
                            <MapComponent position={hotelPosition} />
                        </div>
                    </div>

                    <div className='col-md-5 ' style={{ float: 'right' }}>
                        <div style={{ float: 'right' }}>

                            <h1>Booking details</h1>
                            <hr />

                            
                                <p>Name: {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                                <p>From Date: {fromDateMoment.format('DD-MM-YYYY')}</p>
                                <p>To Date: {toDateMoment.format('DD-MM-YYYY')}</p>
                                <p>Maximum Count: {room.maxcount}</p>
                            

                            <div>

                                <h1>Amount</h1>
                                <hr />
                                <b>
                                    <p>Total days: {totaldays}</p>
                                    <p>Cost Per Day: {room.rentperday}/-</p>
                                    <p>Total Amount: &nbsp;{totalamount}/-</p>
                                </b>
                            </div>

                            <div style={{ float: 'right' }} className='mt-3'>



                                <StripeCheckout
                                    amount={totalamount * 100}
                                    token={onToken}
                                    currency='INR'
                                    stripeKey="pk_test_51Q0hB6JlQgM78p5cEb88xIir1fmt1424JUqBhxS09tV748YLVPo4sYFxf9kszItnhqez2aOXngcq5qYtQ83XZwip00vXUKe4ON"
                                >
                                    <button className='btn btn-primary '>Pay Now</button>

                                </StripeCheckout>

                                <div className='mt-5 mr-5'>
                                    <div style={{ marginTop: '20px' }}>
                                        <h3>Rate Your Experience</h3>
                                        <Rate value={rating} onChange={handleRatingChange} />
                                        <br></br>
                                        <Button
                                            type="primary"
                                            onClick={submitRating}
                                            style={{ marginTop: '10px' }}
                                            disabled={!rating}  // Disable button until a rating is selected
                                        >
                                            Submit Rating
                                        </Button>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>

                </div>

            </div>)}


        </div>
    )
}

export default Bookingscreen
