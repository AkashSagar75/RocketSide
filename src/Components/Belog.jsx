import React from 'react'
import app from '../Components/imagess/app.png';
import  web from '../Components/imagess/web.png';
import  ux from '../Components/imagess/ux.png';
export default function Belog() {
 
  return (
    <>
    <section className="hero_section">
        <div className="text_container">
            
        </div>
    </section>
    <section className="black_box">
        <h2 >Work, We can do for <span className="you">You</span></h2>
    </section>
    <section className="card_h">
        <div className="grid_items">
            <div className="card">
            <div className="card_image">
              <img src={web} alt="my pic"/>

            </div>
            <div class="card_text">
                <h3>web Developement</h3>
                <p className="card_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor consequuntur itaque non nulla quae!</p>
            </div>
        </div></div>
        <div className="grid_items">
            <div className="card">
            <div className="card_image">
            <img src={app} alt="my pic"/>

            </div>
            <div className="card_text">
                <h3>App Developement</h3>
                <p className="card_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor consequuntur itaque non nulla quae!</p>
            </div>
        </div></div>
        <div className="grid_items">
             <div className="card">
               <div className="card_image">
               <img src={ux} alt="my pic"/>

            </div>
            <div className="card_text">
                <h3>UI/UX Developement</h3>
                <p className="card_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor consequuntur itaque non nulla quae!</p>
            </div>
        </div></div>
        
        
        
    </section>
     </>
  )
}
