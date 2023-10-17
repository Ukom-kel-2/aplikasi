// NonAdminLayout.js

import React from 'react';

const NonAdminLayout = ({ children }) => {
  return (
    <div className='non-admin-container'>
      {children}
    </div>
  );
}

export default NonAdminLayout;
