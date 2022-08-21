import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material//InputAdornment";
import { useFormik } from 'formik';
import * as Yup from 'yup';
//import toast, { Toaster } from 'react-hot-toast';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



const theme = createTheme();


const validationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Enter a valid Email")
        .required("Email is a required field"),
    password: Yup
        .string("Enter Password")
        .required("Password is a required field")
})


const SignIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/home";


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            try {
                setSubmitting(true);

                toast.success('Logged in Successfully', { position: toast.POSITION.TOP_RIGHT})

                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1000)


            } catch (error) {
                console.log("Error", error)
                toast.error('Email or password is invalid', {
                    duration: 4000,
                    position: 'top-right',
                })
            }
        }
    })



    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh', width: '100vw' }}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <img alt="logo" src={require('../../assets/logo.png')} style={{ width: '15%', height: '15%' }} />
                        <h1>Welcome back</h1>
                        <p style={{ fontStyle: "italic", marginTop: '-15px' }}>We are glad you are here, kindly enter your details </p>

                        <form style={{ width: '70%' }} sx={{ mt: 1 }} onSubmit={formik.handleSubmit}>
                            <TextField
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                autoFocus
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton>
                                                <EmailOutlinedIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <TextField
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton>
                                                <VisibilityOffOutlinedIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Grid container style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <Grid item>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="remember"
                                                color="primary"
                                            //checked={persist}
                                            //onChange={togglePersist}
                                            />
                                        }
                                        label="Remember me"
                                        style={{ color: 'red' }}
                                    />
                                </Grid>
                                <Grid item style={{ marginTop: '10px', }} >
                                    <Link href="#" variant="body2" style={{ color: 'red' }} >
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                            <div style={{ display: 'flex', flexDirection: 'row' }} >
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', fontWeight: 'bold' }}
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, p: 1.4 }}
                                //  onClick={() => navigate('/home')}
                                >
                                    Login
                                </Button>
                                {/*<Toaster />*/}
                                <Button
                                    type="submit"
                                    style={{ marginLeft: '40px', backgroundColor: 'white', color: 'black', border: '1px solid black' }}
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, p: 1.4 }}
                                    onClick={() => navigate('/personal_info')}
                                >
                                    Register
                                </Button>
                            </div>


                            {/* <Copyright sx={{ mt: 5 }} /> */}
                        </form>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        backgroundImage: "url(http://localhost:3000/Juba1.png)",
                        backgroundRepeat: 'no-repeat',
                        // backgroundColor: (t) =>
                        //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        // backgroundSize:'100% 180%',
                        // backgroundPosition: 'right -300px',
                    }}
                />
                {/*<img alt="logo" src={require('../assets/logo.png')} style={{ width: '100%', height: '100%' }} />*/}

            </Grid>
        </ThemeProvider>
    );
}

export default SignIn