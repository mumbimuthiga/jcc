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
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';


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
    certificateNumber: Yup
        .string("Enter Certificate Number")
        .required("Certificate Number is a required field"),
    residentialAreaId: Yup
        .string("Enter Residential Area")
        .required("Residential Area is a required field"),
    landMark: Yup
        .string("Enter LandMark")
        .required("LandMark is a required field"),
    plotNumber: Yup
        .string("Enter Plot Number")
        .required("Plot Number is a required field"),
    maritalStatus: Yup
        .string("Select Marital Status")
        .required("Marital Status is a required field"),
    gender: Yup
        .string("Select Gender")
        .required("Gender is a required field"),
    signature: Yup
        .string("Enter Signature")
        .required("Signature is a required field"),
    dob: Yup
        .string("Enter Date of irth")
        .required("Date of Birth is a required field"),
})



const PersonalInfo2 = () => {

    const navigate = useNavigate();
    const stored_values = localStorage.personal_info2 && JSON.parse(localStorage.personal_info2)

    const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)


    const changeStyle = () => {
        setStyle(styles.clicked)
        navigate('/contact')
    }

    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/profession')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/security')
    }

    const changeStyle3 = () => {
        setStyle3(styles.clicked)
        navigate('/registration_preview')
    }


    const formik = useFormik({
        initialValues: {
            certificateNumber: stored_values?.certificateNumber ? stored_values.certificateNumber : '',
            residentialAreaId: stored_values?.residentialAreaId ? stored_values.residentialAreaId : '',
            landMark: stored_values?.landMark ? stored_values.landMark : '',
            plotNumber: stored_values?.plotNumber ? stored_values.plotNumber : '',
            gender: stored_values?.gender ? stored_values.gender : '',
            dob: stored_values?.dob ? stored_values.dob : "",
            maritalStatus: stored_values?.maritalStatus ? stored_values.maritalStatus : '',
            signature: stored_values?.signature ? stored_values.signature : ''
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            try {
                setSubmitting(true);
                localStorage.setItem('personal_info2', JSON.stringify(values))
                navigate('/contact')
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
                            // my: 8,
                            // mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <form style={{ width: '70%', marginTop: "30px" }} onSubmit={formik.handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <h4>Lets get you started with just some few steps</h4>
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
                                    <label for="certificateNumber">Certificate Number *</label><br />
                                    <input
                                        type="text"
                                        id="certificateNumber"
                                        name="certificateNumber"
                                        style={formik.touched.certificateNumber && formik.errors.certificateNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.certificateNumber}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.certificateNumber && formik.errors.certificateNumber && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.certificateNumber}</p>}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="landMark">County * </label><br />
                                    <input
                                        type="text"
                                        id="landMark"
                                        name="landMark"
                                        style={formik.touched.landMark && formik.errors.landMark ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.landMark}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.landMark && formik.errors.landMark && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.landMark}</p>}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '35px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="residentialAreaId">Residential Area *</label><br />
                                    <input
                                        type="text"
                                        id="residentialAreaId"
                                        name="residentialAreaId"
                                        style={formik.touched.residentialAreaId && formik.errors.residentialAreaId ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.residentialAreaId}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.residentialAreaId && formik.errors.residentialAreaId && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.residentialAreaId}</p>}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="plotNumber">Plot Number * </label><br />
                                    <input
                                        type="text"
                                        id="plotNumber"
                                        name="plotNumber"
                                        style={formik.touched.plotNumber &&  formik.errors.plotNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.plotNumber}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.plotNumber && formik.errors.plotNumber && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.plotNumber}</p>}
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '35px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="gender">Gender *</label><br />
                                    <select id="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange} style={formik.touched.gender && formik.errors.gender ? { paddingLeft: "10px", marginTop: '-15px', height: '45px', border: '1px solid red', backgroundColor: 'white', fontSize: "16px" } : { paddingLeft: "10px", marginTop: '-15px', height: '45px', border: '1px solid gray', backgroundColor: 'white', fontSize: "16px" }} >
                                        <option value="" label="Select gender"></option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    {formik.touched.gender && formik.errors.gender && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.gender}</p>}

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="maritalStatus">Marital Status * </label><br />
                                    <select id="maritalStatus" name="maritalStatus" value={formik.values.maritalStatus} onChange={formik.handleChange} style={formik.touched.maritalStatus && formik.errors.maritalStatus ? { paddingLeft: "10px", marginTop: '-15px', height: '45px', border: '1px solid red', backgroundColor: 'white', fontSize: "16px" } : { paddingLeft: "10px", marginTop: '-15px', height: '45px', border: '1px solid gray', backgroundColor: 'white', fontSize: "16px" }} >
                                        <option value="" label="Select marital status"> </option>
                                        <option value="Married">Married</option>
                                        <option value="Single">Single</option>
                                        <option value="Divorced">Other</option>
                                    </select>
                                    {formik.touched.maritalStatus && formik.errors.maritalStatus && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.maritalStatus}</p>}

                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '35px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="dob" style={{ marginBottom: "-15px" }}>Date of Birth *</label><br />
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <MobileDatePicker
                                            inputFormat="MM/dd/yyyy"
                                            //type="date"
                                            id="dob"
                                            name="dob"
                                            label='Date of birth'
                                            value={formik.values.dob}
                                            onChange={(dob) => {
                                                formik.setFieldValue('dob', Date.parse(dob));
                                            }}
                                            renderInput={({ inputRef, inputProps, InputProps }) => (
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <input style={formik.touched.dob &&  formik.errors.dob ? { height: "45px", width: "100%", fontSize: "16px", paddingLeft: "10px",border: "1px solid red" }:{ height: "45px", width: "100%", fontSize: "16px", paddingLeft: "10px",border: "1px solid gray" }} ref={inputRef} {...inputProps} placeholder="Date of Birth" />
                                                </Box>
                                            )}
                                        />
                                    </LocalizationProvider>
              
                                    {formik.touched.dob && formik.errors.dob && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.dob}</p>}

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="signature">Signature * </label><br />
                                    <input
                                        type="text"
                                        id="signature"
                                        name="signature"
                                        style={formik.touched.signature && formik.errors.signature ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.signature}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.signature && formik.errors.signature && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.signature}</p>}
                                </div>
                            </div>


                        </form>

                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', marginBottom: '40px', justifyContent: 'space-around', width: '80%' }}>
                            <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Personal Information</p>
                            <p onClick={changeStyle} style={style}>Contact</p>
                            <p onClick={changeStyle1} style={style1}>Profession</p>
                            <p onClick={changeStyle2} style={style2}>Security</p>
                            <p onClick={changeStyle3} style={style3}>Preview</p>
                        </div>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default PersonalInfo2