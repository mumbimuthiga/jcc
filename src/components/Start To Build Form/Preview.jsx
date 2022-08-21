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

const STBPreview = () => {

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
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Personal Information</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Surname</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Agwera </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Personal name</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Country of origin</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Kenya </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>State</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Nairobi</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Block</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>D</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Residential area</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Along waiyaki way</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Plot Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>ABC/JOP/92</p>
                                </div>
                            </div>

                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Contact</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Surname</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Agwera </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Personal name</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Enock </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Country of origin</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Kenya </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>State</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Nairobi</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Block</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>D</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Residential area</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Along waiyaki way</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Plot Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>ABC/JOP/92</p>
                                </div>
                            </div>

                        </div>
                        <div style={{ marginTop: '50px', marginBottom: '50px', display: 'flex', alignSelf: 'flex-end', marginRight: '150px' }} >
                            <Button
                                type="submit"
                                style={{ backgroundColor: 'white', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', color: 'black' }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                                onClick={() => navigate('/start_to_build_permit_page3')}
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

export default STBPreview