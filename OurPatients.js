import React from 'react';
import Image from "./image.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';
import Users from './db.json';


const OurPatients = () => {

  return (
    <div className='box' style={{ display: "flex" }}>
      <div className="box1" style={{ width: "40%", marginLeft: "80px"}}>
        <div className='container'>
          <Carousel>
         
            <Carousel.Item>
            {Users.map((user,i) => (
              <Cards {...user} key={i}/>
            ))}
            </Carousel.Item>
            <Carousel.Item>
              <Cards />
            </Carousel.Item>
            <Carousel.Item>
              <Cards />
            </Carousel.Item>
          
          </Carousel>


          {/* <div className='row'>
        {Users.map((user => (
          <div className='col-sm-4 col-md-4'>
            <div className="card">
              <img src="https://picsum.photos/640/360" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "15px", color: "#000" }}><button style={{border:"1px solid #fff", background:"#fff"}}>{user.name}</button></h5>
              </div>
            </div>
          </div>
        )))}
      </div> */}
        </div>
      </div>
      <div className="box2" style={{ width: "60%" }}>
        <img src={Image} style={{ width: "850px", height: "450px" }} />
      </div>
    </div>



  )
}

export default OurPatients;




