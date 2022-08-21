import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
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
    surName: Yup
        .string("Enter Surname")
        .required("Surname is a required field"),
    otherNames: Yup
        .string("Enter Other name")
        .required("Other name is a required field"),
    personalNumber: Yup
        .string("Enter Personal Number")
        .required("Personal Number is a required field"),
    passportNumber: Yup
        .string("Enter passport number")
        .required("Passport number is a required field"),
    countryOfOrigin: Yup
        .string("Enter Country of Origin")
        .required("Country of Origin is a required field"),
    bloodType: Yup
        .string("Enter Blood type ")
        .required("Blood type is a required field"),
    taxIdentificationNumber: Yup
        .string("Enter Tax Identification Number")
        .required("Tax Identification Number is a required field"),
})



const PersonalInfo = () => {

    const stored_values = localStorage.personal_info && JSON.parse(localStorage.personal_info)
    //console.log("Values", stored_values)

    const navigate = useNavigate();
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
            surName: stored_values?.surName ? stored_values.surName :  '',
            otherNames: stored_values?.otherNames ? stored_values.otherNames :  '',
            personalNumber: stored_values?.personalNumber ? stored_values.personalNumber :  '',
            passportNumber: stored_values?.passportNumber ? stored_values.passportNumber :  '',
            countryOfOrigin: stored_values?.countryOfOrigin ? stored_values.countryOfOrigin :  '',
            bloodType: stored_values?.bloodType ? stored_values.bloodType :  '',
            taxIdentificationNumber: stored_values?.taxIdentificationNumber ? stored_values.taxIdentificationNumber :  '',
            isForeigner: stored_values?.isForeigner ? stored_values.isForeigner :  false,
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            try {
                setSubmitting(true);
                //console.log("Form values", values)
                localStorage.setItem('personal_info', JSON.stringify(values))
                navigate('/personal_info_page2')
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
                            mb: 5,
                            mt: 5,
                            // mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >

                        <form onSubmit={formik.handleSubmit} style={{ width: '70%' }} >
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <h4>Lets get you started with just some few steps</h4>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px' }}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, }}
                                //disabled={formik.isSubmitting} 
                                //onClick={() => navigate('/personal_info_page2')}
                                >
                                    Next
                                </Button>


                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label htmlFor="surName">Surname *</label><br />
                                    <input
                                        type="text"
                                        id="surName"
                                        name="surName"
                                        style={formik.errors.surName ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.surName}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.surName && formik.errors.surName && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.surName}</p>}
                                
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label htmlFor="otherNames">Other name * </label><br />
                                    <input
                                        type="text"
                                        id="otherNames"
                                        name="otherNames"
                                        style={formik.touched.otherNames && formik.errors.otherNames ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.otherNames}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.otherNames && formik.errors.otherNames && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.otherNames}</p>}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label htmlFor="personalNumber">Personal Number *</label><br />
                                    <input
                                        type="text"
                                        id="personalNumber"
                                        name="personalNumber"
                                        style={formik.touched.personalNumber && formik.errors.personalNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.personalNumber}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.personalNumber && formik.errors.personalNumber && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.personalNumber}</p>}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label htmlFor="passportNumber">ID/Passport No *</label><br />
                                    <input
                                        type="text"
                                        id="passportNumber" name="passportNumber"
                                        style={formik.touched.passportNumber && formik.errors.passportNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.passportNumber}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.passportNumber && formik.errors.passportNumber && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.passportNumber}</p>}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label htmlFor="countryOfOrigin">Country of origin *</label><br />
                                    <input
                                        type="text"
                                        id="countryOfOrigin"
                                        name="countryOfOrigin"
                                        style={formik.touched.countryOfOrigin && formik.errors.countryOfOrigin ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.countryOfOrigin}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.countryOfOrigin && formik.errors.countryOfOrigin && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.countryOfOrigin}</p>}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label htmlFor="bloodType">Blood type</label><br />
                                    <input
                                        type="text"
                                        id="bloodType"
                                        name="bloodType"
                                        style={formik.touched.bloodType && formik.errors.bloodType ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.bloodType}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.bloodType && formik.errors.bloodType && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.bloodType}</p>}
                                </div>

                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: '25px' }}>
                                    <Switch id="isForeigner" name="isForeigner" inputProps={{ 'aria-label': 'isForeigner' }} checked={formik.values.isForeigner} onChange={formik.handleChange} />
                                    <label style={{ marginTop: '7px' }} htmlFor="foreigner">Foreigner</label>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label htmlFor="taxIdentificationNumber">Tax identification number *</label><br />
                                    <input
                                        type="text"
                                        id="taxIdentificationNumber"
                                        name="taxIdentificationNumber"
                                        style={formik.touched.taxIdentificationNumber && formik.errors.taxIdentificationNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px' } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px' }}
                                        value={formik.values.taxIdentificationNumber}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.taxIdentificationNumber && formik.errors.taxIdentificationNumber && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.taxIdentificationNumber}</p>}
                                </div>
                            </div>

                        </form>


                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '40px', marginBottom: '30px', justifyContent: 'space-around', width: '80%' }}>
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

export default PersonalInfo