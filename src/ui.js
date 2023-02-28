import React from "react";
import "./ui.css"
import img from "./pics/sidepic.jpg"
import{AiFillApple} from 'react-icons/ai'
import{AiOutlineMail} from 'react-icons/ai' 
const Userid = () => {

    return(

<>

<div className="container">
<div className="container2">
<div  className="mainuser">
<h2 className="welcome"  >Welcome Back </h2>
<p className="details">Please Enter Your Details</p>
<div className="inputmain">   
<button className="apple">
<AiFillApple className="appleicon"/>
<p className="log">Log In With Apple</p>    
</button>
<p className="or">___________________or_____________________</p>
<div className="email">
  <input className="emailinput" placeholder="Email"/>  

</div>

<div className="password">
  <input className="passwordinput" placeholder="password"/>  


<div className="days">
 <p className="remember">
  Remember For 30 Days  
 </p>

 <p className="forgot">
  Forgot Password?  
 </p>   
</div>
<button className="loginbutton">
  <p className="loginmain">Log in</p>  
</button>


<div className="signup">
 <p>
  Dont Have An Accout  
 </p>

 <p className="up">
  Sign UP?  
 </p>   
</div>

</div>
</div>   
</div>
<img className="containerimg"  src = {img}/>


</div>













</div>
</>



    )
}
export default Userid