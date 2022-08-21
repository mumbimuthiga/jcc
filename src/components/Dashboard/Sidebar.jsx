import React, { useState } from 'react'
import { RiLayoutGridFill, RiMenuLine } from 'react-icons/ri'

const styles = {
    sidebar: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        width: '220px',
        height: '100%',
        backgroundColor: 'gray',
        color: 'black'
    },
    sidebar_logo: {
        fontSize: '16px'
    },
    sidebar_icon: {
        width: '1.25em',
        height: '1.25em',
        marginRight: '16px',
        cursor: 'pointer',
    },
    sidebar_header: {
        display: 'flex',
        alignItems: 'center',
        padding: "16px"
    },
    sidebar_items: {
        display: 'flex',
        flexDirection: 'column',
        padding: "16 8px",
        paddingTop:'50px'
    },
    sidebar_item: {
        display: 'flex',
        alignItems: 'center',
        padding: "16px",
        cursor: 'pointer',
        marginTop:"-20px",
    },
    sidebar_collapsed:{
        
    }

}

function Sidebar() {

    const sidebarCollapsed = localStorage.getItem('sidebar-collapsed')
    const [isExpanded,setIsExpanded] = useState( sidebarCollapsed ? false : true)

    const handleToggler = () =>{
        if(isExpanded){
            setIsExpanded(false)
            return localStorage.getItem('sidebar-collapsed', true)
        }
        setIsExpanded(true)
        localStorage.removeItem('sidebar-collapsed')
    }

    return (
        <div style={isExpanded ? { position: 'fixed',top: 0,bottom: 0,left: 0,display: 'flex', flexDirection: 'column',width: '220px', height: '100%',  backgroundColor: 'gray', color: 'black'}: { position: 'fixed',top: 0,bottom: 0,left: 0,display: 'flex', flexDirection: 'column',width: '60px', height: '100%',  backgroundColor: 'gray', color: 'black'}}>
            <div style={styles.sidebar_header}>
                <RiMenuLine onClick={handleToggler} style={isExpanded ? {width: '1.25em',height: '1.25em', marginRight: '16px', cursor: 'pointer',} : { marginRight:'0px'}} />
                <p style={styles.sidebar_logo}>LOGO</p>
            </div>
            <div style={styles.sidebar_items}>
                <div style={styles.sidebar_item}>
                    <RiLayoutGridFill style={styles.sidebar_icon} />
                    <p style={styles.sidebar_logo}>Dashboard</p>
                </div>
                <div style={styles.sidebar_item}>
                    <RiLayoutGridFill style={styles.sidebar_icon} />
                    <p style={ isExpanded && { display:'none'}}>Dashoard</p>
                </div>

                <div style={styles.sidebar_item}>
                    <RiLayoutGridFill style={styles.sidebar_icon} />
                    <p style={styles.sidebar_logo}>Dashboard</p>
                </div>           
            </div>
        </div>
    )
}

export default Sidebar