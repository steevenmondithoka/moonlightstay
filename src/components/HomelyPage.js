// Home.js
import React,{useState} from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;


const HomelyPage = () => {
  const[fromdate,setfromdate]=useState()
  const[todate,settodate]=useState()


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
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to MoonlightStay</h1>
        <p>Your dream stay awaits you.</p>
      </header>

      <div className="home-content">
        <div className="home-image">
          <img src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" alt="Luxury hotel" />
        </div>

        <div className="home-booking">
          <h2>Book Your Stay</h2>
          <form className="booking-form">
          <RangePicker
          className="date-picker"
          onChange={onChange}
          format="YYYY-MM-DD"
          disabledDate={disabledDate}
          placeholder={['Check-in', 'Check-out']}
          
        />

            <label>Guests:</label>
            <select required>
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              
            </select>
           {}
            <button type="submit"><a href='/rooms' style={{textDecoration:'none', color:'white'}}>Check Availability</a></button>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default HomelyPage;
