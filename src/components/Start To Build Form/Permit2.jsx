import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';

const theme = createTheme();

const Permit2 = () => {
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

                        <form style={{ width: '70%' , marginTop:'-180px'}} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px' }} >Start To Buiild Permit</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    onClick={() => navigate('/start_to_build_permit_page3')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="block">Block </label><br />
                                    <input placeholder='Block' type="text" id="block" name="block" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray,', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="no_of_storey">Number of Storey </label><br />
                                    <input placeholder='Number of Storey' type="text" id="no_of_storey" name="no_of_storey" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '44.5%' }}>
                                    <label for="dimension">Dimesnion</label><br />
                                    <input placeholder='Dimension' type="text" id="dimension" name="dimension" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray,', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>

                                
                            </div>


                        </form>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default Permit2