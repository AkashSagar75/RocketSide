import Carousel from 'react-bootstrap/Carousel';
import { BsTruck} from 'react-icons/bs'
import {SiStarlingbank} from 'react-icons/si';
import {TbTruckReturn} from 'react-icons/tb'
import { RiRefund2Line } from 'react-icons/ri'
import pic from '../assets/images/Home.png'

import pic2 from '../assets/images/Shoping.png'
import pic3 from '../assets/images/carousel1.png'
import { useState } from 'react';
import men from './imagess/menpic.png'
import women from './imagess/womenpic.png'
import kids from './imagess/kidpic.png'
import smartwatch from './imagess/smarwatchpic.png'
import smartphone from './imagess/smartphone.png'
import eletronic from './imagess/eletronicpic.png'
import kidjewelry from './imagess/kidsjewelry.png'
import menjewelry from './imagess/menjewelrypic.png'
import womenjewelry from './imagess/jewelrywomenpic.png'
import book12 from './imagess/12book.png'
import engineerbook from './imagess/engineerbook.png'
import compitionbook from './imagess/compitionbook.png'
import grocery from './imagess/grocerpic1.png'
import kichan from './imagess/kichanpic.png'
import toy from './imagess/toypic.pmg.jpg'
import shoes from './imagess/shoes.png'
import table from './imagess/table.png'
//import purfume from './imagess/purfume.png'

function Carousal() {
  const [title, setTitle] =useState("Trading Products 20% off")
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img src={pic} alt='pic' className='carousal_img' />
      
           
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic2}  alt='pic' className='carousal_img'/>
         
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic3} alt ='pic' className='carousal_img'/>
         
      </Carousel.Item>
    </Carousel>
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
            <span className='delivery_icon'>
              <i><BsTruck className="bstruck"/></i>
              
              <div>
                <h3>Free Shipping</h3>
                <p> No additional cost.</p>
              </div>
              </span>
        </div>
        <div className="col-sm-3">
        <span className='return_icon'>
              <i><TbTruckReturn className='bstruck'/></i>
              
              <div>
                <h3>Easy Returns</h3>
                <p>simple returns policy.</p>
              </div>
              </span>
        </div>
        <div className="col-sm-3">
        <span className='delivery_icon'>
             <i><SiStarlingbank className='bstruck'/></i> 
              
              <div>
                <h3>Secure Payment</h3>
                <p>Reliable payment methods.</p>
              </div>
              </span>
        </div>
        <div className="col-sm-3">
        <span className='return_icon'>
              <i><RiRefund2Line className='bstruck'/></i>
              
              <div>
                <h3>Refund Policy</h3>
                <p>Refund your purchase.</p>
              </div>
              </span>
        </div>
      </div>
    </div>
     <h1 className='trading'>{title}</h1>
     <div className="container">
     <div className="row">
     <div className="col-sm-4">
        <div className="card">
          <img src={men}alt="myimage" className='cloths_img'></img>
          <div className="cardbody">
            <h3 className='h_name'>You can be buy formal cloths for men from  Shoping Karo</h3>
            <p className='p_name'>There are a variety of ways to purchase clothes, depending on your preferences and budget. Here are a few options</p>
          </div>
        </div>
      </div>
         
        <div className="col-sm-4">
        <div className="card">
          <img src={women} alt='myimage' className='cloths_img'></img>
          <div className="cardbody">
             <h3 className='h_name'>You can be buy formal cloths for women from  Shoping Karo</h3>
             <p className='p_name'>There are a variety of ways to purchase clothes, depending on your preferences and budget. Here are a few options</p>
          </div>
        </div>
        </div>
      
      
         <div className="col-sm-4">
         <div className="card">
          <img src={kids} alt='myimage' className='cloths_img'></img>
          <div className="cardbody">
            <h3 className='h_name'>You can be buy cloths for kids from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase clothes, depending on your preferences and budget. Here are a few options</p>
          </div>
         </div>
         
      </div>
     </div>
     </div>
     <h1 className='trading'>{title}</h1>
     <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img src={smartphone} alt='myimg' className ="cloths_img"/>
            <div className="cardbody">
            <h3 className='h_name'>You can be buy Smart Phones from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase Smart Phone, depending on your preferences and budget. Here are a few options</p>
        
            </div>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
            <img src= {smartwatch} alt='myimg' className ="cloths_img"/>
            <div className="cardbody">
            <h3 className='h_name'>You can be buy Smart Watchs from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase Smart Watchs, depending on your preferences and budget. Here are a few options</p>
        
            </div>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
            <img src={eletronic} alt='myimg' className ="cloths_img"/>
            <div className="cardbody">
            <h3 className='h_name'>You can be buy Eletronics items from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase Eletronics items, depending on your preferences and budget. Here are a few options</p>
        
            </div>
          </div>
        </div>
      </div>
     </div>
     <h1 className='trading'>{title}</h1>
     <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img src={table} alt='myimg' className ="cloths_img"/>
            <div className="cardbody">
            <h3 className='h_name'>You can be buy top class furniture from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase top class furniture, depending on your preferences and budget. Here are a few options</p>
        
            </div>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
            <img src="#" alt='myimg' className ="cloths_img"/>
            <div className="cardbody">
            <h3 className='h_name'>You can be buy various types purfume from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase  various types purfume , depending on your preferences and budget. Here are a few options</p>
        
            </div>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
            <img src={shoes} alt='myimg' className ="cloths_img"/>
            <div className="cardbody">
            <h3 className='h_name'>You can be buy letest design sports shoes from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase sports shoes, depending on your preferences and budget. Here are a few options</p>
        
            </div>
          </div>
        </div>
      </div>
     </div>
     <h1 className='trading'>{title}</h1>
     <div className="container">
     <div className="row">
     <div className="col-sm-4">
        <div className="card">
          <img src={kidjewelry}alt="myimage" className='cloths_img'></img>
          <div className="cardbody">
            <h3 className='h_name'>You can be buy Jewelrry for Kids from  Shoping Karo</h3>
            <p className='p_name'>There are a variety of ways to purchase Jewelrry, depending on your preferences and budget. Here are a few options</p>
          </div>
        </div>
      </div>
         
        <div className="col-sm-4">
        <div className="card">
          <img src={womenjewelry} alt='myimage' className='cloths_img'></img>
          <div className="cardbody">
             <h3 className='h_name'>You can be buy letest Jewelrry for women from  Shoping Karo</h3>
             <p className='p_name'>There are a variety of ways to purchase Jewelrry, depending on your preferences and budget. Here are a few options</p>
          </div>
        </div>
        </div>
      
      
         <div className="col-sm-4">
         <div className="card">
          <img src={menjewelry} alt='myimage' className='cloths_img'></img>
          <div className="cardbody">
            <h3 className='h_name'>You can be buy design Jewelrry for men from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase letest Jewelry, depending on your preferences and budget. Here are a few options</p>
          </div>
         </div>
         
      </div>
     </div>
     </div>
     <h1 className='trading'>{title}</h1>
     <div className="container">
     <div className="row">
     <div className="col-sm-4">
        <div className="card">
          <img src={compitionbook}alt="myimage" className='cloths_img'></img>
          <div className="cardbody">
            <h3 className='h_name'>You can be buy all compition books for all exams from  Shoping Karo</h3>
            <p className='p_name'>There are a variety of ways to purchase  all Books, depending on your preferences and budget. Here are a few options</p>
          </div>
        </div>
      </div>
         
        <div className="col-sm-4">
        <div className="card">
          <img src={engineerbook} alt='myimage' className='cloths_img'></img>
          <div className="cardbody">
             <h3 className='h_name'>You can be buy all engineering branch books from  Shoping Karo</h3>
             <p className='p_name'>There are a variety of ways to purchase  all branch, depending on your preferences and budget. Here are a few options</p>
          </div>
        </div>
        </div>
      
      
         <div className="col-sm-4">
         <div className="card">
          <img src={book12} alt='myimage' className='cloths_img'></img>
          <div className="cardbody">
            <h3 className='h_name'>You can be buy  all Books for UP Board from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase  all books, depending on your preferences and budget. Here are a few options</p>
          </div>
         </div>
         
      </div>
     </div>
     </div>
     <h1 className='trading'>{title}</h1>
     <div className="container">
     <div className="row">
     <div className="col-sm-4">
        <div className="card">
          <img src={grocery}alt="myimage" className='cloths_img'></img>
          <div className="cardbody">
            <h3 className='h_name'>You can be buy all  Grocery items  from  Shoping Karo</h3>
            <p className='p_name'>There are a variety of ways to purchase  all grocery items, depending on your preferences and budget. Here are a few options</p>
          </div>
        </div>
      </div>
         
        <div className="col-sm-4">
        <div className="card">
          <img src={kichan} alt='myimage' className='cloths_img'></img>
          <div className="cardbody">
             <h3 className='h_name'>You can be buy all type Kitchen set from  Shoping Karo</h3>
             <p className='p_name'>There are a variety of ways to purchase  all type kitchen set, depending on your preferences and budget. Here are a few options</p>
          </div>
        </div>
        </div>
      
      
         <div className="col-sm-4">
         <div className="card">
          <img src={toy} alt='myimage' className='cloths_img'></img>
          <div className="cardbody">
            <h3 className='h_name'>You can be buy  various type toys for kids from Shoping Karo </h3>
            <p className='p_name'>There are a variety of ways to purchase all toys, depending on your preferences and budget. Here are a few options</p>
          </div>
         </div>
         
      </div>
     </div>
     </div>
    </>
  );
};

export default Carousal;