import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';

const theme = createTheme();

const ApplicationPermitPreview = () => {

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Navbar />
                <CssBaseline />
                <Grid item xs={12} sm={8} md={12} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            // my: 8,
                            // mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >


                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Applicant Information</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Registry Number</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Agwera </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Name</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Identification Number</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Kenya </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Legal status of the application</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Nairobi</p>
                                </div> */}
                            </div>

                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Building Description</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Building Name</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Agwera </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Building Category</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>

                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Location Site</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Address</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Agwera </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Land Mark</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Block Number</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Plot Number</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>

                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Profession</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Access road</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Agwera </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Water Supply</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Sewer COnnection</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Electricity Supply</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Internet Supply</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Other</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>

                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Professionals Engaged</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Architect</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Agwera </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Structure Engineer</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Quality Surveyor</p>
                                </div>

                                {/* <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div> */}
                            </div>

                        </div>
                        
                        <div style={{ marginTop: '50px', marginBottom: '50px', display: 'flex', alignSelf: 'flex-end', marginRight: '150px' }} >
                            <Button
                                type="submit"
                                style={{ backgroundColor: 'white', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', color: 'black' }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                                onClick={() => navigate('/personal_info')}
                            >
                                Back
                            </Button>

                            <Button
                                type="submit"
                                style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', marginLeft: '30px' }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                                onClick={() => navigate('/welcome_page')}
                            >
                                Save
                            </Button>

                        </div>
                    </Box>

                    {/* <Footer /> */}
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default ApplicationPermitPreview