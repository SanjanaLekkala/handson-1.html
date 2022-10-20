// import React from 'react';
// import Image from "./image.jpg";
// import Carousel from 'react-bootstrap/Carousel';
// // import Card from 'react-bootstrap/Card';
// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';
// import Cards from './Cards';
// import Users from './db.json';



// const OurPatients = () => {



//   return (
//     <div className='box' style={{ display: "flex" }}>
//       <div className="box1" style={{ width: "40%", marginLeft: "80px" }}>
//         <div className='container' style={{width:"450px"}}>
//           {/* <Carousel className='col-md-6'> */}
//           <Carousel>
//             {Users.map((user => (
//               <Carousel.Item key={user.id} >
//                 {/* <Row >
//                   <Col>
//                 <Card>
//                   <Card.Img variant="top" src="https://picsum.photos/600"  style={{height:"380px"}} />
//                   <Card.Body>
//                     <Card.Title style={{ color: "black", cursor: "pointer" }}>{user.name}</Card.Title>
//                   </Card.Body>
//                 </Card>
//                 </Col>
//                 </Row> */}
//                 <Cards/>
//               </Carousel.Item>
  

//               /* 
//                           <Carousel.Item>
//                             <Cards />
//                           </Carousel.Item>
//                           <Carousel.Item>
//                             <Cards />
//                           </Carousel.Item> */
//             )))}
          
//           </Carousel>


//           {/* <div className='row'>
//         {Users.map((user => (
//           <div className='col-sm-4 col-md-4'>
//             <div className="card">
//               <img src="https://picsum.photos/640/360" className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title" style={{ fontSize: "15px", color: "#000" }}><button style={{border:"1px solid #fff", background:"#fff"}}>{user.name}</button></h5>
//               </div>
//             </div>
//           </div>
//         )))}
//       </div> */}
//         </div>
//       </div>
//       <div className="box2" style={{ width: "60%" }}>
//         <img src={Image} style={{ width: "850px", height: "450px" }} />
//       </div>
//     </div>



//   )
// }

// export default OurPatients;






import React from 'react';
import Image from "./image.jpg";
import Users from './db.json';
import Carousel from 'react-grid-carousel';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";


const OurPatients = () => {
  return (
    <>
    <div className='box' style={{ display: "flex" }}>
    <div className='box1' style={{width:"40%"}}>
    <Carousel 
        cols={2}
        rows={4}
        gap={1}
        containerStyle={{ background: 'transparent' }}
    >
        {Users.map((user) => (
             <Carousel.Item key={user.id} style={{display:"flex", width:"500px"}}>
                <div>
                    <Card style={{width:"180px",height:"150px"}}>
                      <Link to={"/ourscience"}>
                        <Card.Img variant="top" src="https://picsum.photos/90" style={{height:"100px"}} />
                        </Link>
                        <Card.Body>
                            <Card.Title style={{color:"black", cursor:"pointer"}}>{user.name}</Card.Title>
                        </Card.Body>
                       
                    </Card>
                </div>
             
         </Carousel.Item>
     ))}
    </Carousel>
    </div>

    <div className="box2" style={{ width: "60%" }}>
         <img src={Image} style={{ width: "850px", height: "450px" }} />
       </div>
        </div>

        <div className='box3' style={{width:"40%"}}>
    <Carousel style={{width:"500px"}}
            cols={4}
            rows={2}
            gap={1}
            containerStyle={{ background: 'transparent' }}
        >
            {Users.map((user) => (
                 <Carousel.Item key={user.id}>
                    <div >
                        <Card style={{width:"200px",height:"250px"}}>
                           
                           
                        <Link to={"/ourscience"}>
                            <Card.Img variant="top" src="https://picsum.photos/600" />
                           </Link>
                            
                           
                            <Card.Body>
                                <Card.Title style={{color:"black", cursor:"pointer"}}>{user.name}</Card.Title>
                            </Card.Body>
                           
                        </Card>
                    </div>
                 
             </Carousel.Item>
         ))}
        </Carousel>
    </div>
        </>
  )
}

export default OurPatients




