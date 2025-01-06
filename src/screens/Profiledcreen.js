import React,{useState,useEffect} from 'react'
import { Tabs } from 'antd';
import axios from 'axios';
import { Divider, Flex, Tag } from 'antd';

import Loader from '../components/Loader';
import Error from '../components/Error';
import Swal from 'sweetalert2';
import Adminscreen from './Adminscreen';
const user=JSON.parse(localStorage.getItem('currentUser'))

const items = [
  {
    key: '1',
    label: 'Profile',
    children: <MyProfile/>,
  },
  {
    key: '2',
    label: 'Bookings',
    children: <MyBookings/>,
  },
  {
    key: '3',
    label: 'Admin',
    children: <Adminscreen/>,
  },
  
];

function Profiledcreen() {

   

    const user=JSON.parse(localStorage.getItem('currentUser'))


    useEffect(()=>{
    if(!user){
        window.location.href='/login'
    }

    },[])
  return (
    <div className='ml-4 mt-3'>
        <Tabs defaultActiveKey="1" items={items}  />
      
    </div>
  )
}

export default Profiledcreen




 export function MyBookings() {


    const[bookings,setbookings]=useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
 useEffect(()=>{

   const fetchData=async()=>{

    try {
        setloading(true)
        const data= (await axios.post('/api/bookings/getbookingsbyuserid',{userid:user._id})).data
    console.log(data)
    setbookings(data)
    setloading(false)
    } catch (error) {
        console.log(error)
        setloading(false)
        seterror(error)
    }
    
   }
   fetchData();

 },[])

 async function cancelBooking(bookingid,roomid){
    try {
        setloading(true)
        const result=await (await axios.post('/api/bookings/cancelbooking',{bookingid,roomid})).data
        console.log(result)
        setloading(false)
        Swal.fire({
          title: "Are you sure?",
          text: "You want to Cancel the Booking?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Cancel"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Your Booking was Cancelled.",
              text: "Amount Will be Refunded to Your respective Account Within 2 working days",
              icon: "success"
            });
          }
          
        })
            
        
    } catch (error) {
        console.log(error)
        setloading(false)
        Swal.fire('Something went Wrong','error')
    }
 }

  return (
    <div>
     <div className='row'>
  <div className='col-md-6'>
    <h2>Booking Details</h2>
   {loading &&<Loader/>}
   {bookings &&(bookings.map(booking=>{
      return  <div className='bs' style={{backgroundColor:''}}>
            <h4>{booking.room}</h4>
            
            <p><b>Booking Id:</b> {booking._id}</p>
            <p><b>From date:</b> {booking.fromdate}</p>
            <p><b>To date:</b> {booking.todate}</p>
            <p><b>Amount:</b> {booking.totalamount}/-</p>
            <p><b>Status:</b> {''}
            {booking.status==='cancelled'?( <Tag color="Red">Booking Cancelled</Tag>):<Tag color="Green">Booking Confirmed</Tag>}</p>

           {booking.status!=='cancelled'&&(
             <div className='text-right'>
             <button className='btn btn-primary' onClick={()=>{cancelBooking(booking._id,booking.roomid)}} style={{fontSize:'14px'}}>Cancel</button>
              </div>
           )}
            </div>
   }))}
  </div>
     </div>
    </div>
  )
}

export function MyProfile() {
    return (
      <div style={{backgroundColor:''}} className='bs mr-3'>
        <div style={{marginLeft:'5px'}} >
        <h1><i class="fa-solid fa-id-badge"></i>&nbsp;My Profile</h1>
        <hr/>
        <br/>
        <h5>Name: {user.name}</h5>
        <h5>Email: {user.email}</h5>
        <h5>isAdmin: {user.isAdmin?'Yes':'No'}</h5 >
        </div>
      </div>
    )
  }


