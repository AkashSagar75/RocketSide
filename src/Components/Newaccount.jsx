import React from 'react'

export default function() {
  return (
    <>
        <div class="container">
        <div class="apply_box">
            <h1 >New Accout
                <span class="tittle">(...)</span>
            </h1> 
            <form action="#">
                <div className="form_container">
                    <div class="form_control">
                        <label for="first_name">First Name</label>
                        <input type="text" id="first_name" name="first_name" placeholder="enter first name"/>
                    </div>
                    <div className="form_control">
                    <label for="last_name">Last Name</label>
                        <input type="text" id="last_name" placeholder="enter last name"/>
                    </div>
                    <div className="form_control">
                    <label for="useremail">User email:</label>
                    <input type="email" id="useremail" placeholder="enter email"/>
                </div>
                 
                    
                <div class="form_control">
                    <label for="psw">Password</label>
                         <input type="password" placeholder="Enter Password" name="psw" required/>
                    </div>
                    <div class="form_control">
                        <label for="phone">phone no</label>
                        <input type="number" id="phone" name="first_name" placeholder="enter first name"/>
                    </div>
                    <div class="form_control">
                        <label for="date">Date of birth</label>
                        <input type="date" id="date" name="first_name"/>
                    </div>
                    
                    </div>
                    <div class="button_container">
                        <button type="submit">Apply Now</button>
                        <button type="reset">Reset</button>
                    </div>
                
            </form>
        </div>
    </div>
    </>
  )
}
