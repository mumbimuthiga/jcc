import * as React from 'react';
//import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';

const theme = createTheme();

const LinkCard = () => {


    //const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Navbar loggedIn={true} />
                <CssBaseline />
                <Grid item xs={12} sm={8} md={12} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            mb: 10,
                            // mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <p style={{ marginBottom: '10px', fontSize: '20px', fontWeight: '500', marginTop: '40px' }}>Link a Card</p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F8F8', height: '70px', width: '90px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '5px', }}>
                                <AddCardOutlinedIcon style={{ fontSize: '36px', }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', width: '35%' }}>
                            <label for="reg_no" style={{ marginTop: '30px' }}>Credit Card Number*</label><br />
                            <input placeholder='Credit Card Number' type="text" id="reg_no" name="reg_no" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />

                            <label for="reg_no" style={{ marginTop: '30px' }}>Card Type*</label><br />
                            <select id="business_type" name="business_type" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', }} required>
                                <option value="volvo">Glopay</option>
                                <option value="saab">Visa</option>
                                <option value="fiat">Mastercard</option>
                                <option value="audi">American Express</option>
                            </select>

                            <label for="reg_no" style={{ marginTop: '30px' }}>Expiration Date*</label><br />
                            <input placeholder='Expiration Date' type="text" id="reg_no" name="reg_no" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />

                            <label for="reg_no" style={{ marginTop: '30px'}}>Security Code*</label><br />
                            <div style={{ display:'flex', flexDirection:'row', justifyContent:'center' }}>
                                <input placeholder='Security Code' type="text" id="reg_no" name="reg_no" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />
                                <AddCardOutlinedIcon style={{ fontSize: '26px', marginLeft:'30px', marginRight:'0px' ,marginTop: '-5px',}} />
                            </div>


                            <Button
                                type="submit"
                                style={{ backgroundColor: '#E4A51C', marginTop:'50px', textTransform: 'capitalize', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', width: '40%', alignSelf: 'center', height: '40px' }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                            //onClick={() => navigate('/business_address')}
                            >
                                Link A Card
                            </Button>
                        </div>


                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider >
    );
}

export default LinkCard