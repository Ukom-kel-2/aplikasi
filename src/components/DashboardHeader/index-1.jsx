import './styles.css';

import React from 'react';



function DashboardHeaders ({ btnText, onClick }) {
    return(
        <div className='dashbord-header-container'>
            {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }
        </div>
    )
}

export default DashboardHeaders;