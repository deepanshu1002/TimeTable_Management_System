import React from 'react';
import '../css_file/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  
	return (
		<div>
			                      
<div class="navbar navbar-fixed-top header">
     <div class="col-md-12">
        <div class="navbar-header">
          <a class="navbar-brand" href="#/">Dey-Dey</a>
          <button data-target="#navbar-collapse1" data-toggle="collapse" class="navbar-toggle" type="button">
          <i class="glyphicon glyphicon-search"></i>
          </button>
      
        </div>
        <div id="navbar-collapse1" class="collapse navbar-collapse">
          <form class="navbar-form pull-left">
              <div style={{/*max-width:470px;*/}} class="input-group">
                <input type="text" id="srch-term" name="srch-term" placeholder="Search" class="form-control"/>
                <div class="input-group-btn">
                  <button type="submit" class="btn btn-default btn-primary"><i class="glyphicon glyphicon-search"></i></button>
                </div>
              </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
             <li><a target="_ext" href="http://www.bootdey.com">Bootdey.com</a></li>
             <li>
                <a data-toggle="dropdown" class="dropdown-toggle" href="#/"><i class="glyphicon glyphicon-bell"></i></a>
                <ul class="dropdown-menu">
                  <li><a href="#/"><span class="badge pull-right">40</span>Link</a></li>
                  <li><a href="#/"><span class="badge pull-right">2</span>Link</a></li>
                  <li><a href="#/"><span class="badge pull-right">0</span>Link</a></li>
                  <li><a href="#/"><span class="label label-info pull-right">1</span>Link</a></li>
                  <li><a href="#/"><span class="badge pull-right">13</span>Link</a></li>
                </ul>
             </li>
             <li><a id="btnToggle" href="#/"><i class="glyphicon glyphicon-th-large"></i></a></li>
             <li><a href="#/"><i class="glyphicon glyphicon-user"></i></a></li>
           </ul>
        </div>    
     </div>	
</div>

<div id="subnav" class="navbar navbar-default">
    <div class="col-md-12">
        <div class="navbar-header">
          
          <a data-toggle="dropdown" class="navbar-btn btn btn-default btn-plus dropdown-toggle" style={{/*margin-left:15px;*/}} href="#/"><i style={{/*color:#dd1111;*/}} class="glyphicon glyphicon-home"></i> Home <small><i class="glyphicon glyphicon-chevron-down"></i></small></a>
          <ul class="nav dropdown-menu">
              <li><a href="#/"><i style={{/*color:#1111dd;*/}} class="glyphicon glyphicon-user"></i> Profile</a></li>
              <li><a href="#/"><i style={{/*color:#0000aa;*/}} class="glyphicon glyphicon-dashboard"></i> Dashboard</a></li>
              <li><a href="#/"><i style={{/*color:#11dd11;*/}} class="glyphicon glyphicon-inbox"></i> Pages</a></li>
              <li class="nav-divider"></li>
              <li><a href="#/"><i style={{/*color:#dd1111;*/}} class="glyphicon glyphicon-cog"></i> Settings</a></li>
              <li><a href="#/"><i class="glyphicon glyphicon-plus"></i> More..</a></li>
          </ul>
          
          
          <button data-target="#navbar-collapse2" data-toggle="collapse" class="navbar-toggle" type="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
      
        </div>
        <div id="navbar-collapse2" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
             <li class="active"><a href="#/">Posts</a></li>
             <li><a data-toggle="modal" role="button" href="#loginModal">Login</a></li>
             <li><a data-toggle="modal" role="button" href="#aboutModal">About</a></li>
           </ul>
        </div>    
     </div>	
</div>                                                                                                                                            
		</div>
	);
}
export default Navbar;