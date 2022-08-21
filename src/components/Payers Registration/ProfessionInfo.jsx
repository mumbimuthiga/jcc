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
    occupationId: Yup
        .string("Enter Occupation")
        .required("Occupation is a required field"),
    industryId: Yup
        .string("Enter Industry")
        .required("Industry is a required field"),
    organization: Yup
        .string("Enter Organization")
        .required("Organization is a required field"),

})

const ProfessionalInfo = () => {
    const stored_values = localStorage.occupation && JSON.parse(localStorage.occupation)

    const navigate = useNavigate();
    const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)

    const changeStyle = () => {
        setStyle(styles.clicked)
        navigate('/personal_info')
    }

    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/contact')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/security')
    }

    const changeStyle3 = () => {
        setStyle3(styles.clicked)
        navigate('/registration_preview')
    }

    //{
//    "personalNumber": "string",1
//    "passportNumber": "string",2
//    "certificateNumber": "string",
//    "taxIdentificationNumber": "string",3
//    "surName": "string",4
//    "otherNames": "string",5
//    "countryOfOrigin": "string",6
//    "dob": "2022-03-02",
//    "gender": "string",
//    "maritalStatus": "string",
//    "bloodType": "string",7
//    "picture": "string",
//    "signature": "string",
//    "isForeigner": true,8
//    "contacts": {
//      "email": "string",
//      "phone": "string",
//      "nokName": "string",
//      "nokPhone": "string"
//    },
//    "address": {
//      "residentialAreaId": 0,
//      "landMark": "string",
//      "plotNumber": "string"
//    },
//    "profession": {
//      "occupationId": "string",
//      "organization": "string",
//      "industryId": "string"
//    }
//  }
    const formik = useFormik({
        initialValues: {
            occupationId: stored_values?.occupationId ? stored_values.occupationId :  '',
            organization: stored_values?.organization ? stored_values.organization :  '',
            industryId: stored_values?.industryId ? stored_values.industryId :  '',
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                setSubmitting(true);
                console.log("Form values", values)
                //const occupationData =  {
                //    occupationId:values.occupationId,
                //    industryId:values.industryId,
                //    organization:values.orgazination
                //}
                //console.log("Occupation Data", occupationData)
                localStorage.setItem('occupation', JSON.stringify(values))
                navigate('/security')
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
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/*{formik.errors.occupationId}*/}
                        <form style={formik.errors.occupationId || formik.errors.industryId || formik.errors.organization  ? { width: '70%', marginTop: '50px', marginBottom:"-50px" }:{ width: '70%', marginTop: '0px' }} onSubmit={formik.handleSubmit}>
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
                                    <label for="occupationId">Occupation *</label><br />
                                    <input
                                        type="text"
                                        id="occupationId"
                                        name="occupationId"
                                        style={formik.touched.occupationId && formik.errors.occupationId ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.occupationId}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.occupationId && formik.errors.occupationId && <p style={{ color: 'red', fontSize: '14px', marginTop:"5px", marginBottom:"-45px" }}>{formik.errors.occupationId}</p>}
                                
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="organization">Organization(Place of work)* </label><br />
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        style={formik.touched.organization && formik.errors.organization ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.organization}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.organization && formik.errors.organization && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.organization}</p>}
                                
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="industryId">Industry</label><br />
                                    <input
                                        type="text"
                                        id="industryId"
                                        name="industryId"
                                        style={formik.touched.industryId && formik.errors.industryId ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.industryId}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.industryId && formik.errors.industryId && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.industryId}</p>}
                                
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>

                                </div>
                            </div>

                        </form>

                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '140px', marginBottom:"20px", justifyContent: 'space-around', width: '80%' }}>
                            <p onClick={changeStyle} style={style}>Personal Information</p>
                            <p onClick={changeStyle1} style={style1}>Contact</p>
                            <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Profession</p>
                            <p onClick={changeStyle2} style={style2}>Security</p>
                            <p onClick={changeStyle3} style={style3}>Preview</p>
                        </div>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default ProfessionalInfo