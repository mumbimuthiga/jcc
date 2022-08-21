import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const styles = {
    init: {
        cursor: 'pointer'
    },
    clicked: {
        borderBottom: '3px solid #784D0F',
        cursor: 'pointer'
    }
}

const theme = createTheme();

const validationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Enter a valid Email")
        .required("Email is a required field"),
    //phone: Yup
    //    .string("Enter Phone Number")
    //    .required("Phone Number is a required field"),
    website: Yup
        .string("Enter Website")
        .required("Website is a required field"),

})


const BusinessContact = () => {

    const stored_values = localStorage.business_contact && JSON.parse(localStorage.business_contact)
    const navigate = useNavigate();
    const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)
    const [style4, setStyle4] = React.useState(styles.init)
    const [phone,setPhone] = React.useState(stored_values?.phone ? stored_values?.phone :  '')
    const [errorMessages, setErrorMessages] = React.useState("")


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
            email: stored_values?.email ? stored_values?.email :  '',
            website: stored_values?.website ? stored_values?.website :  ''
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                if(phone.length < 12 ){
                    setErrorMessages("Phone Number is a required field")
                }else{
                    setSubmitting(true);
                    console.log("Form values", values)
                    const contact = {...values, phone}
                    localStorage.setItem('business_contact', JSON.stringify(contact))
                    navigate('/business_documents')
                }
                
            } catch (error) {
                console.log("Error", error)
            }
        }
    })


    const handlePhoneChange = (value) =>{
        setPhone(value)
        console.log("Phone", value.length)

        value.length > 12 ? setErrorMessages("Maximum 10 characters") : setErrorMessages("")
        //value.length < 11 && value.length > 12 ? setErrorMessages({...errorMessages, phoneError:"Enter a valid Phone Number"}) : setErrorMessages({...errorMessages, phoneError:""})
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

                        <form style={{ width: "70%" }} onSubmit={formik.handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <p style={{ fontSize: '20px' }}>Business Contact</p>
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
                                    <label for="email">Email *</label><br />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        style={formik.errors.email ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.email && formik.errors.email && <p style={{ color: 'red', fontSize: '14px' , marginTop:"5px", marginBottom:"-15px"}}>{formik.errors.email}</p>}

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label style={{marginBottom:"-20px"}} for="website">Phone Number*</label><br />
                                        <PhoneInput
                                        className='PhoneInput'
                                        placeholder="712345678"
                                        value={phone}
                                        country={'ss'}
                                        enableSearch
                                        onChange={handlePhoneChange}
                                        inputStyle={{
                                            height: "45px",
                                            width:"100%",
                                            border:"1px solid black",
                                        }}
                                        inputProps={{
                                            name: "phone",
                                            //required: true
                                            }}
                                    />
                                    {errorMessages ? <p style={{ color: 'red', fontSize: '14px', marginBottom:"-15px", marginTop:"5px" }}>{errorMessages}</p> : ""}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <label for="website">Website*</label><br />
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        style={formik.errors.website ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.website}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.website && formik.errors.website && <p style={{ color: 'red', fontSize: '14px', marginTop:"5px", marginBottom:"-15px" }}>{formik.errors.website}</p>}

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    {/*<div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label for="landline">Landline*</label><br />
                                        <input
                                            type="text"
                                            id="website"
                                            name="website"
                                            style={formik.errors.website ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                            value={formik.values.website}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.touched.website && formik.errors.website && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.website}</p>}

                                    </div>*/}
                                </div>
                            </div>
                        </form>
                    </Box>

                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom:"30px", marginTop:"140px", justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                        <p onClick={changeStyle} style={style}>Business Profile</p>
                        <p onClick={changeStyle1} style={style1}>Business Address</p>
                        <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Business Contact</p>
                        <p onClick={changeStyle2} style={style2}>Documents</p>
                        {/*<p onClick={changeStyle3} style={style3}>Engineer Details</p>*/}
                        <p onClick={changeStyle4} style={style4}>Preview</p>
                    </div>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default BusinessContact