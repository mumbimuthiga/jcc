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
    class: Yup
        .string("Select class")
        .required("Class is a required field"),
    dimensions: Yup
        .string("Enter Dimensions")
        .required("Dimensions is a required field"),
    landMark: Yup
        .string("Enter LandMark")
        .required("LandMark is a required field"),
    plotNumber: Yup
        .string("Enter Plot Number")
        .required("Plot Number is a required field"),
    ownerId: Yup
        .string("Enter Owner")
        .required("Owner is a required field"),
    residentialAreaId: Yup
        .string("Enter Residential area")
        .required("Residential area is a required field")
})




const RegisterLand = () => {
    const navigate = useNavigate();
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)

    const stored_values = localStorage.form_values && JSON.parse(localStorage.form_values)
    console.log("Values", stored_values)

    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/land_supporting_documents')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/land_preview')
    }


    const formik = useFormik({
        initialValues: {
            class: stored_values?.class ? stored_values.class :  '',
            dimensions: stored_values?.dimensions ? stored_values.dimensions :  '',
            residentialAreaId: stored_values?.residentialAreaId ? stored_values.residentialAreaId :  '',
            plotNumber: stored_values?.plotNumber ? stored_values.plotNumber :  '',
            landMark: stored_values?.landMark ? stored_values.landMark :  '',
            ownerId: stored_values?.ownerId ? stored_values.ownerId :  ''
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            try {
                setSubmitting(true);
                localStorage.setItem('form_values', JSON.stringify(values))
                //console.log("Stored form values", JSON.parse(localStorage.form_values))
                navigate('/land_supporting_documents')
                //resetForm()
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

                        <div style={{ width: '70%', marginTop: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <p style={{ fontSize: '18px', marginTop:'32px'  }} >Register Land</p>
                                    <div style={{ display: 'flex', }}>
                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                        <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '35px', width: '100%', display: 'flex', alignItems: 'center', }}>

                                        </div>

                                        <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                                            <label for="account" style={{ marginTop: '-20px' }}>Account *</label><br />
                                            <input placeholder='Account' type="text" id="id" name="id" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} />

                                            <div style={{ marginTop: '50px', marginBottom: '50px', display: 'flex', alignSelf: 'flex-start', marginRight: '150px' }} >
                                                <Button
                                                    type="submit"
                                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', }}
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2, }}
                                                //onClick={() => navigate('/welcome_page')}
                                                >
                                                    Search
                                                </Button>

                                                <Button
                                                    type="submit"
                                                    style={{ backgroundColor: 'white', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', color: 'black', marginLeft: '30px', border: '1px solid black', }}
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2, }}
                                                //onClick={() => navigate('/personal_info')}
                                                >
                                                    New
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{  width: '100%', marginLeft: '100px', }}>

                                    <form style={{display: 'flex', flexDirection: 'column',}} onSubmit={formik.handleSubmit}>
                                        <Button
                                            type="submit"
                                            style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', width: '65px', alignSelf: 'flex-end' }}
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, }}
                                        >
                                            Next
                                        </Button>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                            </div>
                                            <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '35px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                            </div>
                                            <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '35px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '0px', marginBottom: "70px" }}>
                                            <label for="class" style={{ marginTop: '0px' }}>Class*:</label><br />
                                            <select value={formik.values.class} onChange={formik.handleChange} id="class" name="class" style={formik.errors.class? { marginTop: '-15px', height: '45px', border: '1px solid red', backgroundColor: 'white', fontSize:"16px" }:{ marginTop: '-15px', height: '45px', border: '1px solid gray', backgroundColor: 'white',fontSize:"16px" }}>
                                                <option value="" label="Select class"></option>
                                                <option value="1st Class">1st Class</option>
                                                <option value="2nd Class">2nd Class</option>
                                                <option value="3rd Class">3rd Class</option>
                                                <option value="4th Class">4th Class</option>
                                            </select>
                                            {formik.touched.class && formik.errors.class && <p style={{ color: 'red', fontSize: '14px', marginBottom:'-15px' }}>{formik.errors.class}</p>}
                                    
                                            <label for="dimensions" style={{ marginTop: '30px' }}>Dimensions *</label><br />
                                            <input
                                                type="text"
                                                id="dimensions"
                                                name="dimensions"
                                                style={formik.errors.dimensions ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                                value={formik.values.dimensions}
                                                onChange={formik.handleChange}
                                            />
                                            {/*{JSON.parse(localStorage.form_values).dimesions}*/}
                                             {formik.touched.dimensions && formik.errors.dimensions && <p style={{ color: 'red', fontSize: '14px', marginBottom:'-15px' }}>{formik.errors.dimensions}</p>}
                                    
                                            <label for="residentialAreaId" style={{ marginTop: '30px' }}>Residential Area *</label><br />
                                            <input
                                                type="text"
                                                id="residentialAreaId"
                                                name="residentialAreaId"
                                                style={formik.errors.residentialAreaId ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                                value={formik.values.residentialAreaId}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched.residentialAreaId && formik.errors.residentialAreaId && <p style={{ color: 'red', fontSize: '14px', marginBottom:'-15px' }}>{formik.errors.residentialAreaId}</p>}

                                            <label for="landMark" style={{ marginTop: '30px' }}>LandMark*</label><br />
                                            <input
                                                type="text"
                                                id="landMark"
                                                name="landMark"
                                                style={formik.errors.landMark ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                                value={formik.values.landMark}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched.landMark && formik.errors.landMark && <p style={{ color: 'red', fontSize: '14px', marginBottom:'-15px' }}>{formik.errors.landMark}</p>}

                                            <label for="plotNumber" style={{ marginTop: '30px' }}>Plot Number *</label><br />
                                            <input
                                                type="text"
                                                id="plotNumber"
                                                name="plotNumber"
                                                style={formik.errors.plotNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                                value={formik.values.plotNumber}
                                                onChange={formik.handleChange}
                                            />
                                        
                                            {formik.touched.plotNumber && formik.errors.plotNumber && <p style={{ color: 'red', fontSize: '14px', marginBottom:'-15px' }}>{formik.errors.plotNumber}</p>}


                                            <label for="ownerId" style={{ marginTop: '30px' }}>Owner *</label><br />
                                            <input
                                                type="text"
                                                id="ownerId"
                                                name="ownerId"
                                                style={formik.errors.ownerId ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                                value={formik.values.ownerId}
                                                onChange={formik.handleChange}
                                            />
                                             {formik.touched.ownerId && formik.errors.ownerId && <p style={{ color: 'red', fontSize: '14px', marginBottom:'-15px' }}>{formik.errors.ownerId}</p>}
                                  
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>

                    </Box>

                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', marginBottom: '50px', justifyContent: 'space-around', width: '100%', alignItems: 'center', paddingLeft:"200px", paddingRight:"200px" }}>
                        <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Land Details</p>
                        <p onClick={changeStyle1} style={style1}>Supporting Documents</p>
                        <p onClick={changeStyle2} style={style2}>Preview</p>
                    </div>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default RegisterLand