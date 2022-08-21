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

const SiteLocation = () => {
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
                            // mb: 8,
                            // mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <form style={{ width: '70%', }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px' }} >Location Site</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    onClick={() => navigate('/inspection_accessibility_to_service')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="block_no">Block No</label><br />
                                    <input placeholder='Block Number' type="text" id="block_no" name="block_no" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray,', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="state">State </label><br />
                                    <input placeholder='State' type="text" id="state" name="state" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="county">County</label><br />
                                    <input placeholder='County' type="text" id="county" name="county" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="block">Block </label><br />
                                    <input placeholder='Block' type="text" id="block" name="block" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="area">Area</label><br />
                                    <input placeholder='Area' type="text" id="area" name="area" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="residential_area">Residential Area</label><br />
                                    <input placeholder='Residential Area' type="text" id="residential_area" name="residential_area" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginBottom:'50px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="land_mark">Land Mark</label><br />
                                    <input placeholder='Land Mark' type="text" id="land_mark" name="land_mark" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="plot_no">Plot Number</label><br />
                                    <input placeholder='Plot Number' type="text" id="plot_no" name="plot_no" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', fontStyle: 'italic', paddingLeft: '20px' }} required />
                                </div>

                            </div>


                        </form>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default SiteLocation