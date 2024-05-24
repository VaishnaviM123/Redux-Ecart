import React, { useState, useEffect, useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Cart() {
  const [show, setShow] = useState(false);
  const cartArray = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    return cartArray.reduce((sum, item) => sum + item.price, 0);
  }, [cartArray]);

  const payment = () => {
    dispatch(emptyCart());
    toast("Order confirmed. It will reach you shortly.");
    handleClose();
  };

  useEffect(() => {
    // Any side effects related to cartArray can be handled here
  }, [cartArray]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ background: 'linear-gradient(0deg, rgba(240,221,206,1) 32%, rgba(222,220,220,1) 100%)', textAlign: 'center'}}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='d-flex flex-column bg-dark text-white m-1 rounded'>
          <Modal.Title>Pay to continue</Modal.Title>
          <InputGroup className="mt-4 mb-4">
            <Form.Control placeholder="Phone Number" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control placeholder="UPI id" />
          </InputGroup>
          <div className='d-flex justify-content-center'>
            <Button variant="danger me-5 px-4 fs-4 fw-bolder" onClick={handleClose}>Close</Button>
            <Button variant="success px-4 fs-4 fw-bolder" onClick={payment}>Pay</Button>
          </div>
        </Modal.Header>
      </Modal>
      <div>
        {cartArray?.length > 0 ?
          <div className='container w-100' style={{paddingTop: '55px',paddingBottom: '55px' }}>
            <h1 className='mb-4 fw-bolder fs-1' style={{ fontFamily: 'Lakki Reddy, serif',color:"#824D74" }}>List of Products in your Cart</h1>
            <Table responsive striped bordered hover>
              <thead>
                <tr style={{ fontFamily: 'Platypi, serif', fontSize: '20px' }}>
                  <th>#</th>
                  <th>Product title</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((item, index) =>
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.price} $</td>
                    <td><Link to={`/singleview/${item.id}`}><img src={item.image} width='40px' height='40px' alt={item.title} /></Link></td>
                    <td><span style={{ color: 'red', fontSize: '20px' }} onClick={() => dispatch(removeItem(item.id))}><i className="i2 fa-solid fa-trash-can"></i></span></td>
                  </tr>
                )}
              </tbody>
            </Table>
            <h3>Total Amount: <span className='text-danger'>{totalPrice} $</span></h3>
            <Button variant='danger mt-3 px-5 py-2 fs-4 fw-bolder' onClick={handleShow}>CheckOut</Button>
          </div>

          :
          <div className='d-flex align-items-center'>
            <img src="./cart.png" alt=".." width='60%' height='50%' />
            <div style={{lineHeight:'1em'}}>
              <h1 style={{ fontFamily: 'Platypi, serif' }}>Your Cart is Empty</h1>
              <Link to='/' style={{ textDecoration: 'none', color: '#824D74' }}><h1>Continue shopping</h1></Link>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Cart;