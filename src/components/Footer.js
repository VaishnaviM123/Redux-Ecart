import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <div className='text-white p-5 pb-2' style={{background:'linear-gradient(0deg, rgba(237,152,84,1) 0%, rgba(126,126,126,1) 100%)'}}>
        <Row className='d-flex'>
            <Col>
                <img src="https://i.postimg.cc/Gt31p7wz/logo-2.png" className='image2 p-0 m-0' alt="..." width='280px' />
            </Col>
            <Col sm={12} lg={4} md={6}>
                <h3 className='fw-bolder text-black'>Registered Address</h3>
                <p style={{fontFamily:'Sedan SC, serif'}}>TrendsNest Internet Private Limited <br/>
                011 TrendsNest building<br/>
                Chelannur Village<br/>
                Kozhikode, 673616<br/>
                Kerala, India<br/>
                Telephone: 044-45614700 / 044-67415800</p>
            </Col>
            <Col>
            <h3 className='fw-bold text-black'>Group Companies</h3>
            <a href="https://www.myntra.com/" rel="noreferrer" style={{textDecoration:'none',color:'white'}}>Myntra</a><br />
            <a href="https://www.flipkartwholesale.com/" rel="noreferrer" style={{textDecoration:'none',color:'white'}}>Flipkart Wholesale</a><br />
            <a href="https://www.cleartrip.com/" rel="noreferrer" style={{textDecoration:'none',color:'white'}}>Clear Trip</a><br />
            <a href="https://www.shopsy.in/" rel="noreferrer" style={{textDecoration:'none',color:'white'}}>Shopsy</a><br />
            </Col>
            <Col>
                <h3 className='fw-bold text-black'>Socials</h3>
                <div className='icons fs-1 d-flex justify-content-around text-white'>
                    <a href="https://wa.me"><i className="fa-brands fa-whatsapp me-2 i1"></i></a>
                    <a href="https://instagram.com"><i className="fa-brands fa-instagram me-2 i1"></i></a>
                    <a href="https://linkedin.com"><i className="fa-brands fa-linkedin me-2 i1"></i></a>
                    <a href="https://twitter.com"><i className="fa-brands fa-twitter me-2 i1"></i></a>
                </div>
            </Col>
            <Container><hr /></Container>
            <p className='text-center'>© 2024 TrendNest.com</p>
        </Row>    
    </div>
  );
}

export default Footer;
