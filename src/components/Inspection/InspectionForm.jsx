import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const theme = createTheme();

const InspectionForm = () => {
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
                                <p style={{ fontSize: '18px' }} >Inspection Form</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px' }}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, }}
                                    onClick={() => navigate('/inspection_building_description')}
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

                                    <div style={{ backgroundColor: '#BBBBBB', height:'240px', marginBottom:'20px', width:'60%'}}>

                                    </div>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        // defaultValue="female"
                                        name="radio-buttons-group"
                                        style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between', width:'60%', marginBottom: '20px' }}
                                    >
                                        <FormControlLabel value="individual" control={<Radio />} label="Individual" />
                                        <FormControlLabel value="business" control={<Radio />} label="Business" />
                                    </RadioGroup>

                                    <div>
                                        <input placeholder='Surname' type="text" id="surname" name="surname" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray',width:'60%' , paddingLeft: '15px', fontStyle:'italic' }} required />
                                    </div>
                                    
                                    
                                    <div style={{ marginTop: '10px', marginBottom: '50px', display: 'flex', alignSelf: 'flex-start', marginRight: '150px' }} >
                                        <Button
                                            type="submit"
                                            style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px',  }}
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, }}
                                            onClick={() => navigate('/welcome_page')}
                                        >
                                            Search
                                        </Button>

                                        <Button
                                            type="submit"
                                            style={{ backgroundColor: 'white', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', color: 'black', marginLeft: '30px', border:'1px solid black',  }}
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, }}
                                            onClick={() => navigate('/personal_info')}
                                        >
                                            New
                                        </Button>

                                    </div>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%',marginBottom:'45px', marginTop:'20px', justifyContent:'space-between' }}>
                                        <label for="block_no" style={{marginRight:'0px', marginLeft:'5px', whiteSpace:'nowrap',textAlign:'center'}}>Plot No:</label><br />
                                        <input placeholder='Plot Number' type="text" id="block_no" name="block_no" style={{ marginTop: '-15px', height: '45px', width:'70%', border: '1px solid gray,', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%',marginBottom:'45px', justifyContent:'space-between' }}>
                                        <label for="block_no" style={{marginRight:'0px', marginLeft:'5px', whiteSpace:'nowrap',textAlign:'center'}}>Block:</label><br />
                                        <input placeholder='Block' type="text" id="block_no" name="block_no" style={{ marginTop: '-15px', height: '45px', width:'70%', border: '1px solid gray,', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%',marginBottom:'45px', justifyContent:'space-between' }}>
                                        <label for="block_no" style={{marginRight:'0px', marginLeft:'5px', whiteSpace:'nowrap',textAlign:'center'}}>Location</label><br />
                                        <input placeholder='Location' type="text" id="block_no" name="block_no" style={{ marginTop: '-15px', height: '45px', width:'70%', border: '1px solid gray,', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%',marginBottom:'45px', justifyContent:'space-between' }}>
                                        <label for="block_no" style={{marginRight:'0px', marginLeft:'5px', whiteSpace:'nowrap',textAlign:'center'}}>City Block</label><br />
                                        <input placeholder='City Block' type="text" id="block_no" name="block_no" style={{ marginTop: '-15px', height: '45px', width:'70%', border: '1px solid gray,', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%',marginBottom:'45px', justifyContent:'space-between' }}>
                                        <label for="block_no" style={{marginRight:'0px', marginLeft:'5px', whiteSpace:'nowrap',textAlign:'center'}}>Permit No</label><br />
                                        <input placeholder='Permit Number' type="text" id="block_no" name="block_no" style={{ marginTop: '-15px', height: '45px', width:'70%', border: '1px solid gray,', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%',marginBottom:'45px', justifyContent:'space-between' }}>
                                        <label for="block_no" style={{marginRight:'0px', marginLeft:'5px', whiteSpace:'nowrap',textAlign:'center'}}>Type of Permit</label><br />
                                        <input placeholder='Type of Permit' type="text" id="block_no" name="block_no" style={{ marginTop: '-15px', height: '45px', width:'70%', border: '1px solid gray,', fontStyle: 'italic', paddingLeft: '20px' }} required />
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

export default InspectionForm