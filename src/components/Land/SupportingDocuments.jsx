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


const SupportingDocuments = () => {

    const navigate = useNavigate();
    const stored_values = localStorage.supporting_docs && JSON.parse(localStorage.supporting_docs)
    console.log("Stored values", stored_values)

    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)


    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/register_land')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/land_preview')
    }

    const [data,setData] = React.useState({
        applicationForm: stored_values?.applicationForm ? stored_values.applicationForm :false,
        landCroquis:stored_values?.landCroquis ? stored_values.landCroquis :false,
        plotAllotmentLetter:stored_values?.plotAllotmentLetter ? stored_values.plotAllotmentLetter :false,
        commitmentLetter:stored_values?.commitmentLetter ? stored_values.commitmentLetter :false,
    })
    const applicationFormRef = React.useRef()
    const landCroquisRef = React.useRef()
    const plotAllotmentLetterRef = React.useRef()
    const commitmentLetterRef = React.useRef()

    //const fileSelectHandler = () => {
    //    console.log("File", applicationFormRef.current.files[0])
    //    setData({...data, applicationForm:true})
    //}

    const applicationFormSelectHandler = () => {
        //console.log("File", applicationFormRef.current.files[0])
        setData({...data, applicationForm:true})
      
    }

    const landCroquisSelectHandler = () => {
        //console.log("File", landCroquisRef.current.files[0])
        setData({...data, landCroquis:true})
    }

    const plotAllotmentLetterSelectHandler = () => {
        //console.log("File", plotAllotmentLetterRef.current.files[0])
        setData({...data, plotAllotmentLetter:true})
    }
    const commitmentLetterSelectHandler = () => {
        //console.log("File", commitmentLetterRef.current.files[0])
        setData({...data, commitmentLetter:true})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        //console.log("State data", data)
        localStorage.setItem("supporting_docs", JSON.stringify(data))
        //console.log("Values", localStorage.suppporting_docs)

        stored_values && navigate('/land_preview')
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


                        <form style={{ width: '80%', marginTop: '40px', marginBottom: '70px' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '50px' }} >Documents </p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    //onClick={() => navigate('/land_preview')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Application Form</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div onClick={() => applicationFormRef.current.click()} style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <input ref={applicationFormRef} type="file" onChange={applicationFormSelectHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Land Croquis</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div onClick={() => landCroquisRef.current.click()} style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <input ref={landCroquisRef} type="file" onChange={landCroquisSelectHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Plot Allotment</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div onClick={() => plotAllotmentLetterRef.current.click()} style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <input ref={plotAllotmentLetterRef} type="file" onChange={plotAllotmentLetterSelectHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Committment Letter</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div onClick={() => commitmentLetterRef.current.click()} style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        <input ref={commitmentLetterRef} type="file" onChange={commitmentLetterSelectHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Lease Agreement</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        {/*<input  type="file" style={{ display: "none" }} />*/}
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '30px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '16px' }}>Sale Agreement</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '30px', }}>
                                    <div  style={{ cursor: 'pointer', display: 'flex', color: 'red', flexDirection: 'row', width: '90px', marginLeft: '100px', border: '1px solid black', height: '30px', alignItems: 'center', justifyContent: 'center', }}>
                                        <AddIcon />
                                        {/*<input  type="file" onChange={fileSelectHandler} style={{ display: "none" }} />*/}
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </Box>
                </Grid>

                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', paddingBottom: '50px', justifyContent: 'space-around', width: '100%', alignItems: 'center', paddingLeft:"200px", paddingRight:"200px" }}>
                        <p onClick={changeStyle1} style={style1}>Land Details</p>
                        <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Supporting Documents</p>
                        <p onClick={changeStyle2} style={style2}>Preview</p>
                    </div>
            </Grid>
        </ThemeProvider>
    );
}

export default SupportingDocuments