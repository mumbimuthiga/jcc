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
import DataTable2 from '../Reusable/DataTable2';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetAllLandQuery } from '../../redux/services/land';
import { useGetAllPayersQuery } from '../../redux/services/payers';


const theme = createTheme();

const Land = () => {

    const navigate = useNavigate();
    const { data, isLoading, isSuccess, error, isError } = useGetAllLandQuery()

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

                        <div style={{ width: '100%', position:"absolute", top:120, paddingLeft:"120px", paddingRight:"120px" }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '-10px', marginBottom: '-30px' }}>
                                <p style={{ fontSize: '18px' }} >Land</p>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#E4A51C', textTransform: 'capitalize', fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px' }}
                                    variant="contained"
                                    onClick={() => navigate('/register_land')}
                                    sx={{ mt: 3, mb: 2, }}
                                >
                                    Register New Land
                                </Button>
                            </div>
                        </div>
                        <div style={{ width: '80%',  position:"absolute", top:180, }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '0px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '20%', marginTop: '30px' }}>
                                    <p style={{ borderBottom: ' 4px solid #C67272', cursor: 'pointer' }}>All</p>
                                    <p style={{ cursor: 'pointer' }}>Pending</p>
                                    <p style={{ cursor: 'pointer' }}>Approved</p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', marginTop: '25px' }}>
                                    <input placeholder='search' type="text" id="id" name="id" style={{ marginTop: '0px', width: '350px', height: '30px', border: '1px solid gray', paddingLeft: '15px', fontStyle: 'italic' }} />
                                    <SearchIcon style={{ position: 'absolute', right: 5, top: 2, color: 'gray' }} />
                                </div>
                            </div>

                        </div>
                        <div style={{ width: '80%', marginTop: '40px',  position:"absolute", top:260,}}>
                            {isLoading && <CircularProgress disableShrink  style={{marginLeft:"45%", marginTop:'100px'}}/>}
                            {isError && error}
                            {isSuccess && <DataTable rows={data} />}
                            {/*<DataTable2/>*/}
                        </div>
                    </Box>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

export default Land