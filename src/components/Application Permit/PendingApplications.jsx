import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import DataTable from '../Reusable/Datatable';
import SearchIcon from '@mui/icons-material/Search';

const rows = [
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


const theme = createTheme();

const PendingApplications = () => {

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

                        <div style={{ width: '80%', marginTop: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '-20px' }}>
                                <p style={{ fontSize: '18px' }} >Pending Permits</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '0px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '20%',marginTop:'30px' }}>
                                    <p style={{ cursor: 'pointer' }}>All</p>
                                    <p style={{ cursor: 'pointer',borderBottom: ' 4px solid #C67272', }}>Pending</p>
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

export default PendingApplications