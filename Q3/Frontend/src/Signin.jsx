import axios from "axios";
import { useNavigate } from "react-router";

function Signin() {
    let navigate = useNavigate()

    async function fetchInfo(){

      
   
     
      const email = document.getElementById("signin-email").value;
      const password= document.getElementById("signin-password").value;
        const response = await axios.post("http://localhost:7777/signin",{
          password : password,
          email : email
        },{
            withCredentials : true
        })
    
       
       console.log(response);
       
       console.log(response.data);

      
       

       alert(response.data.message)

       localStorage.setItem("token",response.data.token)

     
       navigate("/myprofile")
        
      
      }
  return (
    <div>

<h2>Sign in</h2>
      <input type="text" id="signin-email" placeholder='Enter email...'/>
      <input type="text" id="signin-password" placeholder='Enter Password...' />
      <button onClick={fetchInfo}>Signin</button>
      
    </div>
  )
}

export default Signin
