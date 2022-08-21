import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AssignmentIcon from '@mui/icons-material/Assignment';



function Navbar({ component }) {
    const [sidebar, setSidebar] = useState(false);
    const navigate = useNavigate()

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className={sidebar ? 'menu-bars expanded' : 'menu-bars'}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <img alt="logo" src={require('../../assets/logo.png')} style={{ width: '40px', height: '40px', marginLeft: '50px' }} />
                    <p style={{ color: '#E4A51C', marginLeft: '30px' }}>JCC Revenue System</p>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <p style={{ color: '#fff', marginLeft: '200px' }}>Currency Rate:</p>
                        <img alt="logo" src={require('../../assets/USA.png')} style={{ width: '20px', height: '20px', marginLeft: '5px', marginRight: '5px' }} />
                        <p style={{ color: '#fff', }}>1 USD = </p>
                        <img alt="logo" src={require('../../assets/Kenya.png')} style={{ width: '20px', height: '20px', marginLeft: '5px', marginRight: '5px' }} />
                        <p style={{ color: '#fff', }}>113.78</p>
                        <NotificationsNoneIcon style={{ position: 'absolute', right: 35, color: 'white' }} />
                    </div>

                </div>

                <div style={sidebar ? {marginLeft:'300px', transition:'.4s', marginRight:'40px'}:{marginLeft:'0px'}}>
                    {component}
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: '-50px' }} >
                            <div style={{ height: '70px', width: '70px', backgroundColor: '#E0E0E0', borderRadius: '50%', marginRight: '10px', marginLeft: '-20px' }}>
                            </div>
                            <div style={{ cursor: 'pointer' }}>
                                <p style={{ marginRight: '2px', color: 'white', }}>Enock Agwera</p>
                                <p style={{ marginRight: '2px', color: 'white', marginTop: '-12px', fontSize: '14px' }}>agwera@gmail.com</p>
                                <p style={{ marginRight: '2px', color: 'white', marginTop: '-12px', fontSize: '14px' }}>Administrator</p>
                            </div>
                        </div>
                        <li className="nav-text" style={{ marginTop: '30px' }}>
                            <Link to='/'>
                                <DashboardIcon />
                                <span className={sidebar ? 'text' : 'text hidden'}>Dashoard</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/'>
                                <AddCircleIcon />
                                <span>Registration</span>
                            </Link>
                        </li>
                        <li className="nav-text" >
                            <Link to='/'>
                                <StickyNote2OutlinedIcon />
                                <span>Services</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/'>
                                <AccountBalanceWalletOutlinedIcon />
                                <span>Wallet</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/'>
                                <SettingsOutlinedIcon />
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/'>
                                <AssignmentIcon />
                                <span>Reports</span>
                            </Link>
                        </li>
                    </ul>
                    <div style={{ position: 'absolute', bottom: 50, marginLeft: '-120px', color: 'white' }}>
                        <ExitToAppIcon onClick={()=>navigate('/signin')} style={{cursor:'pointer',}}/>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
