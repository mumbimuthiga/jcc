import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';

import { useRegisterPayerMutation } from '../../redux/services/payers';


const theme = createTheme();


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  })

const RegistrationPreview = () => {
    const navigate = useNavigate();
    const personalInfo = JSON.parse(localStorage.personal_info)
    const personalInfo2 = JSON.parse(localStorage.personal_info2)
    const { certificateNumber, dob, gender, maritalStatus, signature } = JSON.parse(localStorage.personal_info2)
    const contacts = JSON.parse(localStorage.contacts)
    const profession = JSON.parse(localStorage.occupation)
    const picture = JSON.parse(localStorage.picture)
    const [open, setOpen] = React.useState(false);
    const [openBackdrop, setOpenBackdrop] = React.useState(false);
    const [submitting, setSubmitting] = React.useState(false);
    const [registerPayer] = useRegisterPayerMutation()


    const handleClose = () => {
        navigate('/signin')
    };


    const address = {
        landMark: personalInfo2?.landMark,
        residentialAreaId: personalInfo2?.residentialAreaId,
        plotNumber: personalInfo2?.plotNumber,
    }

    //console.log("Address", address)
    const allInfo = { ...personalInfo, certificateNumber, dob, gender, maritalStatus, signature, contacts, profession, ...picture, address }
    delete allInfo.imagePreview
    const day = new Date(allInfo?.dob).getDay()
    const month = new Date(allInfo?.dob).getMonth()
    const year = new Date(allInfo?.dob).getFullYear()
    const dateOfBirth = `${day}/${month}/${year}`
    allInfo.dob = dateOfBirth


    console.log("All Info", allInfo)

    const handleSubmit = async () => {
        setSubmitting(true)
        setOpenBackdrop(true);
        const response = await registerPayer(allInfo)
        console.log("Response", response)

        setTimeout(()=>{
            setSubmitting(false)
            setOpenBackdrop(false);
            setOpen(true)
        },3000)
       
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


                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Personal Information</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Surname</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo.surName : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Personal name</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.otherNames : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Country of origin</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.countryOfOrigin : ""} </p>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>LandMark</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.address?.landMark : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Residential area</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.address?.residentialAreaId : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Plot Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.address?.plotNumber : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Blood Type</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.bloodType : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Date of Birth</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.dob : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Picture</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '130px' }}>
                                    <p>{allInfo?.picture ? <CheckCircleIcon style={{ color: 'green', fontSize: '28px' }} /> : <CancelIcon style={{ color: 'red', fontSize: '28px' }} />}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Foreigner</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '130px' }}>
                                    <p>{allInfo?.isForeigner ? <CheckCircleIcon style={{ color: 'green', fontSize: '28px' }} /> : <CancelIcon style={{ color: 'red', fontSize: '28px' }} />}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Certificate Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.certificateNumber : ""}</p>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Marital Status</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.maritalStatus : ""}</p>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Gender</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '130px' }}>
                                    <p>{allInfo ? allInfo?.gender : ""}</p>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Tax Identification Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.taxIdentificationNumber : ""}</p>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Personal Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.personalNumber : ""}</p>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Signature</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.signature : ""}</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Contacts</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Email</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.contacts?.email : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Phone</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>+{allInfo ? allInfo?.contacts?.phone : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Next of Kin Name</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.contacts?.nokName : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Next of Kin Phone Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>+{allInfo ? allInfo?.contacts?.nokPhone : ""}</p>
                                </div>
                            </div>

                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Profession</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Industry</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.profession?.industryId : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Organization</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.profession?.organization : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Occupation</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.profession?.occupationId : ""}</p>
                                </div>
                            </div>
                        </div>


                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Address</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.7%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>LandMark</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.address?.landMark : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Plot Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.address?.plotNumber : ""}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Residential Area</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo ? allInfo?.address?.residentialAreaId : ""}</p>
                                </div>
                            </div>

                        </div>


                        <div style={{ marginTop: '50px', marginBottom: '50px', display: 'flex', alignSelf: 'flex-end', marginRight: '100px' }} >
                            <Button
                                type="submit"
                                style={{ backgroundColor: 'white', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', color: 'black', border: "1px solid black" }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                                onClick={() => navigate('/personal_info')}
                            >
                                Back
                            </Button>

                        
                            <Button
                                type="submit"
                                style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', marginLeft: '30px', display:"flex", }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>

                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={openBackdrop}
                                //onClick={handleBackdropClose}
                            >
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <CircularProgress color="inherit" />
                                    <h4 style={{color:"black"}}>Saving Data</h4>
                                </div>

                            </Backdrop>
                            <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                                maxWidth={"md"}
                                TransitionComponent={Transition}
                                
                            >
                                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{ backgroundColor:'rgba(217, 217, 217, 1)'}}>
                                    <p style={{ color: "rgba(217, 217, 217, 1)", marginTop: "-10px", marginBottom: "-5px" }}> Modal title</p>
                                </BootstrapDialogTitle>
                                <DialogContent style={{ paddingLeft:"70px", paddingRight:"70px", backgroundColor:'rgba(217, 217, 217, 1)' }} dividers>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }} >
                                        <img alt="welcome_image" src={require('../../assets/Group 2.png')} style={{ width: '20%', height: '20%' }} />
                                    </div>
                                    <div style={{ marginTop: '40px', marginBottom:"30px" }} >
                                        <p style={{ fontSize: '26px', textAlign: 'center' }}>Registered successfully</p>
                                        <p style={{ fontSize: '26px', textAlign: 'center', marginTop: '-15px' }}>Kindly login to your new account</p>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Link style={{ color: '#E4A51C', cursor: 'pointer', fontSize: '26px', fontWeight: 'bold', }} to="/signin">Login</Link> {" "}
                                        </div>

                                    </div>
                                </DialogContent>
                                {/*<DialogActions>
                                    <Button autoFocus onClick={handleClose}>
                                        Save changes
                                    </Button>
                                </DialogActions>*/}
                            </BootstrapDialog>
                        </div>
                    </Box>
                    {/* <Footer /> */}
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default RegistrationPreview