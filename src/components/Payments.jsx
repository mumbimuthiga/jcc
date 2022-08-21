import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';

const theme = createTheme();

const Payment = () => {
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
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >

                        <form style={{ width: '70%', marginTop: '-120px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px' }} >Payments</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', textTransform: 'capitalize' }}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, }}
                                //onClick={() => navigate('/building_desc')}
                                >
                                    Pay
                                </Button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                        <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '35px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                            {/* <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Personal Information</h4> */}
                                        </div>

                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                    </div>
                                </div>

                                {/*<div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px', }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                        <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '35px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                           
                                        </div>

                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <label for="certificate">Card Type*:</label><br />
                                    <select id="permit_type" name="permit_type" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', backgroundColor: 'white' }} required>
                                        <option value="volvo">Visa</option>
                                        <option value="saab">Mastercard</option>
                                        <option value="fiat">American Express</option>
                                        <option value="audi">Glopay</option>
                                    </select>


                                    <label for="account" style={{ marginTop: '30px' }}>Account *</label><br />
                                    <input placeholder='Account' type="text" id="id" name="id" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />


                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' , marginTop:'-30px'}}>
                                    <label for="account" style={{ marginTop: '30px' }}>Password *</label><br />
                                    <input placeholder='Password' type="text" id="id" name="id" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />
                                </div>

                            </div>
                        </form>
                    </Box>

                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default Payment