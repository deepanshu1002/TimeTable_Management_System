<<<<<<< HEAD
import React from 'react';
import '../css_file/sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function SideBar() {
  
	return (
		<div>
			

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div id="wrapper" class="wrapper-content">
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="#/">
                    Bootdey.com
                </a>
            </li>
            <li>
                <a href="#/">Dashboard</a>
            </li>
            <li>
                <a href="#/">Shortcuts</a>
            </li>
            <li>
                <a href="#/">Overview</a>
            </li>
            <li>
                <a href="#/">Events</a>
            </li>
            <li class="active">
                <a href="#/">About</a>
            </li>
            <li>
                <a href="#/">Services</a>
            </li>
            <li>
                <a href="#/">Contact</a>
            </li>
        </ul>
    </div>

    <div id="page-content-wrapper">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button class="btn-menu btn btn-success btn-toggle-menu" type="button">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="#/" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="ti-panel"></i>
        						<p>Stats</p>
                            </a>
                        </li>
        				<li>
                            <a href="#/">
        						<i class="ti-settings"></i>
        						<p>Settings</p>
                            </a>
                        </li>
                    </ul>
        
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Sidebar Menu</h1>
                    <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, 
                    and will appear non-collapsed on larger screens.</p>
                    <p>Make sure to keep your content here</p>
                </div>
            </div>
        </div>
    </div>
</div>


		</div>
	);
}
export default SideBar;
=======
import React, { useState } from "react";
import "../css_file/sidebar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
		},
		{
			text: "Admin Profile",
			icon: "icons/user.svg",
		},
		{
			text: "Messages",
			icon: "icons/message.svg",
		},
		{
			text: "Analytics",
			icon: "icons/pie-chart.svg",
		},
		{
			text: "File Manager",
			icon: "icons/folder.svg",
		},
		{
			text: "Orders",
			icon: "icons/shopping-cart.svg",
		},
		{
			text: "Saved Items",
			icon: "icons/heart.svg",
		},
		{
			text: "Settings",
			icon: "icons/settings.svg",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper" style={{marginTop:'70px'}}>
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand" style={{marginTop:'22px'}}>
							<img src="icons/Logo.svg" alt="" srcset="" />
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideNavBar;
>>>>>>> 3c55cd798def85d126df7cc76ea09021897e58a6
