import React from 'react';
import { Card, Rate, Button } from 'antd';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const HotelCard = ({room,fromdate,todate}) => {



    let { roomid } = useParams();
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div className="hotel-card">
      <Card
        hoverable
        cover={<img  src={room.imgurls[1]} className="hotel-image" />}
      >
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <Rate  className="hotel-rating" />
        <p>You best choice</p>
        <Button type="primary">Book Now</Button>
      </Card>
    </div>
  );
};

export default HotelCard;
