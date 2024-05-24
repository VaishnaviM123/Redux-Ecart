import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addToWishList } from '../redux/wishListSlice';
import { addToCart } from '../redux/cartSlice';

function SingleView() {
  const { id } = useParams();
  const products = useSelector((state) => state.productsSlice.allProducts);
  const dispatch = useDispatch()
  const product = products.find((product) => product.id === parseInt(id, 10));

  return (
    <div className='py-5 m-0' style={{ background: 'linear-gradient(0deg, rgba(250,243,237,1) 0%, rgba(241,239,239,1) 100%)' }}>
      {product ? (
        <Container className='p-5' style={{ boxShadow: '#AF8F6F 0px 1px 1px 1px, #AF8F6F 0px 2px 1px 1px' }}>
          <h1 className='text-center pb-4 fw-bolder fs-1' style={{fontFamily: 'Sedan SC, serif',color: "#8B322C"}}>{product.title}</h1>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col lg={5} md={6} style={{ height: '400px' }}>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%'}} />
            </Col>
            <Col lg={7} md={6} className='pt-4' style={{fontFamily:'PT Sans Narrow, sans-serif'}}>
              <p className='text-uppercase fs-2 fw-bolder' style={{color:'#5F374B'}}>{product.category}</p>
              <p className='fs-4'><b className='fs-2' style={{color:'#9A031E'}}>Description:</b> {product.description}</p>
              <p><b className='fs-3' style={{color:'#9A031E'}}>Price: </b><span className='fs-2 fw-bolder' style={{color:'#114232'}}> $ {product.price}</span></p>
              <p><b className='fs-3' style={{color:'#9A031E'}}>Rating:</b> <span className='bg-success px-2 fw-bolder text-white'>{product.rating.rate} <i class="fa-regular fa-star"></i></span> <span className='fw-bolder'>(from {product.rating.count} reviews)</span></p>
              <div className='d-flex justify-content-around'>
                <Button variant='outline-danger px-5 py-0 fs-3' onClick={() => dispatch(addToWishList(product))}>
                  <i className="fa-regular fa-heart"></i>
                </Button>
                <Button variant='outline-danger px-5 py-0 fs-3' onClick={() => dispatch(addToCart(product))}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className='text-center d-flex align-items-center flex-column mt-5' style={{ minHeight: '50vh' }}>
          <h1 style={{ fontFamily: 'Platypi, serif' }}>Product Not Found!</h1>
          <Link to='/' style={{ textDecoration: 'none', color: '#824D74' }}>
            <h1>Go to Products</h1>
          </Link>
        </Container>
      )}
    </div>
  );
}

export default SingleView;