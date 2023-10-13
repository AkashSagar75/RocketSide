import React from 'react'
import avtar from '../Components/imagess/avtar.png'
import Newaccount from './Newaccount'
import   {NavLink} from 'react-router-dom'
export default function Login() {
   
    

      

  
  return (
    <>
        
        <section className='section_p' >
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                          <h1 className='Login_design'>You have the design, you have the code</h1>
                          <p className='P-login'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reprehenderit veritatis doloremque voluptatibus dignissimos obcaecati, quo placeat, quod sapiente fugit explicabo ut dolor suscipit hic. Possimus quia ducimus consequuntur nostrum quibusdam, alias error. Expedita assumenda est vitae consequuntur aliquid dignissimos. Illum officia alias numquam culpa vero ullam aliquid ea dolor.</p>
                           <button style={{
                              borderRadius:"5%",
                              background:"green",
                              fontSize:"25px",
                              width:"auto"
                           }}>Lern more</button>

                    </div>
                    <div className='col-md-6'>
                      <div className="card" style={{maxWidth:"700px"}}>
                  <div className="imgcontainer">
                  <img src={avtar} alt="Avatar" class="avatar"/>
                  </div>
                
                <div className="cardbody">
               <form action="action_page.php" method="post">
                      

                      <div class="container">
                          <label for="uname"><b>Username</b></label>
                           <input type="text" placeholder="Enter Username" name="uname" required/>

                          <label for="psw"><b>Password</b></label>
                         <input type="password" placeholder="Enter Password" name="psw" required/>

                               <button type="submit">Login</button>
                               <br/>
                               
                                     <label>
                           <input type="checkbox" checked="checked" name="remember"/> Remember me
                                   </label>
                   </div>
                        <div className="container">
                        <button type='submit'> <NavLink to="/newaccount" className='Applyform'>New Account</NavLink></button>
                               <span>you don't have Account.</span>

                        </div>
                        <div class="container" style={{backgroundColor: "#f1f1f1"}}>
                                <button type="button" class="cancelbtn">Cancel</button>
                                    <span class="psw">Forgot <a href="#">password?</a></span>
                         </div>
               </form>
               

            </div>
                       </div>       
                    </div>
                </div>
                </div>
        
        </section>
    </>
  )
}
