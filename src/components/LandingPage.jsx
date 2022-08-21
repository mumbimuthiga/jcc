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
import ScrollAnimation from 'react-animate-on-scroll';

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


const LandingPage = () => {

    const serviceScrollRef = React.useRef(null)
    const aboutUsScrollRef = React.useRef(null)
    const conditionsScrollRef = React.useRef(null)
    const navigate = useNavigate();
    const [hover1, setHover1] = React.useState(false);
    const [hover2, setHover2] = React.useState(false);
    const [hover3, setHover3] = React.useState(false);

    const scrollToServices = () => serviceScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const scrollToAboutUs = () => aboutUsScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const scrollToConditions = () => conditionsScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })


    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <div style={{ backgroundImage: "url(http://localhost:3000/Juba1.png)", backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', height: '62vh', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '-10px', position: 'relative' }}>
                    <div style={{ position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <img alt="logo" src={require('../assets/logo.png')} style={{ width: '60px', height: '60px', marginLeft: '50px', marginBottom: '20px', marginTop: '20px' }} />
                        <p onClick={scrollToServices} style={{ paddingLeft: '50px', color: 'white', cursor: 'pointer' }}>Services</p>
                        <p onClick={scrollToAboutUs} style={{ paddingLeft: '50px', whiteSpace: 'nowrap', color: 'white', cursor: 'pointer' }}>About us</p>
                        <p onClick={scrollToConditions} style={{ paddingLeft: '50px', color: 'white', cursor: 'pointer' }}>Conditions</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', position: 'absolute', right: 70, top: 35 }} >
                        <Button
                            type="submit"
                            style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', marginLeft: '35px', height: '35px', }}
                            fullWidth
                            variant="contained"
                            //sx={{ mt: 3, mb: 2, p: 1.4 }}
                            onClick={() => navigate('/signin')}
                        >
                            L<p style={{ textTransform: 'lowercase' }}>ogin</p>
                        </Button>
                        <Button
                            type="submit"
                            style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', marginLeft: '35px', height: '35px', color: 'black' }}
                            fullWidth
                            variant="contained"
                            //sx={{ mt: 3, mb: 2, p: 1.4 }}
                            onClick={() => navigate('/applicant_info')}
                        >
                            R<p style={{ textTransform: 'lowercase' }}>egister</p>
                        </Button>
                    </div>
                </div>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={12} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            mb: 6,
                            mt: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >


                        <div style={{ display: 'flex', marginTop: '-180px', marginBottom: '20px' }}>

                            <div onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} style={hover1 ? styles.card_hover : styles.card}>
                                {hover1 ? (
                                    <>
                                        <div>
                                            <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '-80px' }}>
                                                <img style={{ height: '100px', width: '100px', borderRadius: '50%', marginLeft: '75px' }} src={require('../assets/Juba.jpeg')} alt="contractor certificate" />
                                            </Animated>
                                            <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ marginTop: '-20px' }}>
                                                <h4 style={{ color: '#E4AFAF', textDecoration: 'underline', whiteSpace: 'nowrap', textAlign: 'center' }}>Contractor Certificate</h4>
                                            </Animated>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                                                <Animated animationIn="fadeIn" animationInDelay={200} animationOut="fadeOut">
                                                    <img style={{ height: '140px', width: '80%', marginLeft: '24px', marginBottom: '10px' }} src={require('../assets/Juba3.jpeg')} alt="contractor certificate" />
                                                </Animated>

                                                <Animated animationIn="fadeIn" animationInDelay={100} animationOut="fadeOut">
                                                    <Button
                                                        type="submit"
                                                        style={{ backgroundColor: '#976012', color: 'white', width: '90px', height: '22px', }}
                                                        variant="contained"
                                                        onClick={() => navigate('/business_info')}
                                                    >
                                                        A<p style={{ textTransform: 'lowercase' }}>pply</p>
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
                                                <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '-100px' }}>
                                                    <img style={{ height: '100px', width: '100px', marginBottom: '10px', borderRadius: '50%', marginLeft: '10px' }} src={require('../assets/Juba2.jpeg')} alt="contractor certificate" />
                                                </Animated>
                                                <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ marginTop: '-20px' }}>
                                                    <h4 style={{ color: '#E4AFAF', textDecoration: 'underline', whiteSpace: 'nowrap', textAlign: 'center' }}>Building Permit</h4>
                                                </Animated>

                                                <div >
                                                    <Animated animationIn="fadeIn" animationInDelay={100} animationOut="fadeOut">
                                                        <ul style={{ color: 'white', fontSize: '13px', cursor: 'pointer', }}>
                                                            <li onClick={() => navigate('/applicant_info')} style={{ marginLeft: '-70px' }}>Application permit</li>
                                                            <li onClick={() => navigate('/start_to_build_permit')} style={{ marginLeft: '-70px' }}>Start to build Form</li>
                                                            <li onClick={() => navigate('/inspection_form')} style={{ marginLeft: '-70px' }}>Inspection  Form</li>
                                                            <li style={{ marginLeft: '-70px' }}>Stage approval Form</li>
                                                            <li style={{ marginLeft: '-70px' }}>Completion Form</li>
                                                            <li onClick={() => navigate('/occupancy_permit')} style={{ marginLeft: '-70px' }}>Occupancy Form</li>
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
                                            <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '-160px' }}>
                                                <img style={{ height: '100px', width: '100px', marginBottom: '10px', borderRadius: '50%', marginLeft: '50px' }} src={require('../assets/Juba1.jpg')} alt="contractor certificate" />
                                            </Animated>
                                            <Animated animationIn="fadeInUp" animationOut="fadeOut" style={{ marginTop: '-20px' }}>
                                                <h4 style={{ color: '#E4AFAF', textDecoration: 'underline', whiteSpace: 'nowrap', textAlign: 'center' }}>Check Application Status</h4>
                                            </Animated>

                                            <div >
                                                <Animated animationIn="fadeIn" animationInDelay={100} animationOut="fadeOut">
                                                    <ul style={{ color: 'white', fontSize: '13px', cursor: 'pointer', marginTop: '40px' }}>
                                                        <li onClick={() => navigate('/pending_applications')} style={{ marginLeft: '-35px' }}>Pending</li>
                                                        <li onClick={() => navigate('/approved_applications')} style={{ marginLeft: '-35px' }}>Approved</li>
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
            <div style={{ display: 'flex', ailgnItems: 'center', flexDirection: 'column', marginBottom: '70px' }}>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                    <h2 ref={serviceScrollRef} style={{ textAlign: 'center', marginBottom: '40px', marginTop: '50px' }}>SERVICES</h2>
                </ScrollAnimation>
                <div style={{ display: 'flex', ailgnItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <ul style={{ marginRight: '30px', marginLeft: '30px' }}>
                                <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Service 1</li>
                                <p style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                                </p>
                                <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Service 2</li>
                                <p style={{ fontSize: '14px' }}> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Service 3</li>
                                <p style={{ fontSize: '14px' }}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                            </ul>
                        </ScrollAnimation>
                    </div>

                    <div>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <img style={{ height: '500px', width: '360px', marginBottom: '10px', borderRadius: '50%', marginLeft: '20px', marginTop: '50px' }} src={require('../assets/Juba3.jpeg')} alt="contractor certificate" />
                        </ScrollAnimation>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <ul style={{ marginRight: '50px', marginLeft: '20px' }}>
                                <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Service 4</li>
                                <p style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Service 5</li>
                                <p style={{ fontSize: '14px' }}> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Service 6</li>
                                <p style={{ fontSize: '14px' }}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            </ul>
                        </ScrollAnimation>
                    </div>

                </div>
            </div>

            <div style={{ display: 'flex', ailgnItems: 'center', flexDirection: 'column', marginBottom: '70px', marginTop: '20px' }}>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                    <h2 ref={aboutUsScrollRef} style={{ textAlign: 'center', marginBottom: '40px', marginTop: '50px' }}>ABOUT US</h2>
                </ScrollAnimation>

                <div style={{ display: 'flex', ailgnItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <div>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <img style={{ height: '380px', width: '460px', marginBottom: '10px', borderRadius: '10px', marginLeft: '50px' }} src={require('../assets/Juba2.jpeg')} alt="contractor certificate" />
                        </ScrollAnimation>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <p style={{ fontSize: '16px', marginLeft: '70px', marginRight: '0px', marginTop: '-50px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        </ScrollAnimation>
                    </div>

                </div>
            </div>

            <div style={{ display: 'flex', ailgnItems: 'center', flexDirection: 'column', marginBottom: '70px', marginTop: '20px' }}>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                    <h2 ref={conditionsScrollRef} style={{ textAlign: 'center', marginBottom: '40px', marginTop: '50px' }}>CONDITIONS</h2>
                </ScrollAnimation>

                <div style={{ display: 'flex', ailgnItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <div style={{ width: '100%', marginLeft: '50px', marginRight: '50px' }} >
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Condition 1</li>
                            <p style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </ScrollAnimation>
                    </div>
                    <div style={{ width: '100%', marginLeft: '0px', marginRight: '50px' }}>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Condition 2</li>
                            <p style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </ScrollAnimation>
                    </div>

                    <div style={{ width: '100%', marginLeft: '0px', marginRight: '50px' }}>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Condition 3</li>
                            <p style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </ScrollAnimation>
                    </div>

                </div>

                <div style={{ display: 'flex', ailgnItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '60px', marginBottom:'60px' }}>

                    <div style={{ width: '100%', marginLeft: '50px', marginRight: '50px', }} >
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Condition 4</li>
                            <p style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </ScrollAnimation>
                    </div>
                    <div style={{ width: '100%', marginLeft: '0px', marginRight: '50px' }}>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Condition 5</li>
                            <p style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </ScrollAnimation>
                    </div>

                    <div style={{ width: '100%', marginLeft: '0px', marginRight: '50px' }}>
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '0px' }}>
                            <li style={{ fontWeight: 'bold', fontSize: '16px' }}>Condition 6</li>
                            <p style={{ fontSize: '14px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </ScrollAnimation>
                    </div>

                </div>
            </div>
        </ThemeProvider>
    );
}

export default LandingPage