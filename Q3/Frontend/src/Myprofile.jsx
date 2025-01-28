import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Myprofile() {


    const [details , setDetails] = useState({})

    async function fetchData(){
        const response = await axios.get("http://localhost:7777/myprofile",{

            headers :{
                token : localStorage.getItem("token")
            }


            
        })

        const data = await response.data;

        const userdetails = {
            username : data.username,
            email : data.email
        }
        alert(`Welcome ${data.username}`)


        setDetails(userdetails)
    }

    useEffect(()=>{

        fetchData()
        


    },[])
  return (
    <div>

        <p>User Details :</p>

        {Object.keys(details).length>0 ?<p>{details.username}</p> :<p>Fetching...</p>}
      
    </div>
  )
}

export default Myprofile
