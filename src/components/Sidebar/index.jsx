// import './styles.css';

// import React, {
//   useEffect,
//   useState,
// } from 'react';

// import { useLocation } from 'react-router-dom';

// import logo from '../../assets/icons/logo.png';
// import LogoutIcon from '../../assets/icons/logout.svg';
// import SideBarItem from './sidebar-item';

// function SideBar ({ menu }) {
    
//     const location = useLocation();

//     const [active, setActive] = useState(1);

//     useEffect(() => {
//         menu.forEach(element => {
//             if (location.pathname === element.path) {
//                 setActive(element.id);
//             }
//         });
//     }, [location.pathname, menu])

//     const __navigate = (id) => {
//         setActive(id);
//     }

//     return(
//         <nav className='sidebar'>
//             <div className='sidebar-container'>
//                 <div className='sidebar-logo-container'>
//                     <img
//                         src={logo}
//                         alt="logo" />
//                 </div>

//                 <div className='sidebar-container'>
//                     <div className='sidebar-items'>
//                         {menu.map((item, index) => (
//                             <div key={index} onClick={() => __navigate(item.id)}>
//                                 <SideBarItem
//                                     active={item.id === active}
//                                     item={item} />
//                             </div>
//                         ))}
//                     </div>

//                     <div className='sidebar-footer'>
//                         <a href="/login"> Logout</a>
//                         <img 
//                             src={LogoutIcon}
//                             alt='icon-logout'
//                             className='sidebar-item-icon' />
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default SideBar;

// import React, {
//   useEffect,
//   useState,
// } from 'react';

// import {
//   useLocation,
//   useNavigate,
// } from 'react-router-dom';

// import logo from '../../assets/icons/logo.png';
// import LogoutIcon from '../../assets/icons/logout.svg';
// import SideBarItem from './sidebar-item';

// function SideBar({ menu }) {
//   const location = useLocation();
//   const history = useNavigate();

//   const [active, setActive] = useState(1);

//   useEffect(() => {
//     menu.forEach((element) => {
//       if (location.pathname === element.path) {
//         setActive(element.id);
//       }
//     });
//   }, [location.pathname, menu]);

//   const __navigate = (id) => {
//     setActive(id);
//   };

//   const handleLogout = () => {
//     // Navigasi ke halaman login saat Logout diklik
//     __navigate('/login');
//   };

//   return (
//     <nav className='sidebar'>
//       <div className='sidebar-container'>
//         <div className='sidebar-logo-container'>
//           <img src={logo} alt="logo" />
//         </div>

//         <div className='sidebar-container'>
//           <div className='sidebar-items'>
//             {menu.map((item, index) => (
//               <div key={index} onClick={() => __navigate(item.id)}>
//                 <SideBarItem active={item.id === active} item={item} />
//               </div>
//             ))}
//           </div>

//           <div className='sidebar-footer'>
            
//             <a href="/" onClick={handleLogout}>
//               Logout
//             </a>
//             <img src={LogoutIcon} alt='icon-logout' className='sidebar-item-icon' />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default SideBar;

import './styles.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

import logo from '../../assets/icons/logo.png';
import LogoutIcon from '../../assets/icons/logout.svg';
import SideBarItem from './sidebar-item';

function Sidebar({ menu }) {
  const location = useLocation();
  const navigate = useNavigate ()
  const history = useNavigate();
  const [active, setActive] = useState(1);

  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname, menu]);

  const __navigate = (id) => {
    setActive(id);
  };

  const handleLogout = () => {
    // Navigasi ke halaman login saat Logout diklik
    __navigate(1); // Kembali ke halaman pertama saat logout
  };

  return (
    <nav className='sidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-logo-container'>
          <img src={logo} alt="logo" />
        </div>

        <div className='sidebar-container'>
          <div className='sidebar-items'>
            {menu.map((item) => (
              <div key={item.id} onClick={() => __navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>
       <div className='sidebar-itemss'>
          <div className='sidebar-footer'>
            
          <button className='sidebar-items-warna' onClick={()=>navigate ('/login')}>
					<span>Log Out</span>
					
							
            <img src={LogoutIcon} alt='icon-logout' className='sidebar-item-icon' />
            </button>	
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;



