import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
//import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Animated } from "react-animated-css";
import Navbar from './Navbar'

const theme = createTheme();

const styles = {
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20vw',
        height: '45vh',
        backgroundColor: '#072033',
        boxShadow: '1px 20px 21px 7px rgba(18, 18, 18, 0.25)',
        transition: 'transform .8s',
        position: 'relative'
    },
    card_margin: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20vw',
        height: '45vh',
        backgroundColor: '#072033',
        boxShadow: '1px 20px 21px 7px rgba(18, 18, 18, 0.25)',
        transition: 'transform .8s',
        position: 'relative',
        marginLeft: '100px'
    },
    card_hover: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20vw',
        height: '45vh',
        transform: 'scale(1.15)',
        backgroundColor: 'rgba(7, 32, 51, 0.81)',
        boxShadow: '-7px 20px 21px 7px rgba(18, 18, 18, 0.25)',
        borderRadius: '10px',
        transition: 'transform 2s',
        position: 'relative'
    },
    card_hover_margin: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20vw',
        height: '45vh',
        transform: 'scale(1.15)',
        backgroundColor: 'rgba(7, 32, 51, 0.81)',
        boxShadow: '-7px 20px 21px 7px rgba(18, 18, 18, 0.25)',
        borderRadius: '10px',
        transition: 'transform 2s',
        position: 'relative',
        marginLeft: '100px'
    }

}


const Homepage = () => {

    const navigate = useNavigate();
    const [hover1, setHover1] = React.useState(false);
    const [hover2, setHover2] = React.useState(false);
    const [hover3, setHover3] = React.useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
              <Navbar loggedIn={true}/>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={12} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            mb: 6,
                            mt: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ height: '23vh', width: '18vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                        <h4 style={{ marginTop: '25px' }}>Business Accounts</h4>
                                        <h3 style={{ marginTop: '-6px' }}>2</h3>
                                    </div>
                                    <div onClick={()=>navigate('/business_accounts')} style={{ borderTop: '1px solid #A7A4A4', width: '100%', marginTop: '4px' }}>
                                        <p style={{ textAlign: 'center', marginTop: '6px', cursor:'pointer' }}>View more</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '23vh', width: '18vw', marginLeft: '5vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                        <h4 style={{ marginTop: '25px' }}>Pending Permits</h4>
                                        <h3 style={{ marginTop: '-6px' }}>2</h3>
                                    </div>
                                    <div onClick={()=>navigate('/pending_applications')} style={{ borderTop: '1px solid #A7A4A4', width: '100%', marginTop: '4px' }}>
                                        <p style={{ textAlign: 'center', marginTop: '6px', cursor:'pointer' }}>View more</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '23vh', width: '18vw', marginLeft: '5vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                        <h4 style={{ marginTop: '25px' }}>Approved Permits</h4>
                                        <h3 style={{ marginTop: '-6px' }}>2</h3>
                                    </div>
                                    <div onClick={()=>navigate('/approved_applications')} style={{ borderTop: '1px solid #A7A4A4', width: '100%', marginTop: '4px' }}>
                                        <p style={{ textAlign: 'center', marginTop: '6px', cursor:'pointer' }}>View more</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '23vh', width: '18vw', marginLeft: '5vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                        <h4 style={{ marginTop: '25px' }}>Land</h4>
                                        <h3 style={{ marginTop: '-6px' }}>2</h3>
                                    </div>
                                    <div onClick={()=>navigate('/land')} style={{ borderTop: '1px solid #A7A4A4', width: '100%', marginTop: '4px' }}>
                                        <p style={{ textAlign: 'center', marginTop: '6px', cursor:'pointer' }}>View more</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div style={{ display: 'flex', marginTop: '150px', marginBottom: '50px' }}>

                            <div onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} style={hover1 ? styles.card_hover : styles.card}>
                                {hover1 ? (
                                    <>
                                        <div>
                                            <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '-75px' }}>
                                                <img style={{ height: '100px', width: '100px', marginBottom: '10px', borderRadius: '50%', marginLeft: '80px' }} src={require('../assets/Juba.jpeg')} alt="contractor certificate" />
                                            </Animated>
                                            <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ marginTop: '-20px' }}>
                                                <h4 style={{ color: '#E4AFAF', textDecoration: 'underline', whiteSpace: 'nowrap', textAlign: 'center' }}>Contractor Certificate</h4>
                                            </Animated>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                                                <Animated animationIn="fadeIn" animationInDelay={200} animationOut="fadeOut">
                                                    <img style={{ height: '140px', width: '80%', marginLeft: '24px', marginBottom: '10px' }} src={require('../assets/Juba2.jpeg')} alt="contractor certificate" />
                                                </Animated>

                                                <Animated animationIn="fadeIn" animationInDelay={100} animationOut="fadeOut">
                                                    <Button
                                                        type="submit"
                                                        style={{ backgroundColor: '#976012', color: 'white', width: '90px', height: '22px',}}
                                                        variant="contained"
                                                        onClick={() => navigate('/business_info')}
                                                    >
                                                       A<p style={{textTransform:'lowercase'}}>pply</p> 
                                                    </Button>
                                                </Animated>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <h4 style={{ color: 'white', textAlign: 'center' }}>Contractor Certificate</h4>
                                )}

                            </div>

                            <div style={{ marginTop: '20px' }}>
                                <div onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} style={hover2 ? styles.card_hover_margin : styles.card_margin}>
                                    {hover2 ? (
                                        <>
                                            <div>
                                                <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '-120px' }}>
                                                    <img style={{ height: '100px', width: '100px', marginBottom: '10px', borderRadius: '50%', marginLeft: '15px' }} src={require('../assets/Juba3.jpeg')} alt="contractor certificate" />
                                                </Animated>
                                                <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ marginTop: '-20px' }}>
                                                    <h4 style={{ color: '#E4AFAF', textDecoration: 'underline', whiteSpace: 'nowrap', textAlign: 'center' }}>Building Permit</h4>
                                                </Animated>

                                                <div >
                                                    <Animated animationIn="fadeIn" animationInDelay={100} animationOut="fadeOut">
                                                        <ul style={{ color: 'white', fontSize: '13px', cursor: 'pointer', }}>
                                                            <li onClick={()=>navigate('/applicant_info')} style={{ marginLeft: '-70px' }}>Application permit</li>
                                                            <li onClick={()=>navigate('/start_to_build_permit')} style={{ marginLeft: '-70px' }}>Start to build Form</li>
                                                            <li onClick={()=>navigate('/inspection_form')} style={{ marginLeft: '-70px' }}>Inspection  Form</li>
                                                            <li style={{ marginLeft: '-70px' }}>Stage approval Form</li>
                                                            <li style={{ marginLeft: '-70px' }}>Completion Form</li>
                                                            <li onClick={()=>navigate('/occupancy_permit')} style={{ marginLeft: '-70px' }}>Occupancy Form</li>
                                                        </ul>

                                                    </Animated>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <h4 style={{ color: 'white', textAlign: 'center' }}>Building Permit</h4>
                                    )}

                                </div>
                            </div>


                            <div onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} style={hover3 ? styles.card_hover_margin : styles.card_margin}>
                                {hover3 ? (
                                    <>
                                        <div>
                                            <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '-200px' }}>
                                                <img style={{ height: '100px', width: '100px', marginBottom: '10px', borderRadius: '50%', marginLeft: '50px' }} src={require('../assets/Juba1.jpg')} alt="contractor certificate" />
                                            </Animated>
                                            <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ marginTop: '-20px' }}>
                                                <h4 style={{ color: '#E4AFAF', textDecoration: 'underline', whiteSpace: 'nowrap', textAlign: 'center' }}>Check Application Status</h4>
                                            </Animated>

                                            <div >
                                                <Animated animationIn="fadeIn" animationInDelay={100} animationOut="fadeOut">
                                                    <ul style={{ color: 'white', fontSize: '13px', cursor: 'pointer', marginTop: '20px' }}>
                                                        <li onClick={()=>navigate('/pending_applications')}  style={{ marginLeft: '-35px' }}>Pending</li>
                                                        <li onClick={()=>navigate('/approved_applications')}style={{ marginLeft: '-35px' }}>Approved</li>

                                                    </ul>

                                                </Animated>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <h4 style={{ color: 'white', textAlign: 'center' }}>Check Application Status</h4>
                                )}

                            </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Homepage