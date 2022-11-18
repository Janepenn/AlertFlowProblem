import React from 'react';
import './ConfigurationMenu.scss';
import CustomSelectBox from '../CustomSelectBox/CustomSelectBox';
const ConfigurationMenu = () => {
  return (
	<div className='configurationMenu'>
		<CustomSelectBox label={"Alert Type"} placeholder={'Choose alert type...'} list={['apples','bananas']}/>
		<CustomSelectBox label={"Type Of Facilities"} placeholder={'Select type of facilities'} list={['apples','bananas']}/>
		<button id='saveButton'>SAVE</button>
	</div>
  )
}

export default ConfigurationMenu