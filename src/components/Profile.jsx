import * as React from 'react';
//import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


const theme = createTheme();

const Profile = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    //const navigate = useNavigate();


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

                        <form style={{ width: '85%', marginTop: '-10px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '20px' }} >Profile</p>



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

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '60px', }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                        <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '35px', width: '100%', display: 'flex', alignItems: 'center', }}>

                                        </div>

                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                    <img src={require('../assets/image.jpg')} alt="placeholder_image" style={{ height: '240px', width: '240px' }} />

                                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <p style={{ marginLeft: '50px' }}>Username</p>
                                            <p>Enock Agwera</p>
                                        </div>

                                        <div style={{ display: 'flex', marginTop:'0px', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <p style={{ marginLeft: '50px' }}>Registry No</p>
                                            <p>568206930568</p>
                                        </div>

                                        <div style={{ display: 'flex', marginTop:'0px', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <p style={{ marginLeft: '50px' }}>email</p>
                                            <p>dummyemail@gmail.com</p>
                                        </div>

                                        <div style={{ display: 'flex', marginTop:'0px', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <p style={{ marginLeft: '50px' }}>Role</p>
                                            <p>Administrator</p>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px', marginBottom: '50px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', marginTop:'25px'  }}>
                                        <label for="account" style={{ whiteSpace: 'nowrap', marginRight: '30px',}}>Current Password:</label><br />
                                        <input placeholder='Current Password' type="text" id="id" name="id" style={{ marginTop: '-15px', width: '100%', height: '45px', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} />
                                        <VisibilityOffOutlinedIcon style={{ position: 'absolute', right: 5 }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', marginTop: '40px' }}>
                                        <label for="account" style={{ whiteSpace: 'nowrap', marginRight: '30px' }}>Change Password:</label><br />
                                        <input placeholder='Change Password' type="text" id="id" name="id" style={{ marginTop: '-15px', width: '100%', height: '45px', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} />
                                        <VisibilityOffOutlinedIcon style={{ position: 'absolute', right: 5 }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', marginTop: '40px' }}>
                                        <label for="account" style={{ whiteSpace: 'nowrap', marginRight: '55px' }}>New Password:</label><br />
                                        <input placeholder='New Password' type="text" id="id" name="id" style={{ marginTop: '-15px', width: '100%', height: '45px', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} />
                                        <VisibilityOffOutlinedIcon style={{ position: 'absolute', right: 5 }} />
                                    </div>
                                    <Button
                                        type="submit"
                                        style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', width: '30%', alignSelf: 'flex-end' }}
                                        variant="contained"
                                        sx={{ mt: 10, mb: 2, }}
                                    //onClick={() => navigate('/')}
                                    >
                                        Save
                                    </Button>
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

export default Profile