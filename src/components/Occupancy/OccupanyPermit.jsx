import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import TextField from '@mui/material/TextField';

const theme = createTheme();

const OccupancyPermit = () => {
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

                        <form style={{ width: '80%', marginTop:'20px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px' }} >Occupancy Permit</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px' }}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, }}
                                    onClick={() => navigate('/occupancy_documents')}
                                >
                                    Next
                                </Button>


                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row',}}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '30px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                        <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '30px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                            {/* <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Personal Information</h4> */}
                                        </div>

                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '30px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px', }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '30px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                        <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '30px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                           
                                        </div>

                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '30px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%',marginBottom:'45px', marginTop:'20px', justifyContent:'space-between' }}>
                                    <label for="block_no" style={{marginTop:'5px', marginLeft:'0px', whiteSpace:'nowrap',textAlign:'center'}}>Selected Company:</label><br />
                                    <select id="permit_type" name="permit_type" style={{ height: '40px', border: '1px solid gray', backgroundColor: 'white', width: '66%', paddingLeft: '10px', alignSelf:'center' }} required>
                                        <option value="saab">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>

                                <div style={{ height:'40px', width:'50%', border:'1px solid red', display:'flex', alignItems: 'center', justifyContent:'center', alignSelf:'flex-end'}}>
                                    <p style={{textAlign:'center'}}>Add Bussiness Account</p>
                                </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px', marginBottom:'50px' }}>
                                    <p style={{ marginTop:'0px'}}>Plot Number:</p>
                                    <p style={{ marginTop:'20px'}}>Street/Road:</p>
                                    <p style={{ marginTop:'20px'}}>Building Permit No:</p>
                                    <p style={{ marginTop:'20px'}}>Block No:</p>
                                    <p style={{ marginTop:'20px'}}>Building Classification:</p>
                                    <p style={{ marginTop:'20px'}}>Building Name:</p>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                    <p style={{ marginTop:'20px'}}>Reason for partial/temporary Occupancy:</p>
                                    <TextField
                                        style={{ marginTop: '10px',marginBottom:'20px', width: '100%', border: '1px solid gray', }}
                                        id="outlined-multiline-static"
                                        // label="Multiline"
                                        multiline
                                        rows={4}
                                        placeholder="Reason for temporary occupancy"
                                    />
                                    </div>
                                </div>

                            </div>


                        </form>
                    </Box>

                    {/* <Footer /> */}
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default OccupancyPermit