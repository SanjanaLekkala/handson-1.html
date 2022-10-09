import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const OurScience = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className='star'>
      <div className="about1">
        <h1>About</h1>
        <br></br>
        <h4>(adalimumab)</h4>
      </div>
      <br></br>
      <div className="about2">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae efficitur nibh. Nulla non ante velit. Duis vel quam est. Maecenas et magna nec dui luctus dapibus id a ligula. Nulla vel lorem gravida, ornare ipsum ac, tincidunt nisl. Nunc at tincidunt purus. Mauris pellentesque ipsum quis ligula porttitor, ac condimentum diam dignissim. Proin in varius ante.Curabitur tincidunt sit amet tortor ut laoreet.</p>
        <p>In dapibus mauris sed arcu tempor facilisis. Ut dapibus lacus tincidunt nibh vestibulum rhoncus. Aliquam fermentum vel lorem sed feugiat. Suspendisse potenti. Sed risus massa, auctor nec lacinia in, condimentum id metus. Fusce rhoncus ante ac ullamcorper hendrerit. Etiam augue sapien, varius vel pellentesque quis, facilisis sed purus. Aliquam ac purus a lacus consectetur placerat.</p>
      </div>
      <div>
        <Navbar className='n1' collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#about"  className="n2" onClick={handleClick}><button className="button1">About</button></Navbar.Brand>
            <Navbar.Brand href="#indications"  className="n2" onClick={handleClick}><button className='button1'>Indications</button></Navbar.Brand>
            <Navbar.Brand href="#abstracts"  className="n2" onClick={handleClick}><button className='button1'>Abstracts</button></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#pricing"  className="n3" onClick={handleClick}><button className='button1'>Device</button></Nav.Link>
                <Nav.Link href="#pricing"  className="n3" onClick={handleClick}><button className='button1'>Milestons</button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 

      </div>

      {/* <div className="button">
    <button className="button1">About</button>
    <button className="button1" style={{marginLeft:"20px"}}>Indications</button>
    <button className="button1" style={{marginLeft:"20px"}}>Abstracts</button>
    <button className="button1" style={{marginLeft:"20px"}}>Device</button>
    <button className="button1" style={{marginLeft:"20px"}}>Milestones</button>
    </div> */}
    </div>
  );
};

export default OurScience;