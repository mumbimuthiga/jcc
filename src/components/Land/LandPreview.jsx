import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRegisterLandMutation } from '../../redux/services/land';

const theme = createTheme();

const LandPreview = () => {

    const [registerLand] = useRegisterLandMutation()

    const navigate = useNavigate();
    const form_values = JSON.parse(localStorage.form_values)
    const supporting_docs = JSON.parse(localStorage.supporting_docs)

    const data = { ...form_values, ...supporting_docs }
    //console.log("Data", data)

    const handleSubmit = async() => {
        await registerLand(data)
    }
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


                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Land Details</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Class</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{data.class} </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Dimensions</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{data.dimensions}</p>
                                </div>
                            </div>

                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Land Location</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Owner</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{data.ownerId}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Residential area</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{data.residentialAreaId}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Plot Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{data.plotNumber}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>LandMark</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{data.landMark}</p>
                                </div>
                            </div>


                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Supporting Documents</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Land Croquis</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    {data.landCroquis ? <CheckCircleIcon style={{ color: 'green', fontSize: '28px' }} /> : <CancelIcon style={{ color: 'red', fontSize: '28px' }} />}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Application Form</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    {data.applicationForm ? <CheckCircleIcon style={{ color: 'green', fontSize: '28px' }} /> : <CancelIcon style={{ color: 'red', fontSize: '28px' }} />}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Plot Allotment Letter</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    {data.plotAllotmentLetter ? <CheckCircleIcon style={{ color: 'green', fontSize: '28px' }} /> : <CancelIcon style={{ color: 'red', fontSize: '28px' }} />}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Commitment Letter</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    {data.commitmentLetter ? <CheckCircleIcon style={{ color: 'green', fontSize: '28px' }} /> : <CancelIcon style={{ color: 'red', fontSize: '28px' }} />}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Lease Agreement</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <CancelIcon style={{ color: 'red', fontSize: '28px' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Sale Agreement</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <CancelIcon style={{ color: 'red', fontSize: '28px' }} />
                                </div>
                            </div>

                        </div>

                        <div style={{ marginTop: '50px', marginBottom: '50px', display: 'flex', alignSelf: 'flex-end', marginRight: '150px' }} >
                            <Button
                                type="submit"
                                style={{ backgroundColor: 'white', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', color: 'black', border:'1px solid black' }}
                                //variant="outlined"
                                sx={{ mt: 3, mb: 2, }}
                                onClick={() => navigate('/register_land')}
                            >
                                Back
                            </Button>

                            <Button
                                type="submit"
                                style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', marginLeft: '30px' }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>

                        </div>
                    </Box>

                    {/* <Footer /> */}
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default LandPreview