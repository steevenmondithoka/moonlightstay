
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Rate,Card } from 'antd';

function Room({room,fromdate,todate}) {
  let { roomid } = useParams();
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
  return (




    <div className="hotel-card" >
    <Card
      hoverable
      cover={<img  src={room.imgurls[0]} className="hotel-image" onClick={handleShow} />}
    >
      <h3>{room.name}</h3>
      <p>{room.description}</p>
     
      <Rate 
        value={room.rating} 
        disabled // Make the rating non-editable
      />
     
      <div class="cost-info">
  <p class="intro-text">
   
    <span class="highlight-text">Hotel costs start at just Rs.{room.rentperday}/night!</span> 
    
  </p>
</div>


      
      <hr/>
      <p>{room.address}</p>
      <div style={{float:'right'}}>

{(fromdate&&todate)&&(
   <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
   <button className='btn btn-primary m-3' style={{fontSize:'13px'}}>Book Now</button>
   </Link>

)}


  <button className='btn btn-primary' onClick={handleShow} style={{fontSize:'13px'}}>View Details</button>
</div>
    </Card>
  









   
   {/* <div className='row bs'>
        <div className='col-md-4'>
            <img src={room.imgurls[0]} className='smallimg' />

            
        </div>
        <div className='col-md-8'>
           <b> <h1 style={{fontSize:'30px'}}>{room.name}</h1> </b>
           
            <b>
              {" "}
              
            <p><i class="fa-solid fa-location-dot"></i> Location:Ongole,Andhrapradesh,India</p>
            <p>Max count: {room.maxcount}</p>
            <p>Phone: {room.phonenumber}</p>
            <p>Type: {room.type}</p>
            </b>
            
            <div style={{float:'right'}}>

              {(fromdate&&todate)&&(
                 <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                 <button className='btn btn-primary m-3'>Book Now</button>
                 </Link>

              )}
            
             
                <button className='btn btn-primary' onClick={handleShow}>View Details</button>
            </div>
         </div> */}
       
        

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
     <Carousel prevLabel=' ' nextLabel=' '>
 
      {room.imgurls.map(url=>{
        return <Carousel.Item>
           <img 
           className='d-block w-100 bigimg'
           src={url}
          />

        </Carousel.Item>
      })}
        

     </Carousel>
     <br></br>
    <ul>
        <li style={{fontSize:'20px',fontFamily:'cursive'}}>Location: {room.address}</li>
        <li style={{fontSize:'20px',fontFamily:'cursive'}}>Maxcount: {room.maxcount}</li>
        <li style={{fontSize:'20px',fontFamily:'cursive'}}>Phone: {room.phonenumber}</li>
        <li style={{fontSize:'20px',fontFamily:'cursive'}}>Type: {room.type}</li>
    </ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} href='/rooms'>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>

   
  )
}

export default Room
