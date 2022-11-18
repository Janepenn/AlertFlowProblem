import React from 'react';
import { useLocation } from 'react-router-dom';
import keplerLogo from '../../../../Assets/img/logo-white-transparent.png';
import './Sidebar.scss';
import './PropertiesPanel.scss';
import { Grid } from '@mui/material';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBodyClassName } from '../../../../Redux/body';
import ConfigurationMenu from '../../../../Components/ConfigurationMenu/ConfigurationMenu';
const Sidebar = () => {

	const dispatch = useDispatch();
	const location = useLocation();

  return (
	<Grid container className='sidebar' direction="column" alignItems="center">
		<Link to={'/'}><img className='logo' src={keplerLogo} alt="" /></Link>
		<div className="sidebarTopButtons">
			<span id='backButton' onClick={() => dispatch(setBodyClassName('inactive'))}> {'< BACK'} </span>
		</div>
		{location.pathname === "/" && <nav>
			<div className="navLink active"><WidgetsOutlinedIcon/>New Alert Flow</div>
			<div className="navLink"><DescriptionOutlinedIcon/>Active Events Log</div>
			<div className="navLink"><AccountTreeOutlinedIcon/>Alert Flow Templates</div>
			<div className="navLink"><PhotoAlbumOutlinedIcon/>Contacts</div>
			<div className="navLink"><EmailOutlinedIcon/>Message Templates</div>
			<div className="navLink"><SettingsOutlinedIcon/>Settings</div>
		</nav>}
		{location.pathname === "/newDiagram" && <div id="sidebarPropertiesPanel">
		</div>}
	</Grid>
  )
}

export default Sidebar