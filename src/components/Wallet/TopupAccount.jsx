import * as React from 'react';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const theme = createTheme();

const TopupAccount = () => {

    const navigate = useNavigate();

    const [value, setValue] = React.useState('direct_transfer');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log("Value", value)
    };


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
                            <p style={{ marginBottom: '10px', fontSize: '20px', fontWeight: '500', marginTop: '40px' }}> Topup Account</p>

                        </div>

                        <FormControl style={{ marginTop: '40px', marginBottom: '10px' }}>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                                <div style={{ display: 'flex', flexDirection: 'row', }}>
                                    <FormControlLabel style={{ marginRight: '50px' }} value="direct_transfer" control={<Radio />} label="Direct Transfer" />
                                    <FormControlLabel value="glopay" control={<Radio />} label="Glopay" />
                                </div>

                            </RadioGroup>
                        </FormControl>


                        <div style={{ display: 'flex', flexDirection: 'column', width: '35%' }}>
                            {value === 'direct_transfer' ?
                                (
                                    <>
                                        <label htmlFor="reg_no" style={{ marginTop: '30px' }}>Account Type*</label><br />
                                        <select id="business_type" name="business_type" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', }} required>
                                            <option value="Glopay">Glopay</option>
                                            <option value="Visa">Visa</option>
                                            <option value="Mastercard">Mastercard</option>
                                            <option value="American Express">American Express</option>
                                        </select>

                                        <label for="reg_no" style={{ marginTop: '30px' }}>Routing Number*</label><br />
                                        <input placeholder='Routing Number' type="text" id="reg_no" name="reg_no" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />

                                        <label for="reg_no" style={{ marginTop: '30px' }}>Account Number*</label><br />
                                        <input placeholder='Account Number' type="text" id="reg_no" name="reg_no" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />

                                        <label for="reg_no" style={{ marginTop: '30px' }}>Amount</label><br />
                                        <input placeholder='Amount' type="text" id="reg_no" name="reg_no" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />


                                        <Button
                                            type="submit"
                                            style={{ backgroundColor: '#E4A51C', marginTop: '50px', textTransform: 'capitalize', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', width: '40%', alignSelf: 'center', height: '40px' }}
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, }}
                                        //onClick={() => navigate('/business_address')}
                                        >
                                            Send Request
                                        </Button>
                                    </>) : (
                                    <>
                                        <label for="reg_no" style={{ marginTop: '30px' }}>Account Number*</label><br />
                                        <input placeholder='Account Number' type="text" id="reg_no" name="reg_no" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />


                                        <label htmlFor="reg_no" style={{ marginTop: '30px' }}>Select Currency*</label><br />
                                        <select id="business_type" name="business_type" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', }} required>
                                            <option value="SSP">SSP</option>
                                            <option value="USSD">USD</option>
                                            <option value="KSH">KSH</option>
                                            <option value="USH">USH</option>
                                            <option value="FC">FC</option>
                                        </select>

                                        <label for="reg_no" style={{ marginTop: '30px' }}>Amount</label><br />
                                        <input placeholder='Amount' type="text" id="reg_no" name="reg_no" style={{ marginTop: '-15px', height: '45px', width: '100%', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} required />


                                        <Button
                                            type="submit"
                                            style={{ backgroundColor: '#E4A51C', marginTop: '50px', textTransform: 'capitalize', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', width: '40%', alignSelf: 'center', height: '40px' }}
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, }}
                                        //onClick={() => navigate('/business_address')}
                                        >
                                            Send Request
                                        </Button>
                                    </>
                                )}
                        </div>


                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider >
    );
}

export default TopupAccount