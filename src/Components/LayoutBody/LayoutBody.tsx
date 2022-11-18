import React from 'react'
import './LayoutBody.scss';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import StartingDiagram from '../../Pages/StartingDiagram/StartingDiagram';

const LayoutBody = () => {
  return (
	<>
		<Routes>
			<Route path={'/'} element={<Home/>}/>
			<Route path={'/newDiagram'} element={<StartingDiagram/>}/>
		</Routes>
	</>
  )
}

export default LayoutBody