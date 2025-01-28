
import { useNavigate } from 'react-router';
import './App.css'
import axios from 'axios'
function SignUp() {


  let navigate = useNavigate();

  async function Signup(){
   
    const firstName = document.getElementById("signup-firstname").value;
  const lastName = document.getElementById("signup-lastname").value;
  const email = document.getElementById("signup-email").value;
  const password= document.getElementById("signup-password").value;
    const response = await axios.post("http://localhost:7777/signup",{
      firstName : firstName,
      lastName : lastName,
      password : password,
      email : email
    })

    const data = response.data.message;

    alert(data);

    navigate("/signin")

  }



  return (
    <div>
      <h2>Sign up</h2>
      <input type="text" id="signup-firstname" placeholder='Enter firstname...'/>
      <input type="text" id="signup-lastname" placeholder='Enter lastname..' />
      <input type="text" id="signup-email" placeholder='Enter email...'/>
      <input type="text" id="signup-password" placeholder='Enter Passoword..'/>
      <button type='submit' onClick={()=>{
        Signup()
      }}>Submit</button>
    </div> 
  )
}

export default SignUp
