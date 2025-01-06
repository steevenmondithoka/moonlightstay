import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { DatePicker } from 'antd';
import moment from 'moment';

import { Select, Button } from 'antd';

const { RangePicker } = DatePicker;

const { Option } = Select;


function Homescreen() {
   
const { RangePicker } = DatePicker;
    const [rooms, setRooms] = useState([])
    const [loading, setloading] = useState()
    const [error, seterror] = useState()
    const[fromdate,setfromdate]=useState()
    const[todate,settodate]=useState()
    const[searchkey,setsearchkey]=useState('')
    const[type,settype]=useState('all')
    const[duplicaterooms,setduplicaterooms]=useState([])

    useEffect(() => {
        const fetchData = async () => {

            try {
                setloading(true)
                const data = (await axios.get('/api/rooms/getallrooms')).data;
                setRooms(data);
                setduplicaterooms(data)
                setloading(false)
            } catch (error) {
                seterror(true)
                console.log(error);
                setloading(false)
            }

        }
        fetchData();
    }, []);


    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().startOf('day');
      };

    const onChange = (dates) => {
        if (dates) {
          console.log( dates[0].format('DD-MM-YYYY'))
          console.log( dates[1].format('DD-MM-YYYY'));
          
          setfromdate((dates[0].format('DD-MM-YYYY')))
          settodate((dates[1].format('DD-MM-YYYY')))
        } else {
          console.log('No dates selected');
        }
      };


      function filterBySearch(){
          
        const temprooms=duplicaterooms.filter(room=>room.name.toLowerCase().includes(searchkey.toLowerCase()))
        setRooms(temprooms)
      }

      function filterByType(e){
        settype(e)
       if(e!=='all'){
         const temprooms=duplicaterooms.filter(room=>room.type.toLowerCase()===e.toLowerCase())
        setRooms(temprooms)
       }
       else{
        setRooms(duplicaterooms)
       }
      }


     
     


    return (
       
            
               
    
            <div className=' container flex-wrap'>
       
       <div class="marquee-container">
  <div class="marquee-text">
    <span class="arrow">⫸</span> 
    Please select check-in and check-out before booking 
    <span class="arrow">⫷</span>
  </div>
</div>

<div className="search-section-container">
      <div className="search-box">
        {/* Check-in and Check-out Date Picker */}
        <RangePicker
          className="date-picker"
          onChange={onChange}
          format="YYYY-MM-DD"
          disabledDate={disabledDate}
          placeholder={['Start-Date', 'End-Date']}
          
        />

        {/* Hotel Type Dropdown */}
        <select className='form-control' value={type} onChange={(e)=>{filterByType(e.target.value)}}>
                <option value='all'>All</option>
                <option value='ac'>AC</option>
                <option value='non-ac'>Non-Ac</option>
               </select>

        {/* Search Bar */}
        <input
          className="search-input"
          placeholder="Search hotel name or location"
          onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filterBySearch}
        />

        
       
      </div>
    </div>
         



              <div className=' hotel-list-container'>
                {loading ? (
                  <div style={{marginRight:'500px'}}><Loader /></div>
                ) :(
                    rooms.map(room => {

                    return( <div className='hotel-card'>
                        <Room room={room}  fromdate={fromdate} todate={todate}/>
                    </div>
                    );
                })

                )}
      

            </div>
            </div>

       
    );
}

export default Homescreen
