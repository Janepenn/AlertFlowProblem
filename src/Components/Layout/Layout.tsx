import React, { useState } from 'react'
import { Grid } from '@mui/material';
import LayoutBody from '../LayoutBody/LayoutBody';
import './Layout.scss';
import Sidebar from '../../Pages/Home/Components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
const Layout = () => {

	const [showPanel, setShowPanel] = useState<any>(false);
	const { bodyClassName } = useSelector((state:any) => state.bodyReducer);
  return (
	<Grid className={`alertFlowWrapper ${bodyClassName}`} container>
		<Grid className='alertFlowSidebar' container xs={2}>
			<Sidebar/>
		</Grid>
		<Grid className='layoutBodyWrapper' container xs={10} direction="column" >
			<LayoutBody/>
		</Grid>
	</Grid>
  )
}

export default Layout