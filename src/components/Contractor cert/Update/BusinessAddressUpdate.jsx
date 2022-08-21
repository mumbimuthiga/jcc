import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


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

const validationSchema = Yup.object().shape({
    residentialAreaId: Yup
        .number("Enter Residential Area")
        .required("Residential Area is a required field"),
    landMark: Yup
        .string("Enter LandMark")
        .required("LandMark is a required field"),
    plotNumber: Yup
        .number("Enter Plot Number")
        .required("Plot Number is a required field"),

})



const BusinessAddress = () => {

    const navigate = useNavigate();
    const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)
    const [style4, setStyle4] = React.useState(styles.init)

    const stored_values = localStorage.business_address && JSON.parse(localStorage.business_address)
    //console.log("Stored values", stored_values)

    const changeStyle = () => {
        setStyle(styles.clicked)
        navigate('/business_info')
    }

    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/business_contact')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/business_documents')
    }

    const changeStyle3 = () => {
        setStyle3(styles.clicked)
        navigate('/engineer_details')
    }

    const changeStyle4 = () => {
        setStyle4(styles.clicked)
        navigate('/contractor_certificate_preview')
    }


    const formik = useFormik({
        initialValues: {
            residentialAreaId: stored_values?.residentialAreaId ? stored_values?.residentialAreaId :  '',
            landMark: stored_values?.landMark ? stored_values?.landMark :  '',
            plotNumber: stored_values?.plotNumber ? stored_values?.plotNumber :  '',
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                setSubmitting(true);
                localStorage.setItem('business_address', JSON.stringify(values))
                navigate('/business_contact')
                resetForm()
            } catch (error) {
                console.log("Error", error)
            }
        }
    })



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

                        <form style={{ width: '70%' }} onSubmit={formik.handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <p style={{ fontSize: '20px' }} >Business Address</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="residentialAreaId">Residential Area</label><br />
                                    <input
                                        type="text"
                                        id="residentialAreaId"
                                        name="residentialAreaId"
                                        style={formik.touched.residentialAreaId && formik.errors.residentialAreaId ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.residentialAreaId}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.residentialAreaId && formik.errors.residentialAreaId && <p style={{ color: 'red', fontSize: '14px', marginTop:"5px", marginBottom:"-15px" }}>{formik.errors.residentialAreaId}</p>}

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="landMark">LandMark </label><br />
                                    <input
                                        type="text"
                                        id="landMark"
                                        name="landMark"
                                        style={formik.touched.landMark && formik.errors.landMark ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.landMark}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.landMark && formik.errors.landMark && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.landMark}</p>}

                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="plotNumber">Plot Number</label><br />
                                    <input
                                        type="text"
                                        id="plotNumber"
                                        name="plotNumber"
                                        style={formik.touched.plotNumber && formik.errors.plotNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.plotNumber}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.plotNumber && formik.errors.plotNumber && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.plotNumber}</p>}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                </div>
                            </div>

                        </form>
                    </Box>

                    <div style={{ display: 'flex', flexDirection: 'row', marginTop:"170px", marginBottom:"20px", justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                        <p onClick={changeStyle} style={style}>Business Profile</p>
                        <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Business Address</p>
                        <p onClick={changeStyle1} style={style1}>Business Contact</p>
                        <p onClick={changeStyle2} style={style2}>Documents</p>
                        {/*<p onClick={changeStyle3} style={style3}>Engineer Details</p>*/}
                        <p onClick={changeStyle4} style={style4}>Preview</p>
                    </div>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default BusinessAddress