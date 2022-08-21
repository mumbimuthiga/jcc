import * as React from 'react';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import ApexCharts from "react-apexcharts";
import { chartData } from './chartData';

const theme = createTheme();

const Wallet = () => {


    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Navbar loggedIn={true} />
                <CssBaseline />
                <Grid item xs={12} sm={8} md={12} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            mb: 10,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: '50px', marginTop: '20px', marginBottom: '20px' }}>
                            <p style={{ fontSize: '20px', }}>Wallet</p>
                        </div>


                        <div style={{ display: 'flex', paddingTop: '5px', flexDirection: 'row', backgroundColor: '#F8F8F8', paddingLeft: '30px', paddingRight: '30px', marginLeft: '60px', boxShadow: '1px 1px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: '5px', width: '55%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', }}>
                                {/*<div style={{marginRight: '150px'}}></div>*/}
                                <p style={{ whitespace: 'nowrap', fontWeight: 'bold', fontSize: '15px', }}>Account Summary</p>
                                <p style={{ whitespace: 'nowrap', fontSize: '14px', marginTop: '30px' }}>Total Balance</p>
                                <h4 style={{ marginTop: '-7px', marginRight: '150px' }}>$530,093.65</h4>
                            </div>

                            <hr style={{ height: '120px', marginTop: '20px', }} />

                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px', width: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p style={{ fontSize: '15px' }}>Account Number</p>
                                    <h5 style={{ textAlign: 'center' }}>12509674</h5>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-20px', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p style={{ fontSize: '15px' }}>Total Transactions</p>
                                    <h4 style={{ textAlign: 'center' }}>125</h4>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-20px', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p style={{ fontSize: '15px' }}>Default mode of payment</p>
                                    <h4 style={{ textAlign: 'center' }}>XXX 0012</h4>
                                </div>
                            </div>
                        </div>


                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px' }}>

                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '60px', width: '55%', height: '100%' }}>
                                <div style={{ display: 'flex', backgroundColor: '#F8F8F8', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', boxShadow: '1px 1px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: '5px', }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <div onClick={() => navigate('/link_a_card')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backgroundColor: '#F8F8F8', height: '70px', width: '90px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '5px', marginTop: '60px', }}>
                                            <AddCardOutlinedIcon style={{ fontSize: '36px', }} />
                                        </div>
                                        <p style={{ marginBottom: '40px', fontSize: '14px' }}>Link a card</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <div onClick={() => navigate('/add_currency')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backgroundColor: '#F8F8F8', height: '70px', width: '90px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '5px', marginTop: '60px', }}>
                                            <PaidRoundedIcon style={{ fontSize: '36px', }} />
                                        </div>
                                        <p style={{ marginBottom: '40px', fontSize: '14px' }}>Add Currency</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <div onClick={() => navigate('/topup_account')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backgroundColor: '#F8F8F8', height: '70px', width: '90px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '5px', marginTop: '60px', }}>
                                            <AccountBalanceWalletRoundedIcon style={{ fontSize: '36px', }} />
                                        </div>
                                        <p style={{ marginBottom: '40px', fontSize: '14px' }}>Top up account</p>
                                    </div>
                                </div>

                                <div style={{ boxShadow: '1px 1px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: '5px', marginTop: '50px', paddingBottom: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
                                    <ApexCharts options={chartData.options} series={chartData.series} type='area' height={300} />
                                </div>

                            </div>

                            <div style={{ marginLeft: '50px', paddingLeft: '20px', marginRight: '50px', display: 'flex', flexDirection: 'column', width: '32.5%', backgroundColor: '#F8F8F8', boxShadow: '0px 1px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}>
                                <p>Today | 16 Feb 2022</p>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-5px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px' }}>
                                        <AddRoundedIcon style={{ color: 'green' }} />
                                        <p style={{ marginLeft: '20px', fontSize: '15px' }}>Received from Glopay <br /> <span style={{ fontSize: '12px' }}>Funds Transfer</span> </p>
                                    </div>
                                    <h5 style={{ marginRight: '30px' }}>$235</h5>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-5px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px' }}>
                                        <RemoveRoundedIcon style={{ color: 'red' }} />
                                        <p style={{ marginLeft: '20px', fontSize: '15px' }}>Start to build permit <br /> <span style={{ fontSize: '12px' }}>Payment</span> </p>
                                    </div>
                                    <h5 style={{ marginRight: '30px' }}>$122</h5>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-5px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px' }}>
                                        <RemoveRoundedIcon style={{ color: 'red' }} />
                                        <p style={{ marginLeft: '20px', fontSize: '15px' }}>Application Fee <br /> <span style={{ fontSize: '12px' }}>Payment</span> </p>
                                    </div>
                                    <h5 style={{ marginRight: '30px' }}>$100</h5>
                                </div>

                                <p>Yesterday | 15 Feb 2022</p>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-5px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px' }}>
                                        <AddRoundedIcon style={{ color: 'green' }} />
                                        <p style={{ marginLeft: '20px', fontSize: '15px' }}>Received from Glopay <br /> <span style={{ fontSize: '12px' }}>Funds Transfer</span> </p>
                                    </div>
                                    <h5 style={{ marginRight: '30px' }}>$235</h5>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-5px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px' }}>
                                        <RemoveRoundedIcon style={{ color: 'red' }} />
                                        <p style={{ marginLeft: '20px', fontSize: '15px' }}>Start to build permit <br /> <span style={{ fontSize: '12px' }}>Payment</span> </p>
                                    </div>
                                    <h5 style={{ marginRight: '30px' }}>$122</h5>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '-5px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px' }}>
                                        <RemoveRoundedIcon style={{ color: 'red' }} />
                                        <p style={{ marginLeft: '20px', fontSize: '15px' }}>Application Fee <br /> <span style={{ fontSize: '12px' }}>Payment</span> </p>
                                    </div>
                                    <h5 style={{ marginRight: '30px' }}>$100</h5>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider >
    );
}

export default Wallet