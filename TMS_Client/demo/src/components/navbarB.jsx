// import React from "react";
// // import "../Navbar.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
// function NavbarA() {
//   return (
//     <>
//       <nav class="navbar navbar-expand-md navbar-light bg-primary fixed-top" >
//         <a class="navbar-brand" href style={{fontStyle:"italic", marginLeft:'8px', fontSize:'30px', color:'white'}}>
//           Timetable Management System
//         </a>
//         &nbsp;&nbsp;&nbsp;&nbsp;
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarsExampleDefault"
//           aria-controls="navbarsExampleDefault"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
         
//         <div style={{cursor:"pointer"}} class="collapse navbar-collapse" id="navbarsExampleDefault">
//           <ul class="navbar-nav">
//             <li class="nav-item">
//               <a class="nav-link">Home</a>
//             </li>
//             &nbsp;&nbsp;
//             <li class="nav-item">
//               <a class="nav-link">About</a>
//             </li>
//             &nbsp;&nbsp;
//             <li class="nav-item">
//               <a class="nav-link">Contact</a>
//             </li>
//             &nbsp;&nbsp;
//             <li class="nav-item dropdown">
//               <a
//                 class="nav-link dropdown-toggle"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <div class="dropdown-menu">
//                 <a class="dropdown-item">Action</a>
//                 <a class="dropdown-item">Another action</a>
//                 <a class="dropdown-item">Something else here</a>
//                 <div class="dropdown-divider"></div>
//                 <a class="dropdown-item">Separated link</a>
//                 <a class="dropdown-item">One more separated link</a>
//               </div>
//             </li>
//           </ul>
//           &nbsp;&nbsp;
//           <ul class="navbar-nav">
//             <li class="nav-item">
//               <a class="nav-link" data-class="fixed-left">
//                 <i class="fa fa-arrow-left"></i>
//                 Fixed Left
//               </a>
//             </li>
//             &nbsp;&nbsp;
//             <li class="nav-item">
//               <a class="nav-link" data-class="fixed-top">
//                 <i class="fa fa-arrow-up"></i>
//                 Fixed Top
//                 <small>(original)</small>
//               </a>
//             </li>
//             &nbsp;&nbsp;
//             <li class="nav-item">
//               <a class="nav-link" data-class="fixed-right">
//                 <i class="fa fa-arrow-right"></i>
//                 Fixed Right
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//        {/* <div class="l-navbar" id="nav-bar">
//         <nav class="nav">
//             <div> <a href="#" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">BBBootstrap</span> </a>
//                 <div class="nav_list"> <a href="#" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </a> <a href="#" class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">Users</span> </a> <a href="#" class="nav_link"> <i class='bx bx-message-square-detail nav_icon'></i> <span class="nav_name">Messages</span> </a> <a href="#" class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Bookmark</span> </a> <a href="#" class="nav_link"> <i class='bx bx-folder nav_icon'></i> <span class="nav_name">Files</span> </a> <a href="#" class="nav_link"> <i class='bx bx-bar-chart-alt-2 nav_icon'></i> <span class="nav_name">Stats</span> </a> </div>
//             </div> <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
//         </nav>
//     </div>
    
//     <div class="height-100 bg-light">
//         <h4>Main Components</h4>
//     </div> */}
//     </>
//   );
// }
// export default NavbarA;

import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"; // Make sure to include the Bootstrap JavaScript bundle
import 'bootstrap/dist/js/bootstrap.bundle'

function NavbarB() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary fixed-top">
      <a className="navbar-brand" href="#" style={{fontStyle:"normal", marginLeft:'8px', fontSize:'30px', color:'white'}}>
        Timetable Management System
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              HomeB
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
              <a className="dropdown-item" href="#">
                One more separated link
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarB;
