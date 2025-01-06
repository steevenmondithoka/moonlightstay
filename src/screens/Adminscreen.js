import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { set } from 'mongoose';

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Bookings',
        children: <Bookings />,
    },
    {
        key: '2',
        label: 'Rooms',
        children: <Rooms />,
    },
    {
        key: '3',
        label: 'Add Room',
        children: <Addroom />,
    },
    {
        key: '4',
        label: 'Users',
        children: <Users />,
    },
];

function Adminscreen() {
    useEffect(() => {

        if (!JSON.parse(localStorage.getItem('currentUser')).isAdmin) {
            
            window.location.href = '/home'
        }

    }, [])


    return (
        <div className='mt-3 ml-3 bs mr-3'>
            <h2 className='text-center'>Admin Panel of {JSON.parse(localStorage.getItem('currentUser')).name}</h2>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default Adminscreen



export function Bookings() {
    const [bookings, setbookings] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()

    useEffect(() => {

        const fetchData = async () => {

            try {
                setloading(true)
                const data = await (await axios.get('/api/bookings/getallbookings')).data
                setbookings(data)
                setloading(false)

            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(error)

            }

        }

        fetchData();

    }, [])




    return (
        <div className='row'>

            <div>
                <h1>Bookings</h1>
                {loading && (<Loader />)}

                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Booking Id</th>
                            <th>User Id</th>

                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.length && (bookings.map(booking => {
                            return <tr>
                                <td>{booking._id}</td>
                                <td>{booking.userid}</td>

                                <td>{booking.room}</td>
                                <td>{booking.fromdate}</td>
                                <td>{booking.todate}</td>
                                <td>{booking.totalamount}/-</td>
                                <td>{booking.status}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>




            </div>


        </div>
    )
}

export function Rooms() {
    const [rooms, setrooms] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()

    useEffect(() => {

        const fetchData = async () => {

            try {
                setloading(true)
                const data = await (await axios.get('/api/rooms/getallrooms')).data
                setrooms(data)
                setloading(false)

            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(error)

            }

        }

        fetchData();

    }, [])




    return (
        <div className='row'>

            <div className='col-md-12'>
                <h1>Rooms</h1>
                {loading && (<Loader />)}

                <table className='table table-bordered table-dark'>
                    <thead className='bs'>
                        <tr>
                            <th>Room Id</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Rent Per Day</th>
                            <th>Max Count</th>
                            <th>Phone Number</th>

                        </tr>
                    </thead>

                    <tbody>
                        {rooms.length && (rooms.map(room => {
                            return <tr>


                                <td>{room._id}</td>
                                <td>{room.name}</td>
                                <td>{room.address}</td>
                                <td>{room.type}</td>
                                <td>{room.rentperday}/-</td>
                                <td>{room.maxcount}</td>
                                <td>{room.phonenumber}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>




            </div>


        </div>
    )
}




export function Users() {

    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()

    useEffect(() => {

        const fetchData = async () => {

            try {
                setloading(true)
                const data = await (await axios.get('/api/users/getallusers')).data
                setusers(data)
                setloading(false)

            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(error)

            }

        }

        fetchData();

    }, [])




    return (
        <div className='row'>
            <div className='col-md-11'>
                <h1>Users</h1>
                {loading && <Loader />}
                <table className='table table-bordered table-dark'>

                    <thead className='bs'>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>User Email</th>
                            <th>Is Admin</th>
                        </tr>
                    </thead>

                    <tbody>

                        {users && (users.map(user => {

                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                            </tr>
                        }))}
                    </tbody>

                </table>

            </div>
        </div>
    )
}


export function Addroom() {

const[name,setname]=useState('')
const[rentperday,setrentperday]=useState()
const[maxcount,setmaxcount]=useState()
const[description,setdescription]=useState()
const[phonenumber,setphonenumber]=useState()
const[type,settype]=useState()
const[imgurl1,setimgurl1]=useState()
const[imgurl2,setimgurl2]=useState()
const[imgurl3,setimgurl3]=useState()


 async function addRoom(){

    const newroom={
        name,
        rentperday,
        maxcount,
        description,
        phonenumber,
        type,
        imgurls:[imgurl1,imgurl2,imgurl3]
    }
   
    try {
        const result=await (await axios.post('/api/rooms/addroom',newroom)).data
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


    return (
        <div className='row'>
           <div className='col-md-5'>
            <input type='text' className='form-control' placeholder='Room name'
            value={name} onChange={(e)=>{setname(e.target.value)}}
            />
            <input type='text' className='form-control' placeholder='Rent per day'
            value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}}
            />
            <input type='text' className='form-control' placeholder='Max count'
            value={maxcount} onChange={(e)=>{setmaxcount(e.target.value)}}
            />
            <input type='text' className='form-control' placeholder='Description'
            value={description} onChange={(e)=>{setdescription(e.target.value)}}
            />
            <input type='text' className='form-control' placeholder='Phone number'
            value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}}
            />
            <input type='text' className='form-control' placeholder='Type'
            value={type} onChange={(e)=>{settype(e.target.value)}}
            />

           </div>
           <div className='col-md-5'>

           <input type='text' className='form-control' placeholder='Room image 1'
           value={imgurl1} onChange={(e)=>{setimgurl1(e.target.value)}}
           />
           <input type='text' className='form-control' placeholder='Room image 2'
           value={imgurl2} onChange={(e)=>{setimgurl2(e.target.value)}}
           />
           <input type='text' className='form-control' placeholder='Room image 3'
           value={imgurl3} onChange={(e)=>{setimgurl3(e.target.value)}}
           />

           <div className='text-right'>
            <button className='btn btn-primary mt-5' onClick={addRoom}>Add Room</button>
           </div>

           </div>


        </div>
    )
}