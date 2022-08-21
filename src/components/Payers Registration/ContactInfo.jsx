import * as React from 'react';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

const theme = createTheme();

const styles = {
    init: {
        cursor: 'pointer'
    },
    clicked: {
        borderBottom: '3px solid #784D0F',
        cursor: 'pointer'
    }
}



const ContactInfo = () => {

    const stored_values = localStorage.contacts && JSON.parse(localStorage.contacts)
    const navigate = useNavigate();
    const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)
    const [contacts, setContacts] = React.useState({
        email: stored_values?.email ? stored_values.email :  '',
        phone: stored_values?.phone ? stored_values.phone :  '',
        nokName: stored_values?.nokName ? stored_values.nokName :  '',
        nokPhone: stored_values?.nokPhone ? stored_values.nokPhone :  ''
    })

    const [errorMessages, setErrorMessages] = React.useState({
        emailError: "",
        phoneError: "",
        nokNameError: "",
        nokPhoneError: ""
    })




    const changeStyle = () => {
        setStyle(styles.clicked)
        navigate('/personal_info')
    }

    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/profession')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/security')
    }

    const changeStyle3 = () => {
        setStyle3(styles.clicked)
        navigate('/registration_preview')
    }


    const handleEmailChange = (event) =>{
        setContacts({...contacts, email:event.target.value})
        //console.log("Email", event.target.value)
        const regex = String(event.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      
        regex === null ? setErrorMessages({...errorMessages, emailError:"Enter a valid email address"}) : setErrorMessages({...errorMessages, emailError:""})
        //console.log("Email error", errorMessages.emailError)
    }


    const handleNokNameChange = (event) =>{
        setContacts({...contacts, nokName:event.target.value})
        //console.log("NokName", event.target.value)

        event.target.value.length < 4 ? setErrorMessages({...errorMessages, nokNameError:"Minimum 4 characters"}) : setErrorMessages({...errorMessages, nokNameError:""})
    }

    const handlePhoneChange = (value) =>{
        setContacts({...contacts, phone:value})
        //console.log("Phone", value.length)

        value.length > 12 ? setErrorMessages({...errorMessages, phoneError:"Maximum 10 characters"}) : setErrorMessages({...errorMessages, phoneError:""})
        //value.length < 11 && value.length > 12 ? setErrorMessages({...errorMessages, phoneError:"Enter a valid Phone Number"}) : setErrorMessages({...errorMessages, phoneError:""})
    }

    const handleNokPhoneChange = (value) =>{
        setContacts({...contacts, nokPhone:value})
        //console.log("Phone", value)

        value.length > 12 ? setErrorMessages({...errorMessages, nokPhoneError:"Maximum 10 characters"}) : setErrorMessages({...errorMessages, nokPhoneError:""})
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if(contacts.phone.length < 12 ){
            setErrorMessages({...errorMessages, phoneError:"Phone Number is a required field"})
        }else if(contacts.nokPhone.length < 12){
            setErrorMessages({...errorMessages, nokPhoneError:"Phone Number of Next of Kin is a required field"})
        }else{
            localStorage.setItem('contacts', JSON.stringify(contacts))
            //console.log("Contacts", localStorage.contacts)
            navigate('/profession')
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Navbar />
                <CssBaseline />

                <Grid item xs={12} sm={8} md={12} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <form style={{ width: '70%', marginTop: '0px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <h4>Lets get you started with just some few steps</h4>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, }}
                                    //onClick={() => navigate('/profession')}
                                >
                                    Next
                                </Button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="email">Email *</label><br />
                                    <input value={contacts.email} onChange={handleEmailChange} type="email" placeholder='Email' id="email" name="email" style={{ marginTop: '-15px', paddingLeft: '10px', height: '45px', border: '1px solid gray', borderRadius:"5px", fontSize:"16px" }} autoFocus required />
                                    {errorMessages.emailError ? <p style={{ color: 'red', fontSize: '14px', marginBottom:"-10px", marginTop:"2px" }}>{errorMessages.emailError}</p> : ""}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label style={{marginBottom:"-20px"}} for="website">Phone Number*</label><br />
                                    <PhoneInput
                                        className='PhoneInput'
                                        //placeholder="712345678"
                                        value={contacts.phone}
                                        country={'ss'}
                                        enableSearch
                                        onChange={handlePhoneChange}
                                        inputStyle={{
                                            height: "45px",
                                            width:"100%",
                                            border:"1px solid black",
                                        }}
                                        inputProps={{
                                            name: "phone",
                                            //required: true
                                            }}
                                    />
                                    {errorMessages.phoneError ? <p style={{ color: 'red', fontSize: '14px', marginBottom:"-15px", marginTop:"5px" }}>{errorMessages.phoneError}</p> : ""}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="next_kin">Next of kin name *</label><br />
                                    <input value={contacts.nokName} onChange={handleNokNameChange} placeholder="Next of kin" type="text" id="next_kin" name="next_kin" style={{ marginTop: '-15px', height: '45px', paddingLeft: '10px', border: '1px solid gray',borderRadius:"5px", fontSize:"16px"  }} required />
                                    {errorMessages.nokNameError ? <p style={{ color: 'red', fontSize: '14px' }}>{errorMessages.nokNameError}</p> : ""}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                        <label style={{marginBottom:"-20px"}} for="website">Phone Number*</label><br />
                                        <PhoneInput
                                            className='PhoneInput'
                                            //placeholder="Enter phone number"
                                            value={contacts.nokPhone}
                                            country={'ss'}
                                            onChange={handleNokPhoneChange}
                                            inputStyle={{
                                                height: "45px",
                                                width:"100%",
                                                border:"1px solid black",
                                            }}
                                            inputProps={{
                                                name: "phone",
                                              }}
                                        />
                                      {errorMessages.nokPhoneError ? <p style={{ color: 'red', fontSize: '14px', marginBottom:"-15px", marginTop:"5px" }}>{errorMessages.nokPhoneError}</p> : ""}
                                </div>
                            </div>
                        </form>

                        <div style={{ display: 'flex', flexDirection: 'row', marginTop:"140px", justifyContent: 'space-around', width: '80%' }}>
                            <p onClick={changeStyle} style={style}>Personal Information</p>
                            <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Contact</p>
                            <p onClick={changeStyle1} style={style1}>Profession</p>
                            <p onClick={changeStyle2} style={style2}>Security</p>
                            <p onClick={changeStyle3} style={style3}>Preview</p>
                        </div>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default ContactInfo