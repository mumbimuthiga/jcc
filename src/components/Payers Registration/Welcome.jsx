import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";


const Welcome = () =>{
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%'}}>
        {/* <div style={{  display: 'flex', alignSelf: 'flex-end',marginRight:'50px', backgroundColor:'rgba(217, 217, 217, 0.31)'}}>
            <CloseIcon style={{}}/>
        </div> */}

    <div style={{backgroundColor:'rgba(217, 217, 217, 0.31)', width:'100vw', height:'100vh'}} > 
        <div style={{  display: 'flex', alignItems:'center', justifyContent:'center', marginTop:'100px'}} >
            <img alt="welcome_image" src={require('../../assets/Group 2.png')} style={{ width: '10%', height: '10%' }} />
        </div>

        <div style={{ marginTop:'40px'}} >
            <p style={{fontSize:'26px', textAlign:'center'}}>Registered successfully</p> 
            <p style={{fontSize:'26px', textAlign:'center', marginTop:'-15px'}}>Kindly login to your new account</p> 
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Link style={{ color:'#E4A51C', cursor:'pointer', fontSize:'26px', fontWeight:'bold', }} to="/signin">Login</Link> {" "}
            </div>
           
        </div>

    </div>
       
       
    </div>
  )
}

export default Welcome