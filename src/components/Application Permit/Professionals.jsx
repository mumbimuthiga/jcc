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

const Professionals = () => {
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

                        <form style={{ width: '70%', marginTop: '-200px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px', textAlign: 'center' }} >Accessibility To Service</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    onClick={() => navigate('/additional_info')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Architect</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginLeft: '200px', }}>
                                    <div style={{ marginLeft: '-150px', marginRight: '20px' }}>
                                        <Switch {...label} />
                                    </div>

                                    <select id="permit_type" name="permit_type" style={{ height: '40px', border: '1px solid gray', backgroundColor: 'white', width: '100%', marginLeft: '20px' }} required>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Structure Engineer</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginLeft: '200px', }}>
                                    <div style={{ marginLeft: '-150px', marginRight: '20px' }}>
                                        <Switch {...label} />
                                    </div>

                                    <select id="permit_type" name="permit_type" style={{ height: '40px', border: '1px solid gray', backgroundColor: 'white', width: '100%', marginLeft: '20px' }} required>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Quality Surveyor</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginLeft: '200px', }}>
                                    <div style={{ marginLeft: '-150px', marginRight: '20px' }}>
                                        <Switch {...label} />
                                    </div>

                                    <select id="permit_type" name="permit_type" style={{ height: '40px', border: '1px solid gray', backgroundColor: 'white', width: '100%', marginLeft: '20px' }} required>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default Professionals