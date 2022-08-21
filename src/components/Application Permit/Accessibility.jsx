import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Switch from '@mui/material/Switch';

const theme = createTheme();

const styles = {
    init: {
        cursor: 'pointer',
        fontSize: '14px'
    },
    clicked: {
        borderBottom: '3px solid #784D0F',
        cursor: 'pointer',
        fontSize: '14px'
    }
}


const Accessibility = () => {
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
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)
    const [style4, setStyle4] = React.useState(styles.init)
    const [style5, setStyle5] = React.useState(styles.init)
    const [style6, setStyle6] = React.useState(styles.init)
    const [style7, setStyle7] = React.useState(styles.init)


    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/applicant_info')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/buidling_desc')
    }

    const changeStyle3 = () => {
        setStyle3(styles.clicked)
        navigate('/applicant_info')
    }

    const changeStyle4 = () => {
        setStyle4(styles.clicked)
        navigate('/professionals_engaged')
    }

    const changeStyle5 = () => {
        setStyle5(styles.clicked)
        navigate('/additioinal_info')
    }

    const changeStyle6 = () => {
        setStyle6(styles.clicked)
        navigate('/supportive_documents')
    }

    const changeStyle7 = () => {
        setStyle7(styles.clicked)
        navigate('/land_preview')
    }

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

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

                        <form style={{ width: '70%', marginTop: '20px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px' }} >Accessibility To Service</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    onClick={() => navigate('/professionals_engaged')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Access Road</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Water Supply</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Sewer Connection</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Electricity Supply</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Internet Supply</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', marginLeft: '70px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p>Other</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '200px' }}>
                                    <Switch {...label} />
                                </div>
                            </div>

                        </form>
                    </Box>


                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', marginBottom: '50px', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                        <p onClick={changeStyle3} style={style3}>Applicant Information</p>
                        <p onClick={changeStyle1} style={style1}>Building Description</p>
                        <p onClick={changeStyle2} style={style2}>Location of Site</p>
                        <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Accessibility to service</p>
                        <p onClick={changeStyle4} style={style4}>Professionals engaged</p>
                        <p onClick={changeStyle5} style={style5}>Additional Information</p>
                        <p onClick={changeStyle6} style={style6}>Supportive Documents</p>
                        <p onClick={changeStyle7} style={style7}>Preview</p>
                    </div>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default Accessibility