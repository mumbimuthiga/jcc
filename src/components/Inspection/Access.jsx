import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Switch from '@mui/material/Switch';

const theme = createTheme();

const Access = () => {
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
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

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

                        <form style={{ width: '70%', marginTop:'-20px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px' }} >Accessibility To Service</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    onClick={() => navigate('/inspection_accessibility_to_service_page2')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Access Road</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Water Supply</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Sewer Connection</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Electricity Supply</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Internet Supply</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Other</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                        </form>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default Access