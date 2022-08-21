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
    eng_name: Yup
        .string("Enter Engineer name")
        .required("Engineer name is a required field"),
    eng_type: Yup
        .string("Enter Engineer type")
        .required("Engineer type is a required field"),
    erb_number: Yup
        .string("Enter ERB number")
        .required("ERB Number is a required field"),

})
const EngineerDetails = () => {


    const navigate = useNavigate();
    const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)
    const [style4, setStyle4] = React.useState(styles.init)

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
        navigate('/business_documents')
    }

    const changeStyle4 = () => {
        setStyle4(styles.clicked)
        navigate('/contractor_certificate_preview')
    }

    const formik = useFormik({
        initialValues: {
            eng_name: '',
            eng_type:"Structural Engineer",
            erb_number: ""
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                setSubmitting(true);
                console.log("Form values", values)
                navigate('/contractor_certificate_preview')
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
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <form style={{ width: '70%', position:"absolute", top:120 }} onSubmit={formik.handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <p style={{ fontSize: '20px' }}>Engineer Details</p>
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
                                    <label for="engineer_type">Type*</label><br />
                                    <select id="business_type" name="business_type"  style={formik.errors.eng_name ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px", backgroundColor:"white" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px", backgroundColor:"white"}}>
                                        <option value={formik.values.eng_type}>Structural Engineer</option>
                                        <option value={formik.values.eng_type}>Architectural Engineer </option>
                                        <option value={formik.values.eng_type}>Electrical Engineer</option>
                                        <option value={formik.values.eng_type}>Mechanical Engineer</option>
                                    </select>
                                    {formik.touched.eng_type && formik.errors.eng_type && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.eng_type}</p>}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="eng_name">Engineer's Name*</label><br />
                                    <input
                                        type="text"
                                        id="eng_name"
                                        name="eng_name"
                                        style={formik.errors.eng_name ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.eng_name}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.eng_name && formik.errors.eng_name && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.eng_name}</p>}

                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '44.5%' }}>
                                    <label for="erb_no">ERB Number*</label><br />
                                    <input
                                        type="text"
                                        id="erb_number"
                                        name="erb_number"
                                        style={formik.errors.erb_number ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.erb_number}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.erb_number && formik.errors.erb_number && <p style={{ color: 'red', fontSize: '14px' }}>{formik.errors.erb_number}</p>}

                                </div>
                            </div>
                        </form>
                    </Box>

                    <div style={{ display: 'flex', flexDirection: 'row', position:"absolute", bottom:50, justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                        <p onClick={changeStyle} style={style}>Business Profile</p>
                        <p onClick={changeStyle1} style={style1}>Business Address</p>
                        <p onClick={changeStyle2} style={style2}>Business Contact</p>
                        <p onClick={changeStyle3} style={style3}>Documents</p>
                        <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Engineer Details</p>
                        <p onClick={changeStyle4} style={style4}>Preview</p>
                    </div>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default EngineerDetails