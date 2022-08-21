import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';

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


const Security = () => {

    const navigate = useNavigate();
    const stored_values = localStorage.picture && JSON.parse(localStorage.picture)
    const [style, setStyle] = React.useState(styles.init)
    const [style1, setStyle1] = React.useState(styles.init)
    const [style2, setStyle2] = React.useState(styles.init)
    const [style3, setStyle3] = React.useState(styles.init)
    const [picture, setPicture] = React.useState(stored_values ? stored_values.picture : '')
    //const [passwordVisibility, setPasswordVisibility] = React.useState(false)
    //const [retypePasswordVisibility, setRetypePasswordVisibility] = React.useState(false)
    const [imagePreview, setImagePreview] = React.useState(stored_values ? stored_values.imagePreview : '')
    const [imageError, setImageError] = React.useState('')
    const imageRef = React.useRef('')

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
        navigate('/profession')
    }

    const changeStyle3 = () => {
        setStyle3(styles.clicked)
        navigate('/registration_preview')
    }

    const imageHandler = () =>{
    console.log("File", imageRef.current.files[0])
    setImagePreview(URL.createObjectURL(imageRef.current.files[0]))
    setPicture(imageRef.current.files[0].name)
    //console.log("Prev Image",imagePreview)
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if(picture === ''){
            setImageError("Kindly upload an image to proceed")
        }else{
            const imageData = {picture,imagePreview}
            localStorage.setItem('picture', JSON.stringify(imageData))
            navigate("/registration_preview")
        }
      
    };
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
                            mb: 5,
                            mt: 5
                        }}
                    >

                        <form style={{ width: '70%', marginTop: '10px' }} onSubmit={handleSubmit}>
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
                            
                            {/*<div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', position:'relative' }}>
                                    <label for="pass">New password *</label><br />
                                    <input type={passwordVisibility ? "text" : "password"} id="surname" name="surname" style={{ marginTop: '-15px', height: '40px', border: '1px solid gray' }} required />
                                    { passwordVisibility ?  <VisibilityIcon onClick={()=> setPasswordVisibility(!passwordVisibility)} style={{position:'absolute', right:5, top:42, cursor:'pointer'}}/> : <VisibilityOffOutlinedIcon onClick={()=> setPasswordVisibility(!passwordVisibility)} style={{position:'absolute', right:5, top:42, cursor:'pointer'}}/>}
                                </div>
                              

                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '100px',position:'relative'  }}>
                                    <label for="retype_pass">Retype new password* </label><br />
                                    <input type={retypePasswordVisibility ? "text" : "password"} id="given_name" name="given_name" style={{ marginTop: '-15px', height: '45px', border: '1px solid gray' }} required />
                                   { retypePasswordVisibility ?  <VisibilityIcon onClick={()=> setRetypePasswordVisibility(!retypePasswordVisibility)} style={{position:'absolute', right:5, top:42, cursor:'pointer'}}/> : <VisibilityOffOutlinedIcon onClick={()=> setRetypePasswordVisibility(!retypePasswordVisibility)} style={{position:'absolute', right:5, top:42, cursor:'pointer'}}/>}
                                </div>
                            </div>*/}

                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    {/*{imagePreview}*/}
                                    <img alt="user_image" src={imagePreview ? imagePreview : require('../../assets/image.jpg')} style={{ width: '250px', height: '250px', marginLeft:"30px" }} />
                                    {picture === "" && imageError && <p style={{ color: 'red', fontSize: '16px', marginTop:"15px", marginBottom:"-10px",marginLeft:"30px" }}>{imageError}</p>}
                                    <div onClick={()=>imageRef.current.click()} style={{ cursor: 'pointer', color: 'red', display: 'flex', flexDirection: 'row', width: '10%', marginLeft: '100px', border: '1px solid black', height: '10%', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
                                        <AddIcon />
                                        <input ref={imageRef} type="file" onChange={imageHandler} style={{ display: "none" }} />
                                        <p style={{ color: 'red', fontSize: '16px' }}>Upload</p>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '40px', marginBottom: '-20px', justifyContent: 'space-around', width: '80%' }}>
                            <p onClick={changeStyle} style={style}>Personal Information</p>
                            <p onClick={changeStyle1} style={style1}>Contact</p>
                            <p onClick={changeStyle2} style={style2}>Profession</p>
                            <p style={{ cursor: 'pointer', borderBottom: '3px solid #784D0F', }}>Security</p>
                            <p onClick={changeStyle3} style={style3}>Preview</p>
                        </div>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default Security