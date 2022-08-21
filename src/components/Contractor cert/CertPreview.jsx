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
import Backdrop from '@mui/material/Backdrop';
import { useRegisterBusinessMutation } from '../../redux/services/businesses';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//toast.configure()

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

const theme = createTheme();

const CertPreview = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [openBackdrop, setOpenBackdrop] = React.useState(false);
    const [registerBusiness] = useRegisterBusinessMutation()
    const business_info = localStorage.business_info && JSON.parse(localStorage.business_info)
    const business_address = localStorage.business_info && JSON.parse(localStorage.business_address)
    const business_contact = localStorage.business_info && JSON.parse(localStorage.business_contact)
    const business_documents = localStorage.business_info && JSON.parse(localStorage.business_documents)

    
    
    const address = {
        landMark: business_address?.landMark,
        residentialAreaId: business_address?.residentialAreaId,
        plotNumber: business_address?.plotNumber,
    }

    const contacts={
        email: business_contact.email,
        phone:business_contact.phone,
        website:business_contact.website
    }

    const files = [...business_documents]


    const allInfo = {...business_info, address, contacts, files}
    delete allInfo.imagePreview
    allInfo.businessTypeId = parseInt(allInfo.businessTypeId)
    allInfo.ownerId = parseInt(allInfo.ownerId)
    allInfo.address.residentialAreaId = parseInt(allInfo.address.residentialAreaId)

    const day = new Date(allInfo?.dateOfRegistration).getDay()
    const month = new Date(allInfo?.dateOfRegistration).getMonth()
    const year = new Date(allInfo?.dateOfRegistration).getFullYear()
    const dateOfReg = `${day}/${month}/${year}`
    allInfo.dateOfRegistration = dateOfReg

    //console.log("All Info", allInfo)

    const handleClose = () => {
        navigate('/business_accounts')
    };

    const handleSubmit = async()=>{

        setOpenBackdrop(true);
        console.log("All Info", allInfo)
        const response = await registerBusiness(allInfo)
        console.log("Response", response)

        if(response){
            setOpenBackdrop(false);
            setOpen(true)
            localStorage.removeItem('business_info')
            localStorage.removeItem('business_address')
            localStorage.removeItem('business_contact')
            localStorage.removeItem('business_documents')
            //navigate("/business_accounts")
        }
        
       
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


                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Business Profile</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Business Name</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.businessName}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Business Type</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.businessTypeId}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Registration Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.registrationNumber}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Operation License Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.operationLicenseNumber}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Registration Date</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.dateOfRegistration}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Tax Identification Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.taxIdentificationNumber}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Business Logo</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                <p>{allInfo?.logo ? <CheckCircleIcon style={{ color: 'green', fontSize: '28px' }} /> : <CancelIcon style={{ color: 'red', fontSize: '28px' }} />}</p>
                                </div>
                            </div>

                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Business Address</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>LandMark</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.address?.landMark} </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Residential Area</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.address?.residentialAreaId} </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Plot Number</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.address?.plotNumber} </p>
                                </div>
                            </div>

                        </div>

                        <div style={{ width: '85%' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                                <div style={{ backgroundColor: '#BBBBBB', marginTop: '40px', marginBottom: '30px', height: '50px', width: '100%', display: 'flex', alignItems: 'center', }}>
                                    <h4 style={{ textAlign: 'left', marginLeft: '40px' }}>Business Contact</h4>
                                </div>

                                <div style={{ backgroundColor: '#E4A51C', marginTop: '40px', marginBottom: '30px', height: '50px', width: '0.5%', display: 'flex', alignItems: 'center', }}>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Phone</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>+{allInfo?.contacts?.phone} </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Email</p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.contacts?.email} </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>Website </p>
                                </div>

                                <div style={{ width: '100%', marginLeft: '100px' }}>
                                    <p>{allInfo?.contacts?.website} </p>
                                </div>
                            </div>

                        </div>


                        <div style={{ marginTop: '50px', marginBottom: '50px', display: 'flex', alignSelf: 'flex-end', marginRight: '150px' }} >
                            <Button
                                type="submit"
                                style={{ backgroundColor: 'white', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', color: 'black', border:"1px solid black" }}
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                                onClick={() => navigate('/business_info')}
                            >
                                Back
                            </Button>

                            <Button
                                type="submit"
                                style={{ backgroundColor: '#E4A51C', fontWeight: 'bold', paddingLeft: '30px', paddingRight: '30px', marginLeft: '30px' }}
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
                                    <div style={{ marginTop: '20px', marginBottom:"50px" }} >
                                        <p style={{ fontSize: '25px', textAlign: 'center' }}>Business created successfully</p>
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

export default CertPreview