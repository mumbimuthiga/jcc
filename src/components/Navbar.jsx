import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Animated } from "react-animated-css";
//import useAuth from '../hooks/useAuth';


const Navbar = ({ loggedIn }) => {
    const [click, setClick] = React.useState(false);
    //const {auth} = useAuth()
    const navigate = useNavigate()

    //if(auth) loggedIn = true

    const handleLogout = () =>{
        localStorage.removeItem("token")
        navigate('/signin')

    }

    //console.log("Logged in", loggedIn)
    return (
        <div style={{ backgroundColor: '#5F5353', height: '90px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <img alt="logo" src={require('../assets/logo.png')} style={{ width: '60px', height: '60px', marginLeft: '50px', marginBottom: '10px', marginTop: '10px' }} />
                <p style={{ paddingLeft: '50px', color: 'white' }}>Services</p>
                <p style={{ paddingLeft: '50px', whiteSpace: 'nowrap', color: 'white' }}>About us</p>
                <p style={{ paddingLeft: '50px', color: 'white' }}>Conditions</p>
            </div>

            {loggedIn ? (
                <>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: '20px' }} >
                            <div style={{ height: '56px', width: '56px', backgroundColor: '#E0E0E0', borderRadius: '50%', marginRight: '15px' }}>
                            </div>
                            <div onClick={()=>setClick(!click)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', }}>
                                <p style={{ marginRight: '2px', color: 'white' }}>Enock Agwera</p>
                                <KeyboardArrowDownOutlinedIcon  style={{ marginRight: '80px', color: 'white', fontSize: '18px', }} />
                            </div>
                        </div>

                        <div>

                            {click && (
                                <Animated animationIn="fadeIn" animationOut="fadeOut">
                                    <div style={{ backgroundColor: '#E0E0E0',borderRadius:'10px', marginTop: '-10px', width: '160px', height: '160px', zIndex: '10', marginLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: '15px' }}>
                                        <p onClick={()=>navigate('/profile')}  style={{ color: 'black', textDecoration: 'none', marginTop: '10px', marginBottom: '4px', fontSize:'15px', cursor:'pointer' }}>Profile</p>
                                        <p onClick={()=>navigate('/business_accounts')}  style={{ color: 'black', textDecoration: 'none', marginTop: '2px', marginBottom: '4px', fontSize:'15px',cursor:'pointer' }}>Business Account</p>
                                        <p onClick={()=>navigate('/wallet')} style={{ color: 'black', textDecoration: 'none', marginTop: '2px', marginBottom: '4px', cursor:'pointer',fontSize:'15px' }}>Virtual Wallet</p>
                                        <p onClick={()=>navigate('/land')}  style={{ color: 'black', textDecoration: 'none', marginTop: '2px', marginBottom: '4px', fontSize:'15px',cursor:'pointer' }}>Land</p>
                                        <p onClick={handleLogout} style={{ color: 'black', textDecoration: 'none', marginTop: '2px', marginBottom: '4px', fontSize:'15px',cursor:'pointer' }}>Logout</p>
                                    </div>
                                </Animated>
                            )}

                        </div>
                    </div>
                </>

            ) : (
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }} >
                    <Link style={{ paddingRight: '70px', color: 'white', textAlign: 'center', cursor: 'pointer' }} to="/signin">Login</Link>
                </div>
            )
            }

        </div >
    )
}

export default Navbar