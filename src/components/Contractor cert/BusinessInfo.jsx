import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import * as axios from "axios"

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
    registrationNumber: Yup
        .string("Enter Registration Number")
        .required("Registration Number is a required field"),
    operationLicenseNumber: Yup
        .string("Enter License Number")
        .required("License Number is a required field"),
    taxIdentificationNumber: Yup
        .string("Enter Tax Identification Number")
        .required("Tax Identification Number is a required field"),
    businessName: Yup
        .string("Enter Business Name")
        .required("Business Name is a required field"),
    businessTypeId: Yup
        .string("Enter Business Type")
        .required("Business Type is a required field"),
    dateOfRegistration: Yup
        .string("Enter date of Registration")
        .required("Date of Registration is a required field"),
    cocAffliationCertificateNumber: Yup
        .string("Enter Certificate Number")
        .required("Certificate Number is a required field"),
    ownerId: Yup
        .string("Enter owner")
        .required("Owner is a required field"),
    representativeId: Yup
        .string("Representative of Registration")
        .required("Representative is a required field"),
})


const BusinessInfo = () => {

    const stored_values = localStorage.business_info && JSON.parse(localStorage.business_info)
    const [imagePreview, setImagePreview] = React.useState(stored_values ? stored_values.imagePreview : '')
    const imageRef = React.useRef('')
    const [imageError, setImageError] = React.useState('')
    const [logo, setLogo] = React.useState(stored_values ? stored_values.logo : '')
    const navigate = useNavigate();
    const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [data, setData] = React.useState([])
    const [style4, setStyle4] = React.useState(styles.init)

    const changeStyle = () => {
        setStyle(styles.clicked)
        navigate('/business_address')
    }

    const changeStyle1 = () => {
        setStyle1(styles.clicked)
        navigate('/business_contact')
    }

    const changeStyle2 = () => {
        setStyle2(styles.clicked)
        navigate('/business_documents')
    }



    const changeStyle4 = () => {
        setStyle4(styles.clicked)
        navigate('/contractor_certificate_preview')
    }


    //console.log("Stored values", stored_values)
    React.useMemo(()=>{
        const fetchBusinessTypes = async () =>{
           let request = await axios.get('https://malika-globalsetup.azurewebsites.net/api/v1/setup/businessTypes')
            
           request =[...new Map(request.data.map(v => [v.type, v])).values()]
        //   console.log("Response", request)
           setData(request)
           return
        } 
        fetchBusinessTypes()
    }, [])


    //console.log("Response", data)
    const formik = useFormik({
        initialValues: {
            registrationNumber: stored_values?.registrationNumber ? stored_values.registrationNumber : '',
            taxIdentificationNumber: stored_values?.taxIdentificationNumber ? stored_values.taxIdentificationNumber : '',
            businessName: stored_values?.businessName ? stored_values.businessName : '',
            businessTypeId: stored_values?.businessTypeId ? stored_values.businessTypeId : '',
            operationLicenseNumber: stored_values?.operationLicenseNumber ? stored_values.operationLicenseNumber : '',
            dateOfRegistration: stored_values?.dateOfRegistration ? stored_values.dateOfRegistration : '',
            cocAffliationCertificateNumber:stored_values?.cocAffliationCertificateNumber ? stored_values.cocAffliationCertificateNumber : '',
            representativeId: stored_values?.representativeId ? stored_values.representativeId : '',
            ownerId: stored_values?.ownerId ? stored_values.ownerId : '',
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {

            try {
                if (logo === '') {
                    setImageError("Kindly upload an image to proceed")
                } else {
                    setSubmitting(true);
                    const form_values = { ...values, logo, imagePreview }
                    //console.log("Form values", form_values)
                    localStorage.setItem('business_info', JSON.stringify(form_values))

                    navigate('/business_address')
                }

            } catch (error) {
                console.log("Error", error)
            }
        }
    })



    const imageHandler = () => {
        console.log("File", imageRef.current.files[0])
        setImagePreview(URL.createObjectURL(imageRef.current.files[0]))
        setLogo(imageRef.current.files[0].name)
        //console.log("Prev Image",imagePreview)
    }


    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Navbar />
                <CssBaseline />
                <Grid item xs={12} sm={8} md={12} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            mb: 8,
                            // mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >

                        <form style={{ width: '70%', marginTop: '50px' }} onSubmit={formik.handleSubmit}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <p style={{ fontSize: '20px' }}>Business Profile</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px' }}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Next
                                </Button>


                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                                    <div style={{ marginLeft: "80px" }}>
                                        <img alt="business_logo" src={imagePreview ? imagePreview : require('../../assets/logo.png')} style={{ width: '120px', height: '120px', borderRadius: "60px" }} />
                                        {/*{formik.touched.logo && formik.errors.logo && <p style={{ color: 'red', fontSize: '14px', marginBottom:"-20px", marginTop:"5px" }}>{formik.errors.logo}</p>}*/}
                                        {logo === "" && imageError && <p style={{ color: 'red', fontSize: '16px', marginTop: "10px", marginBottom: "-20px", marginLeft: "-70px" }}>{imageError}</p>}
                                        <div onClick={() => imageRef.current.click()} style={{ marginLeft: "10px", cursor: 'pointer', color: 'red', display: 'flex', flexDirection: 'row', width: '30%', border: '1px solid black', height: '10%', alignItems: 'center', justifyContent: 'center', marginTop: '40px', padding: "15px" }}>
                                            <AddIcon />
                                            <input ref={imageRef} type="file" onChange={imageHandler} style={{ display: "none" }} />
                                            <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                        </div>
                                    </div>


                                    {/*<img alt="logo" src={require('../../assets/image.jpg')} style={{ width: '200px', height: '180px', marginTop: '30px', marginLeft: '35px', marginBottom: '4px' }} />*/}
                                    <label for="license_no" style={{ marginTop: '-5px' }}>Operation License Number*</label><br />
                                    <input
                                        type="text"
                                        id="operationLicenseNumber"
                                        name="operationLicenseNumber"
                                        style={formik.errors.operationLicenseNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.operationLicenseNumber}
                                        onChange={formik.handleChange}
                                        placeholder="Operation License Number"
                                    />
                                    {formik.touched.operationLicenseNumber && formik.errors.operationLicenseNumber && <p style={{ color: 'red', fontSize: '14px', marginBottom: "-20px", marginTop: "5px" }}>{formik.errors.operationLicenseNumber}</p>}

                                    <label for="cert_no" style={{ marginTop: '30px' }}>Registration Number*</label><br />
                                    <input
                                        type="text"
                                        id="registrationNumber"
                                        name="registrationNumber"
                                        style={formik.errors.registrationNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.registrationNumber}
                                        onChange={formik.handleChange}
                                        placeholder="Registration Number"
                                    />
                                    {formik.touched.registrationNumber && formik.errors.registrationNumber && <p style={{ color: 'red', fontSize: '14px', marginBottom: "-20px", marginTop: "5px" }}>{formik.errors.registrationNumber}</p>}

                                    <label for="ownerId" style={{ marginTop: '30px' }}>Owner*</label><br />
                                    <input
                                        type="text"
                                        id="ownerId"
                                        name="ownerId"
                                        style={formik.errors.ownerId ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.ownerId}
                                        onChange={formik.handleChange}
                                        placeholder="Owner"
                                    />
                                    {formik.touched.ownerId && formik.errors.ownerId && <p style={{ color: 'red', fontSize: '14px', marginBottom: "-20px", marginTop: "5px" }}>{formik.errors.ownerId}</p>}

                                    <label for="representativeId" style={{ marginTop: '30px' }}>Representative*</label><br />
                                    <input
                                        type="text"
                                        id="representativeId"
                                        name="representativeId"
                                        style={formik.errors.representativeId ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.representativeId}
                                        onChange={formik.handleChange}
                                        placeholder="Representative"
                                    />
                                    {formik.touched.representativeId && formik.errors.representativeId && <p style={{ color: 'red', fontSize: '14px', marginBottom: "-20px", marginTop: "5px" }}>{formik.errors.representativeId}</p>}

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px' }}>
                                    <label for="business_name" style={{ marginTop: '60px' }}>Business Name *</label><br />
                                    <input
                                        type="text"
                                        id="businessName"
                                        name="businessName"
                                        style={formik.errors.businessName ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.businessName}
                                        onChange={formik.handleChange}
                                        placeholder="Business Name"
                                    />
                                    {formik.touched.businessName && formik.errors.businessName && <p style={{ color: 'red', fontSize: '14px', marginTop: "5px", marginBottom: "-15px", }}>{formik.errors.businessName}</p>}


                                    <label for="business_type" style={{ marginTop: '35px' }}>Business Type*:</label><br />
                                    <select id="businessTypeId" name="businessTypeId" value={formik.values.businessTypeId} onChange={formik.handleChange} style={formik.touched.businessTypeId && formik.errors.businessTypeId ? { paddingLeft: "10px", marginTop: '-15px', height: '45px', border: '1px solid red', backgroundColor: 'white', fontSize: "16px" } : { paddingLeft: "10px", marginTop: '-15px', height: '45px', border: '1px solid gray', backgroundColor: 'white', fontSize: "16px", }} >
                                        <option value="" label="Select business type"> </option>
                                        {data.map((item)=>(
                                             <option key={item.id} value={item.id}>{item.type}</option>
                                        ))}
                                    </select>
                                    {/*{formik.values.businessTypeId}*/}
                                    {formik.touched.businessTypeId && formik.errors.businessTypeId && <p style={{ color: 'red', fontSize: '14px', marginTop: "5px", marginBottom: "-15px", }}>{formik.errors.businessTypeId}</p>}

                                    <label for="taxIdentificationNumber" style={{ marginTop: '35px' }}>Tax Identification Number*</label><br />
                                    <input
                                        type="text"
                                        id="taxIdentificationNumber"
                                        name="taxIdentificationNumber"
                                        style={formik.errors.taxIdentificationNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.taxIdentificationNumber}
                                        onChange={formik.handleChange}
                                        placeholder="Tax Identification Number"
                                    />
                                    {formik.touched.taxIdentificationNumber && formik.errors.taxIdentificationNumber && <p style={{ color: 'red', fontSize: '14px', marginTop: "5px", marginBottom: "-15px", }}>{formik.errors.taxIdentificationNumber}</p>}


                                    <label for="dateOfRegistration" style={{ marginTop: '35px' }}>Registration Date*</label><br />

                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <MobileDatePicker
                                            inputFormat="MM/dd/yyyy"
                                            //type="date"
                                            id="dateOfRegistration"
                                            name="dateOfRegistration"
                                            label='Date of Registration'
                                            value={formik.values.dateOfRegistration}
                                            onChange={(dateOfRegistration) => {
                                                formik.setFieldValue('dateOfRegistration', Date.parse(dateOfRegistration));
                                            }}
                                            renderInput={({ inputRef, inputProps, InputProps }) => (
                                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: "-15px" }}>
                                                    <input style={formik.touched.dateOfRegistration && formik.errors.dateOfRegistration ? { height: "45px", width: "100%", fontSize: "16px", paddingLeft: "10px", border: "1px solid red" } : { height: "45px", width: "100%", fontSize: "16px", paddingLeft: "10px", border: "1px solid gray" }} ref={inputRef} {...inputProps} placeholder="Date of Registration" />
                                                </Box>
                                            )}
                                        />
                                    </LocalizationProvider>

                                    {formik.touched.dateOfRegistration && formik.errors.dateOfRegistration && <p style={{ color: 'red', fontSize: '14px', marginTop: "5px", marginBottom:"-15px" }}>{formik.errors.dateOfRegistration}</p>}
                                

                                    <label for="cocAffliationCertificateNumber" style={{ marginTop: '30px' }}>Certificate Number*</label><br />
                                    <input
                                        type="text"
                                        id="cocAffliationCertificateNumber"
                                        name="cocAffliationCertificateNumber"
                                        style={formik.errors.cocAffliationCertificateNumber ? { marginTop: '-15px', height: '45px', border: '1px solid red', fontSize: '16px', paddingLeft: "20px" } : { marginTop: '-15px', height: '45px', border: '1px solid gray', fontSize: '16px', paddingLeft: "20px" }}
                                        value={formik.values.cocAffliationCertificateNumber}
                                        onChange={formik.handleChange}
                                        placeholder="Registration Number"
                                    />
                                    {formik.touched.cocAffliationCertificateNumber && formik.errors.cocAffliationCertificateNumber && <p style={{ color: 'red', fontSize: '14px', marginBottom: "-20px", marginTop: "5px" }}>{formik.errors.cocAffliationCertificateNumber}</p>}

                                </div>
                            </div>

                        </form>


                    </Box>

                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', marginBottom: '50px', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                        <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Business Profile</p>
                        <p onClick={changeStyle} style={style}>Business Address</p>
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

export default BusinessInfo