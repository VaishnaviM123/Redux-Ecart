import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { removeItemWishList } from '../redux/wishListSlice';

function WishList() {
  const wishListArray = useSelector(state => state.wishList);
  const dispatch = useDispatch();

  const addToCartFunction = (item) => {
    dispatch(addToCart(item));
    dispatch(removeItemWishList(item.id));
  };

  useEffect(() => {
    // Any side effects related to wishListArray can be handled here
  }, [wishListArray]);

  return (
    <div style={{ background: 'linear-gradient(0deg, rgba(240,221,206,1) 32%, rgba(222,220,220,1) 100%)', textAlign: 'center', paddingTop: '55px', paddingBottom: '55px' }}>
      <div className='container w-100'>
        {wishListArray?.length > 0 ?
          <div>
            <h1 className='mb-4 fw-bolder fs-1' style={{ fontFamily: 'Lakki Reddy, serif', color: "#824D74" }}>List of Products in your WishList</h1>
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
                {wishListArray.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.price} $</td>
                    <td><Link to={`/singleview/${item.id}`}><img src={item.image} alt={item.title} style={{ width: '40px', height: '40px' }} /></Link></td>
                    <td>
                      <span className='d-flex justify-content-center align-item-center' style={{ gap: "25px" }}>
                        <a style={{ color: '#FF004D', fontSize: '20px' }} onClick={() => dispatch(removeItemWishList(item.id))}><i className="i2 fa-solid fa-trash-can" /></a>
                        <a style={{ color: '#7D0A0A', fontSize: '20px' }} onClick={() => addToCartFunction(item)}><i className="i2 fa-solid fa-cart-shopping" /></a>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          :
          <div className='d-flex align-items-center'>
            <img src="./wishlist.png" alt=".." width='60%' height='50%' />
            <div style={{ lineHeight: '1em' }}>
              <h1 style={{ fontFamily: 'Platypi, serif' }}>Your Wishlist is Empty</h1>
              <Link to='/' style={{ textDecoration: 'none', color: '#824D74' }}><h1>Continue shopping</h1></Link>
            </div>
          </div>}
      </div>
    </div>
  );
}

export default WishList;