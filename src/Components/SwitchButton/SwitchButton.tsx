import React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import './SwitchButton.scss';

const SwitchButton = ({label} : {label:string}) => {

	const AntSwitch = styled(Switch)(({ theme }) => ({
		width: 50,
		height: 30,
		padding: 0,
		display: 'flex',
		'&:active': {
		  '& .MuiSwitch-thumb': {
			width: 15,
		  },
		  '& .MuiSwitch-switchBase.Mui-checked': {
			transform: 'translateX(0px)',
		  },
		},
		'& .MuiSwitch-switchBase': {
		  padding: 5,
		  '&.Mui-checked': {
			transform: 'translateX(20px)',
			color: '#fff',
			padding:5.1,
			'& + .MuiSwitch-track': {
			  opacity: 1,
			  backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#4472C4',
			},
		  },
		},
		'& .MuiSwitch-thumb': {
		  boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
		  color:'#1C4182',
		  width: 20,
		  height: 20,
		  borderRadius: 20,
		  transition: theme.transitions.create(['width'], {
			duration: 200,
		  }),
		},
		'& .MuiSwitch-track': {
		  borderRadius: 20,
		  opacity: 1,
		  backgroundColor:
			theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : '#4472C4',
		  boxSizing: 'border-box',
		},
	  }));

  return (
	<div className="switchButton">
		<AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
		<label>{label}</label>
	</div>
  )
}

export default SwitchButton