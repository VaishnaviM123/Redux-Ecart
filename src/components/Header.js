import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/productSlice';
import { InputGroup } from 'react-bootstrap';

function Header() {
  var cartArray = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="pb-3" style={{ background:"linear-gradient(0deg, rgba(207,207,207,1) 19%, rgba(250,225,205,1) 100%)" }}>
          <Container fluid>
            <h1>
              <Link to={'/'} style={{ textDecoration: 'none', color: "#9A031E", marginLeft: '20px', fontFamily: 'Sedan SC, serif', letterSpacing: '0.1em' }}>
                <img alt="" className='image1' src="https://i.postimg.cc/vZGM2ZSC/icon.png" width="80" height="50" />
                <span className='fw-bolder fs-1 ms-2'>TrendNest</span>
              </Link>
            </h1>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Form inline className="d-flex me-5">
                <InputGroup className='shadow p-0 m-0' style={{borderRadius:'10px',width:'300px',border:'1px solid rgb(247, 212, 210)'}}>
                  <InputGroup.Text style={{ backgroundColor:'transparent', outline: 'none', border: 'none',position:'absolute',zIndex:'1',top:'5px'}}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="search"
                    placeholder="Search for Products"
                    className="ms-4"
                    aria-label="Search"
                    onChange={(e) => dispatch(searchProduct(e.target.value))}
                    style={{ boxShadow: 'none',border: 'none', outline: 'none',backgroundColor:'transparent' }}
                  />
                </InputGroup>
              </Form>
              <Nav>
                <Link to={'/wish-list'} style={{ textDecoration: 'none', fontSize: '25px', fontWeight: '700', color: "#A0153E", marginRight: '40px' }} className='c5'>
                  <i className="fa-regular fa-heart"></i>
                </Link>
                <Link to={'/cart'} style={{ textDecoration: 'none', fontSize: '25px', fontWeight: '700', color: "#A0153E", marginRight: '40px' }}>
                  <i className="fa-solid fa-cart-shopping"></i><span> {cartArray?.length}</span>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;