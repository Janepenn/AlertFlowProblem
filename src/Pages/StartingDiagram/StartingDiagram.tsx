import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import './StartingDiagram.scss';
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel';
import SwitchButton from "../../Components/SwitchButton/SwitchButton";
import Modeler from 'bpmn-js/lib/Modeler';
import customRendererModule from "./custom";
import magicPropertiesProviderModule from './custom/provider/magic';
import magicModdleDescriptor from './custom/descriptors/magic.json';
import { setBodyClassName } from "../../Redux/body";
import { newDiagram, acceptedShapes, events, customModel } from "./utils";

const StartingDiagram= () => {
	let modeler:any;
	const container = document.getElementById("startingDiagramContent");

	const [diagram, setDiagram] = useState<any>(undefined);
	const dispatch = useDispatch();
	
	const createModelerAndImportDiagram = async () => {
		 modeler = new Modeler({
			container,
			keyboard: {
			  bindTo: document
			},
			propertiesPanel: {
				parent: '#sidebarPropertiesPanel' 
			},
			additionalModules: [
				BpmnPropertiesPanelModule,
				BpmnPropertiesProviderModule,
				[customRendererModule],
				magicPropertiesProviderModule
			  ],
			
 			 moddleExtensions: {
   				custom: customModel,
				magic: magicModdleDescriptor,
  			}
		}) as any;
	
		await modeler.importXML(diagram)
		modeler.get('canvas').zoom('fit-viewport');
		const eventBus = modeler.get('eventBus');

		events.forEach(function(event) {

			eventBus.on(event, function(e:any) {
			  // e.element = the model element
			  // e.gfx = the graphical element
		  
			  console.log(event, 'on', e.element.type);
			  if(acceptedShapes.includes(e.element.type)){
				dispatch(setBodyClassName('active'));
			  }
			  if(e.element.type === 'bpmn:Process'){
				dispatch(setBodyClassName('inactive'));
			  }
			});
		  });
	}

	const downloadBpmn = async () => {
		const { xml } = await modeler.saveXML({ format: true });
		console.log(xml);
	}

  	useEffect(() => {
	if(!diagram) {
		setDiagram(newDiagram)
	} else {
		createModelerAndImportDiagram()
	}
	//eslint-disable-next-line react-hooks/exhaustive-deps
  	}, [diagram]);

  return (
      <>
	  	<div className="startingDiagramHeader" onClick={() => dispatch(setBodyClassName('inactive'))}>
		  <span>Untitled Draft / <span>Save</span></span>
		  <div className="actionButtons">
		  <button id="downloadLink" onClick={() => {downloadBpmn()}}>
			SAVE
		  </button>
          <SwitchButton label={'Publish'}/>
		  </div>
		</div>
		
		<div
        	id="startingDiagramContent"
			className="startingDiagramContent">
		</div>
	  </>
    
  );
}
export default StartingDiagram;
