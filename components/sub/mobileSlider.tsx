// import React, { useState } from 'react';

// const MobileSlider = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <div className="menu-icon" onClick={toggleSidebar}>
//         ☰ {/* Menu icon */}
//       </div>

//       <div className={`sidebar ${isSidebarOpen ? 'open-sidebar' : 'close-sidebar'}`}>
//         <div className="close-icon" onClick={toggleSidebar}>
//           ✖ {/* Close icon */}
//         </div>
//         <ul>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Skills</a></li>
//           <li><a href="#">Project</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//         <div className="social-icons">
//           <a href="#">Github</a>
//           <a href="#">Whatsapp</a>
//           <a href="#">Linkedin</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileSlider;
