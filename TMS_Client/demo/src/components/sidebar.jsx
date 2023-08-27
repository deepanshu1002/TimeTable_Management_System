import React from 'react';
import '../css_file/sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {
  
	return (
		<div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div className="container" >
    <div className="row">
        <div className="col-md-4 static">
            <div className="profile-card">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="user" className="profile-photo"/>
            	<h5><a href="#/" className="text-white">Sarah Cruiz</a></h5>
            	<a href="#/" className="text-white"><i className="fa fa-user"></i> 1,299 followers</a>
            </div>
            <ul className="nav-news-feed">
              <li><i className="fa fa-list-alt icon1"></i><div><a href="#/">My Newsfeed</a></div></li>
              <li><i className="fa fa-users icon2"></i><div><a href="#/">People Nearby</a></div></li>
              <li><i className="fa fa-user icon3"></i><div><a href="#/">Friends</a></div></li>
              <li><i className="fa fa-comments icon4"></i><div><a href="#/">Messages</a></div></li>
              <li><i className="fa fa-picture-o icon5"></i><div><a href="#/">Images</a></div></li>
              <li><i className="fa fa-video-camera icon6"></i><div><a href="#/">Videos</a></div></li>
            </ul>
            <div id="chat-block">
              <div className="title">Chat online</div>
              <ul className="online-users list-inline">
                <li><a href="#/" title="Linda Lohan"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" className="img-responsive profile-photo"/><span className="online-dot"></span></a></li>
                <li><a href="#/" title="Sophia Lee"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user" className="img-responsive profile-photo"/><span className="online-dot"></span></a></li>
                <li><a href="#/" title="John Doe"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="user" className="img-responsive profile-photo"/><span className="online-dot"></span></a></li>
                <li><a href="#/" title="Alexis Clark"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="user" className="img-responsive profile-photo"/><span className="online-dot"></span></a></li>
                <li><a href="#/" title="James Carter"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="user" className="img-responsive profile-photo"/><span className="online-dot"></span></a></li>
                <li><a href="#/" title="Robert Cook"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="user" className="img-responsive profile-photo"/><span className="online-dot"></span></a></li>
                <li><a href="#/" title="Richard Bell"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="user" className="img-responsive profile-photo"/><span className="online-dot"></span></a></li>
                <li><a href="#/" title="Anna Young"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" className="img-responsive profile-photo"/><span className="online-dot"></span></a></li>
                <li><a href="#/" title="Julia Cox"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user" className="img-responsive profile-photo"/><span className="online-dot"></span></a></li>
              </ul>
            </div>
        </div>
	</div>
</div>
		</div>
	);
}
export default Sidebar;