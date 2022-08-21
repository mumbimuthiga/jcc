import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import AddIcon from '@mui/icons-material/Add';

const theme = createTheme();


const styles = {
    init: {
        cursor: 'pointer'
    },
    clicked: {
        borderBottom: '3px solid #784D0F',
        cursor: 'pointer'
    }
}

const BusinessDocuments = () => {

    const navigate = useNavigate();
    const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)
    const [style4, setStyle4] = React.useState(styles.init)
    const [errorMessage, setErrorMessage] = React.useState("")
    const businessCertificateRef = React.useRef()
    const TINCertificateRef = React.useRef()
    const otherCertificateRef = React.useRef()
    const stored_values = localStorage.business_documents && JSON.parse(localStorage.business_documents)

    console.log("Stored values", stored_values)

    const [data, setData] = React.useState(stored_values ? stored_values : [])

    const changeStyle = () => {
        setStyle(styles.clicked)
        navigate('/business_info')
    }

    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/business_address')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/business_contact')
    }

    const changeStyle3 = () => {
        setStyle3(styles.clicked)
        navigate('/engineer_details')
    }

    const changeStyle4 = () => {
        setStyle4(styles.clicked)
        navigate('/contractor_certificate_preview')
    }


    const businessCertificateSelectHandler = () => {
        console.log("File", businessCertificateRef.current.files[0].name)
        setData([...data, { document: businessCertificateRef.current.files[0].name, name: "Business Certificate", }])
    }

    const TINCertificateSelectHandler = () => {
        console.log("File", TINCertificateRef.current.files[0].name)
        setData([...data, { document: TINCertificateRef.current.files[0].name,  name: "TIN Certificate", }])
    }

    const otherCertificateSelectHandler = () => {
        console.log("File", otherCertificateRef.current.files[0].name)
        setData([...data, { document: otherCertificateRef.current.files[0].name,  name: "Other", }])
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("Files", data.length)
        if(data.length < 3){
            setErrorMessage("Kindly upload all the documents")
        }else{
            localStorage.setItem('business_documents', JSON.stringify(data))
            navigate("/contractor_certificate_preview")
        }
       
    };



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

                        <form style={{ width: '80%', marginTop: '40px', marginBottom: '70px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '50px' }} > Business Documents </p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    //onClick={() => navigate('/engineer_details')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>

                            {errorMessage ? <p style={{ color: 'red', fontSize: '14px', marginBottom:"-10px", marginTop:"2px" }}>{errorMessage}</p> : ""}

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Business Certificate</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div onClick={() => businessCertificateRef.current.click()} style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <input ref={businessCertificateRef} type="file" onChange={businessCertificateSelectHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>TIN Certificate</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div onClick={() => TINCertificateRef.current.click()} style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <input ref={TINCertificateRef} type="file" onChange={TINCertificateSelectHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>

                            {/*<div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Other</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div onClick={() => businessCertificateRef.current.click()} style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <input ref={businessCertificateRef} type="file" onChange={businessCertificateSelectHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>*/}


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Other</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div onClick={() => otherCertificateRef.current.click()} style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <input ref={otherCertificateRef} type="file" onChange={otherCertificateSelectHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>
                            {/*
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Other</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div onClick={() => businessCertificateRef.current.click()} style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <input ref={businessCertificateRef} type="file" onChange={businessCertificateSelectHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>*/}
                        </form>
                    </Box>

                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', marginTop: '50px', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                        <p onClick={changeStyle} style={style}>Business Profile</p>
                        <p onClick={changeStyle1} style={style1}>Business Address</p>
                        <p onClick={changeStyle2} style={style2}>Business Contact</p>
                        <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Documents</p>
                        {/*<p onClick={changeStyle3} style={style3}>Engineer Details</p>*/}
                        <p onClick={changeStyle4} style={style4}>Preview</p>
                    </div>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default BusinessDocuments