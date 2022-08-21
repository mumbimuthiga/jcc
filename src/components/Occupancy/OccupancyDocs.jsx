import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import AddIcon from '@mui/icons-material/Add';

const theme = createTheme();

const OccupancyDocs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

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


                        <form style={{ width: '80%', marginTop: '40px', marginBottom: '70px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '50px' }} > Occupancy Permit </p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    onClick={() => navigate('/occupancy_dates')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Drawings for the building layout</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', width: '100%', marginLeft: '30px', }}>
                                    <div style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <p>Upload</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Electrical Drawings</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', width: '100%', marginLeft: '30px', }}>
                                    <div style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <p>Upload</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Mechanical engineering drawings</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', width: '100%', marginLeft: '30px', }}>
                                    <div style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <p>Upload</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Structural engineering drawings</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', width: '100%', marginLeft: '30px', }}>
                                    <div style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <p>Upload</p>
                                    </div>
                                </div>
                            </div>
                       
                        </form>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default OccupancyDocs