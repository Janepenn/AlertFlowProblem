import React from 'react';
import './Home.scss';
import { Grid, Button } from '@mui/material';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
	<>
		<div className="homeHeader">
		</div>
		<Grid container justifyContent="center" direction="column" alignItems="center" className="homeContent">
			<h1>Create your first alert flow by clicking on the button below</h1>
			<Link to={"/newDiagram"}>
			<Button variant="contained" color="success">
				New Alert Flow
			</Button>
			</Link>
		</Grid>
	</>
  )
}

export default Home