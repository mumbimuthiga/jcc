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

const styles = {
    init: {
        cursor: 'pointer',
        fontSize:'16px',
        //whiteSpace:"nowrap",
        //marginRight:"50px",
        //marginLeft:"50px"
    },
    clicked: {
        borderBottom: '3px solid #784D0F',
        cursor: 'pointer',
        fontSize:'16px'
    }
}


const ApplicantInfo = () => {
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
    //const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)
    const [style4, setStyle4] = React.useState(styles.init)
    const [style5, setStyle5] = React.useState(styles.init)
    const [style6, setStyle6] = React.useState(styles.init)
    const [style7, setStyle7] = React.useState(styles.init)


    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/building_desc')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/location_site')
    }

    const changeStyle3 = () => {
        setStyle3(styles.clicked)
        navigate('/accessibility_to_service')
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

                        <form style={{ width: '70%', marginTop:'20px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px' }} >Applicant Information</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px' }}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, }}
                                    onClick={() => navigate('/building_desc')}
                                >
                                    Next
                                </Button>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'row',}}>
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

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px', }}>
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
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="certificate">Type of Permit/Certificate*:</label><br />
                                    <select id="permit_type" name="permit_type" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', backgroundColor: 'white' }} required>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>

                                    <label for="account" style={{ marginTop: '30px' }}>Account *</label><br />
                                    <input placeholder='Account' type="text" id="id" name="id" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', paddingLeft: '15px', fontStyle:'italic' }} required />
                                    
                                    <div style={{ marginTop: '50px', marginBottom: '50px', display: 'flex', alignSelf: 'flex-start', marginRight: '150px' }} >
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
                                    <p >Registry Number:</p>
                                    <p style={{ marginTop:'30px'}}>Name:</p>
                                    <p style={{ marginTop:'30px'}}>Identification Number:</p>
                                    <p style={{ marginTop:'30px'}}>Log status of the application:</p>
                                </div>

                            </div>
                        </form>
                    </Box>

                    <div style={{ display: 'flex',flexDirection: 'row', marginTop:'50px', marginBottom:'50px', justifyContent: 'space-around', width: '100%', alignItems:'center' }}>
                            <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Applicant Information</p>
                            <p onClick={changeStyle1} style={style1}>Building Description</p>
                            <p onClick={changeStyle2} style={style2}>Location of Site</p>
                            <p onClick={changeStyle3} style={style3}>Accessibility to service</p>
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

export default ApplicantInfo