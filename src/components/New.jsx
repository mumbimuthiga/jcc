import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';
import DataTable from './Reusable/Datatable';
import SearchIcon from '@mui/icons-material/Search';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import BlockIcon from '@mui/icons-material/Block';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const theme = createTheme();

const rows = [
    {
        refNo: 2510635,
        business_name: "Mijinitech",
        date_incorporated: "31/12/2019",
        owner: "James Ndoto",
        status: "Approved",
        action: "some action"
    },
    {
        refNo: 2510125,
        business_name: "JCC",
        date_incorporated: "31/12/2019",
        owner: "Justin Bashombana",
        status: "Pending",
        action: "some action"
    },
    {
        refNo: 2556135,
        business_name: "Glopay",
        date_incorporated: "31/12/2019",
        owner: "Reuben Nguyo",
        status: "Pending",
        action: "some action"
    },
    {
        refNo: 2545635,
        business_name: "Agwenchez",
        date_incorporated: "31/12/2019",
        owner: "Enock Agwera",
        status: "Pending",
        action: "some action"
    }
];


const New = () => {

    const navigate = useNavigate();


    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Navbar />
                <CssBaseline />
                <Grid item xs={12} sm={8} md={12} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            // mb: 8,
                            // mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'60px', marginBottom:"50px" }}>
                            <div style={{ height: '23vh', width: '18vw', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>    
                                    <AccountBalanceWalletRoundedIcon style={{marginTop:'30px', fontSize:'50px'}}  />
                                    <h3 style={{ marginTop: '10px' }}>Payment</h3>
                                </div>
                            </div>
                            <div style={{ height: '23vh', width: '18vw', marginLeft: '5vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                    <PriorityHighIcon style={{marginTop:'30px', fontSize:'50px'}}  />
                                    <h3 style={{ marginTop: '10px',textAlign:'center' }}>Application Requirements</h3>
                                </div>
                            </div>
                            <div style={{ height: '23vh', width: '18vw', marginLeft: '5vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                    <BlockIcon style={{marginTop:'30px', fontSize:'50px'}}  />
                                    <h3 style={{ marginTop: '10px',  }}>Rules & Regulatioins</h3>
                                </div>
                            </div>
                            <div style={{ height: '23vh', width: '18vw', marginLeft: '5vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                    <ReceiptLongIcon style={{marginTop:'30px', fontSize:'50px'}}  />
                                    <h3 style={{ marginTop: '10px' }}>Receipt</h3>
                                </div>
                            </div>
                        </div>


                        <div style={{ width: '80%', marginTop: '40px', borderTop: '.25px solid gray' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '0px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '20%', marginTop: '30px' }}>
                                    <p style={{ cursor: 'pointer' }}>All</p>
                                    <p style={{ borderBottom: ' 4px solid #C67272',cursor: 'pointer' }}>Pending</p>
                                    <p style={{ cursor: 'pointer' }}>Approved</p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', marginTop: '25px' }}>
                                    <input placeholder='search' type="text" id="id" name="id" style={{ marginTop: '0px', width: '350px', height: '30px', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} />
                                    <SearchIcon style={{ position: 'absolute', right: 5, top: 2, color: 'gray' }} />
                                </div>
                            </div>

                        </div>

                        <div style={{ width: '80%', marginTop: '40px', }}>
                            <DataTable rows={rows} />
                        </div>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default New