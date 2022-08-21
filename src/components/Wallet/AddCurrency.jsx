import * as React from 'react';
//import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Checkbox from '@mui/material/Checkbox';


const theme = createTheme();

const AddCurrency = () => {

    const [checked, setChecked] = React.useState(false);
    

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '35%' }}>
                            <p style={{ marginBottom: '10px', fontSize: '20px', fontWeight: '500', marginTop: '40px' }}>Add Currency</p>
                            <p style={{ fontSize: '14px',marginBottom:'40px' }}> When you add a currency any payments you receive in that currency will be credited to that balance. We'll use your primary currency when you send or request payments</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '.5px solid gray', width: '35%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', }}>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', alignItems: 'center' }}>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />

                                    <img src={require('../../assets/South Sudan.png')} alt="SSP" style={{ height: '50px', width: '50px', marginLeft: '20px', marginRight: '50px' }} />
                                    <p>South Sudan Pound</p>

                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', alignItems: 'center' }}>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />

                                    <img src={require('../../assets/USA.png')} alt="SSP" style={{ height: '50px', width: '50px', marginLeft: '20px', marginRight: '50px' }} />
                                    <p>US Dollars</p>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', alignItems: 'center' }}>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />

                                    <img src={require('../../assets/Kenya.png')} alt="SSP" style={{ height: '50px', width: '50px', marginLeft: '20px', marginRight: '50px' }} />
                                    <p>Kenyan Shilling</p>

                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', alignItems: 'center' }}>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />

                                    <img src={require('../../assets/DRC.png')} alt="SSP" style={{ height: '50px', width: '50px', marginLeft: '20px', marginRight: '50px' }} />
                                    <p>Congolese Franc</p>

                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', alignItems: 'center' }}>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />

                                    <img src={require('../../assets/UG.png')} alt="SSP" style={{ height: '50px', width: '50px', marginLeft: '20px', marginRight: '50px' }} />
                                    <p>Ugandan Shilling</p>

                                </div>
                            </div>


                            <Button
                                type="submit"
                                style={{ backgroundColor: '#E4A51C', marginTop: '50px', textTransform: 'capitalize', fontWeight: 'bold', paddingLeft: '50px', paddingRight: '50px', width: '36%', alignSelf: 'center', height: '35px', whiteSpace:'nowrap' }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                            //onClick={() => navigate('/business_address')}
                            >
                                Add Currency
                            </Button>
                        </div>


                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider >
    );
}

export default AddCurrency