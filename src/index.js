import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './css.css';
import React from 'react';
import ReactDOM from 'react-dom';



const TresCartasEnUna = () => {
  return (
    <Navbar bg="dark" variant="dark" className=''>
    <Col md={2}></Col>
 
    <div className='col-8'>
      <Col md={8} className='d-flex '>
            <Navbar.Brand href="#" className='brand' >Start Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavAltMarkup" />  
            <Navbar.Collapse id="navbarNavAltMarkup">
            <div className='ml-auto'>
              <Nav className="">
                <Nav.Link href="#" className="nav-link active">
                  Inicio <span className="sr-only"></span>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  Funciones
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  Precios
                </Nav.Link>
                <Nav.Link href="#" className="nav-link disabled">
                  Deshabilitado
                </Nav.Link>
              </Nav>
            </div>
        </Navbar.Collapse>
      </Col>
    </div>  
    </Navbar>

  );
};

const Text = () => {
  return (
    <div className='d-flex '>
      <Row>
      <Col md={2}></Col>
      <Col md={8}>
        <div className=" bg-light px-4 pt-2 pb-5">
            <h1>A Warm Welcome!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat reprehenderit nemo blanditiis nulla nostrum voluptas consequuntur ea praesentium et, unde tenetur quod dolores quis commodi aut id fugit? Eum!
            </p>
            <div className="">
              <button className="btn btn-primary">Call to action</button>
            </div>
        </div>
      </Col>
      <Col md={2}></Col>
      </Row>
    </div>
  );
};

const Cards = () => {
  return (
    <div className='pt-3'>
      <Row>
        <Col md={2}></Col>
        <Col md={2}>
          <img className="card-img-top" src="https://picsum.photos/500/325?grayscale" alt="Card image cap" />
          <div className="card-body border text-center pt-3   ">
            <h5 className="card-title">Card title</h5>
            <p className="card-text m-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-flex justify-content-center bg-light border-top align-items-center'>
              <a href="#" className="btn btn-primary  m-2">Go somewhere</a>
            </div>
          </div>
        </Col>
        <Col md={2}>
          <img className="card-img-top" src="https://picsum.photos/500/325?grayscale" alt="Card image cap" />
          <div className="card-body border text-center pt-3   ">
            <h5 className="card-title">Card title</h5>
            <p className="card-text m-2 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-flex justify-content-center bg-light border-top align-items-center'>
              <a href="#" className="btn btn-primary  m-2">Go somewhere</a>
            </div>
          </div>
        </Col>
        <Col md={2}>
          <img className="card-img-top" src="https://picsum.photos/500/325?grayscale" alt="Card image cap" />
          <div className="card-body border text-center pt-3   ">
            <h5 className="card-title">Card title</h5>
            <p className="card-text m-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-flex justify-content-center bg-light border-top align-items-center'>
              <a href="#" className="btn btn-primary  m-2">Go somewhere</a>
            </div>
          </div>
        </Col>
        <Col md={2}>
          <img className="card-img-top" src="https://picsum.photos/500/325?grayscale" alt="Card image cap" />
          <div className="card-body border text-center pt-3   ">
            <h5 className="card-title">Card title</h5>
            <p className="card-text m-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-flex justify-content-center bg-light border-top align-items-center'>
              <a href="#" className="btn btn-primary  m-2">Go somewhere</a>
            </div>
          </div>
        </Col>
        
        
        
      </Row>
    </div>
  );
};


ReactDOM.render(
  <div>
    <TresCartasEnUna />
    <Text />
    <Cards />
  </div>,
  document.getElementById('root')
);

