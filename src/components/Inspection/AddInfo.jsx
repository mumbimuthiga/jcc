import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const theme = createTheme();

const AddInfo = () => {
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

                        <form style={{ width: '70%', marginTop: '30px', marginBottom:'100px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px', textAlign: 'center', marginBottom:'50px' }} >Additional Information</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    onClick={() => navigate('/inspection_additional_info_page2')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', }}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>
                                        1. Is the plot affected by any reservations or road lines
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        // defaultValue="female"
                                        name="radio-buttons-group"
                                        style={{ display: 'flex', flexDirection: 'row', marginLeft: '30px', marginTop: '20px', marginBottom: '10px' }}
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>

                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>
                                        2. If so, are these correctly and clearly marked on the block plan
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        // defaultValue="female"
                                        name="radio-buttons-group"
                                        style={{ display: 'flex', flexDirection: 'row', marginLeft: '30px', marginTop: '20px', marginBottom: '10px' }}
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>

                                <div>
                                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>3. What is the actual area available on site(m2)</p>
                                    <input type="text" id="area" name="area" style={{ marginTop: '10px',marginBottom:'20px', height: '45px', width: '80%', border: '1px solid gray', marginLeft: '15px' }} required />
                                </div>

                                <div>
                                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>4. If there is any deduction in the original area of the plot on account of road lines or reservation<br />  (Please state the total area of the deductions in m2)</p>
                                    <input type="text" id="area" name="area" style={{ marginTop: '10px',marginBottom:'20px', height: '45px', width: '80%', border: '1px solid gray', marginLeft: '15px' }} required />
                                </div>

                                <div>
                                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>5. If the work is in connection with an industry <br />      Briefly describe the main and ancilliary processes:</p>
                                    <TextField
                                        style={{ marginTop: '10px',marginBottom:'20px', width: '80%', border: '1px solid gray', marginLeft: '15px' }}
                                        id="outlined-multiline-static"
                                        // label="Multiline"
                                        multiline
                                        rows={4}
                                        placeholder="Type here..."
                                    />
                                </div>

                                <div>
                                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>6. State the nature(degree of toxicity) and quantity of industrial waste/effluents and methods of disposal</p>
                                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginTop: '10px',marginBottom:'40px',}}>
                                        <label for="nature" style={{ alignSelf:'center',marginLeft:'20px' }}>Nature </label>
                                        <input type="text" id="nature" name="nature" placeholder='Degree of toxicity' style={{ marginTop: '5px', height: '45px', width: '30%', border: '1px solid gray', marginLeft: '15px', fontStyle:'italic', paddingLeft:'20px' }} required />
                                        <br/>
                                        <label for="nature" style={{ textAlign:'center', marginLeft:'40px' }}>Quantity </label>
                                        <input type="text" id="nature" name="nature" placeholder='Quantity ofindustrial waste' style={{ marginTop: '5px', height: '45px', width: '30%', border: '1px solid gray', marginLeft: '15px', fontStyle:'italic', paddingLeft:'20px' }} required />
                                        
                                    </div>
                                    
                                </div>

                                <div>
                                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>7. If the plot abuts two or more streets, information for all streets should be given:</p>
                                    <TextField
                                    style={{ marginTop: '10px',marginBottom:'30px', width: '80%', border: '1px solid gray', marginLeft: '15px' }}
                                    id="outlined-multiline-static"
                                    // label="Multiline"
                                    multiline
                                    rows={4}
                                    placeholder="Type here..."
                                    />
                                </div>

                                <div>
                                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>8. How many parking spaces are proposed?</p>
                                    <input type="text" id="area" name="area" style={{ marginTop: '10px',marginBottom:'30px', height: '45px', width: '80%', border: '1px solid gray', marginLeft: '15px' }} required />
                                </div>

                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>
                                        9. Does any natural water source pass through the land under development
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        // defaultValue="female"
                                        name="radio-buttons-group"
                                        style={{ display: 'flex', flexDirection: 'row', marginLeft: '30px', marginTop: '20px', marginBottom: '10px' }}
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>

                                <FormControl style={{marginTop: '10px',marginBottom:'30px',}}>
                                    <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black', fontWeight: 'bold', fontSize: '14px',marginTop: '10px',marginBottom:'0px', }}>
                                        10. Is the plinth level proposed to be the level of the surrounding ground level
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        // defaultValue="female"
                                        name="radio-buttons-group"
                                        style={{ display: 'flex', flexDirection: 'row', marginLeft: '30px', marginTop: '20px', marginBottom: '10px' }}
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                        </form>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default AddInfo