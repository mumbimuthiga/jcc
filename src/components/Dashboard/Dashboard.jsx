import React from 'react'
import Navbar from './Navbar'

const DashboardComponent = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
                <div style={{ height: '23vh', width: '20vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>

                </div>
                <div style={{ height: '23vh', width: '20vw', marginLeft: '5vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>

                </div>
                <div style={{ height: '23vh', width: '20vw', marginLeft: '5vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>

                </div>
                <div style={{ height: '23vh', width: '20vw', marginLeft: '5vw', borderRadius: '5px', backgroundColor: '#E0E0E0', boxShadow: '0px 7px 6px rgba(0, 0, 0, 0.25)' }}>
                </div>
            </div>
        </>
    )
}

function Dashboard() {
    return (
        <Navbar component={<DashboardComponent />} />
    )
}

export default Dashboard