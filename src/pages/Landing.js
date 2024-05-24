import React, { useEffect } from 'react';
import { Col, Row, Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishList } from '../redux/wishListSlice';
import { fetchProducts } from '../redux/productSlice';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Landing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsSlice.allProducts);
  const { loading, error } = useSelector((state) => state.productsSlice);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='pb-5' style={{background:'linear-gradient(0deg, rgba(250,243,237,1) 0%, rgba(241,239,239,1) 100%)'}}>
      <div>
        <Carousel data-bs-theme="dark" interval={2500}>
          <Carousel.Item>
            <img src="./c3.png" alt='..' width='100%' height='370px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./c1.jpg" alt='..' width='100%' height='370px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./c2.jpg" alt='..' width='100%' height='370px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./c4.png" alt='..' width='100%' height='370px' />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='container w-100 d-flex align-items-center mb-3 mt-5'>
        <Row className='mt-5 p-5' style={{boxShadow: '#AF8F6F 2px 1px 2px 0px, #AF8F6F 2px 2px 6px 2px',background:'linear-gradient(0deg, rgba(250,240,232,1) 0%, rgba(230,227,227,1) 100%)',borderRadius:'10px'}}>
          <Col>
            <h2 style={{ fontFamily: 'Lakki Reddy, serif', fontWeight: '800', color:'#8E3E63', fontSize: '40px', textAlign: 'center', paddingTop: '10px' }}>
              Quick and reliable delivery to your doorstep
            </h2>
            <p>
              <h3 style={{ fontFamily: 'Sail, system-ui', fontWeight: '700', textAlign: 'center', color:'#003285' }}>
                We are your go-to online destination for the latest trends in fashion, electronics, home decor, and more. At TrendNest, we pride ourselves on providing a cozy, user-friendly shopping experience where you can find everything you need to stay stylish and up-to-date.
              </h3>
            </p>
          </Col>
          <Col className='text-center' md={12} lg={5} data-aos="fade-down-left">
            <img src="https://i.postimg.cc/8cL59YpP/s-3.png" alt="Delivery Illustration" className='img-1 pb-5' />
          </Col>
        </Row>
      </div>
      {loading ? (
        <div className='text-center' style={{ color: '#0A6847' }}>
          <h1><i className="fa-solid fa-spinner fa-spin-pulse"></i> Loading</h1>
        </div>
      ) : error ? (
        <div className='text-center' style={{ color: '#0A6847' }}>
          <h1>{error}</h1>
        </div>
      ) : products.length > 0 ? (
        <div>
          <Container className='text-center mx-auto mt-5'>
            <h1 className='my-5 py-2 fw-bolder h1style'>Products</h1>
            <Row className='d-flex justify-content-center'>
              {products.map((i) => (
                <Col className='mb-5 d-flex justify-content-center fw-bold'>
                  <Card style={{fontFamily:'PT Sans Narrow, sans-serif',width: '20rem',border:'none',borderRadius:'13px',boxShadow: '#AF8F6F 0px 5px 10px 0px' }} data-aos="fade-up">
                    <Link to={`/singleview/${i.id}`} style={{textDecoration:'none'}}>
                      <Card.Img variant="top c5" src={i.image} height='250px' style={{padding:'15px'}} />
                    </Link>
                    <Card.Body style={{ lineHeight: '1.5em' }}>
                      <Card.Text className='fs-4' style={{color:'#153448'}}>{(i.title.length > 25) ? (i.title.slice(0, 25) + "... ") : i.title}</Card.Text>
                      <Card.Text className='fs-3 text-danger'><span className='fs-2 text-dark'>$</span>{i.price}</Card.Text>
                      <Card.Text>
                        <span
                          className='fs-4'
                          style={{
                            color: i.rating.rate >= 4
                              ? 'green'
                              : i.rating.rate >= 3
                              ? 'blue'
                              : i.rating.rate >= 2
                              ? 'yellow'
                              : 'red' 
                          }}
                        >
                          {Array.from({ length: Math.floor(i.rating.rate) }, (_, index) => (
                            <i key={index} className="fa-solid fa-star"></i>
                          ))}
                          {i.rating.rate % 1 !== 0 && <i className="fa-solid fa-star-half-alt"></i>}
                        </span>
                        <br />
                        <span style={{ color: '#003C43' }}>({i.rating.count} reviews)</span>
                      </Card.Text>
                      <Row className='text-center'>
                        <Col>
                          <Button variant='outline-danger' onClick={() => dispatch(addToWishList(i))}>
                            <i className="fa-regular fa-heart"></i>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant='outline-danger' onClick={() => dispatch(addToCart(i))}>
                            <i className="fa-solid fa-cart-shopping"></i>
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ) : (
        <div className='text-center' style={{ color: '#0A6847' }}>
          <h1>No Products Available</h1>
        </div>
      )}
      <script>
        AOS.init();
      </script>
    </div>
  );
}

export default Landing;










// import React, { useEffect } from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../redux/cartSlice';
// import { addToWishList } from '../redux/wishSlice';
// import { fetchProducts } from '../redux/productSlice';
// function Landing() {

//   // const [products,setProducts] = useState([])

//   //create an objrct to dispatch
//   const dispatch = useDispatch()
//   const products = useSelector(state=>state.product.allProducts)

//   const {loading,error} = useSelector(state=>state.product)

//   //https://fakestoreapi.com/products

//   // const getProducts=async()=>{
//   //  const result= await axios.get('https://fakestoreapi.com/products')
//   // //  console.log(result.data);
//   //  setProducts(result.data)
//   // }

//   useEffect(()=>{
//     // getProducts()
//     dispatch(fetchProducts())
//   },[])

//   console.log(products);



//   return (
//     <div>
//       <div className='landing d-flex '>
//         <Row>
// <Col lg={6} md={6}>
//                 <img className='' src="https://i.postimg.cc/kGnHZs9r/young-blonde-woman-dress-shopping-black-wall.png" width='100%' alt="" />
    
// </Col>            
// <Col lg={6} md={6} className='d-flex flex-column justify-content-center align-items-center'>
//                 <div ><h2 className='head'>Find Your Perfect Look at <b><i>ESTORE</i></b></h2>
//                 <p>Explore our exclusive collection of fashion, accessories, and more.</p>
//                 <button className='btn btn-success bt1'>Shop Now</button></div>
// </Col>            
//         </Row>
//       </div>

//       <Container className='my-5'>
//         <Row>
//         {products?.length>0 && products.map(i=>(
//             <Col lg={3} md={4}>

              
//             <Card className='shadow-lg border-0' style={{ width: '16rem',height:'30rem', marginTop:'10px',marginBottom:'10px'}}>
//       <Card.Img className='ms-2' variant="top" src={i.image} style={{width:'210px', height:'250px',padding:'15px', paddingLeft:'30px'}} className='px-2' />
//       <Card.Body>
//         <Card.Title className='text-center'>{i.title}</Card.Title>
//         <Card.Text className='text-center'>
//           {i.price}
//         </Card.Text>
//         <div className='nav-right d-flex'>
//                 <Button onClick={()=>dispatch(addToWishList(i))} variant="success" className='mx-3'><i class="fa-regular fa-heart"></i></Button>
//                 <Button onClick={()=>dispatch(addToCart(i))} variant="success" className=''><i class="fa-solid fa-cart-shopping"></i></Button>
//             </div>
//       </Card.Body>
//     </Card>
   
//             </Col>
//              ))

//             }
//              {
//               loading &&
              
//               <div className='text-center'><i class="fa-solid fa-circle-notch fa-spin fa-2xl" style={{color:'#178219'}}></i></div>
//               }

//               {
//                 error && 
//                 <h2>{error}</h2>
//               }
             
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default Landing