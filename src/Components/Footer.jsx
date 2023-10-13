import React from 'react'
//import logo from '../assets/images/logo1.png'
import { Col,Container ,ListGroup,ListGroupItem,Row} from 'react-bootstrap'
 import { Link } from 'react-router-dom'
 import { CiLocationOn } from 'react-icons/ci';
 import { BiPhoneCall } from 'react-icons/bi'
 import {AiOutlineMail} from 'react-icons/ai'


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
     <section className='footer'>
      <Container>
        <Row>
           <div className="col-sm-6">
            <div className="f_logo">
              <h1 className='logo_he'>Er_Sagar75</h1>
                <div>
                  <p className='since'>Since 2023</p>
                </div>
            </div>
            <p className='footer__text mt-5'>
            Experience seamless online shopping at ShopKaro. Browse through our extensive collection, enjoy easy returns, and benefit from 24/7 customer support
            </p>
           </div>
           
           
            <div className="col-sm-6">
              <div className="footer_links">
                <h3 className='footer_title'>Conact us</h3>
                </div>
              <div className='contactus'>
              <div className="row-md">
              <li  className='links_footer'> 
                     
                     <CiLocationOn/>  Amroha | U.P - 244236 
                  
                 </li>
              </div>
              <div className="row-md">
              <li  className='links_footer'> 
              <BiPhoneCall/>  +91 7500669157
              </li>
              </div>
              <div className="row-md">
              <li  className='links_footer'> 
              <AiOutlineMail/> toakash920@gmail.com
              </li>
              </div>
              </div>
             
               
            
            </div>
            <hr/>
            <Col lg='12'>
            <p className='footer__copyright'>
              <span>Copyright © {year} | Er_Sagar75.com</span>
            </p>
          </Col>
        </Row>
      </Container>
     </section>
    </>
  )
}
