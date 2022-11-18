export const newDiagram = `<?xml version="1.0" encoding="UTF-8"?>
	<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:custom="http://custom/bpi/bpmn" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
  <bpmn2:process id="Process_1" isExecutable="false">
  	<bpmn2:startEvent id="Activity_0t8m451" />
    <custom:initialEvent id="Activity_0160y0e" name="Initial Event" />
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="Activity_0t8m451">
        <dc:Bounds x="580" y="32" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0160y0e_di" bpmnElement="Activity_0160y0e">
        <dc:Bounds x="461" y="95" width="274" height="50" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>
	`;
export const acceptedShapes = ["bpmn:StartEvent","custom:EmailPoll","custom:EmailNotifications", "custom:ConditionalRouter", "custom:NoAction", "custom:InitialEvent"];

export const events = [
	// 'element.hover',
	// 'element.out',
	'element.click',
	// 'element.dblclick',
	// 'element.mousedown',
	// 'element.mouseup'
  ];

export const customModel = {
	name: "Custom-BPMNExtension",
	uri: "http://custom/bpi/bpmn",
	prefix: "custom",
	xml: {
	  tagAlias: "lowerCase"
	},
	types: [
	  {
		name: "EmailPoll",
		superClass: ["bpmn:Task"],
		properties: [
		  {
			name: "renderings",
			type: "Rendering",
			isMany: true
		  },
		  {
			name: "implementation",
			isAttr: true,
			type: "String"
		  },
		  {
			name: "taskType",
			isMany: false,
			isReference: false,
			type: "String"
		  },
		  {
			name: "taskArguments",
			type: "taskArguments"
		  }
		]
	  },
	  {
		name: "EmailNotifications",
		superClass: ["bpmn:Task"],
		properties: [
		  {
			name: "renderings",
			type: "Rendering",
			isMany: true
		  },
		  {
			name: "implementation",
			isAttr: true,
			type: "String"
		  },
		  {
			name: "taskType",
			isMany: false,
			isReference: false,
			type: "String"
		  },
		  {
			name: "taskArguments",
			type: "taskArguments"
		  }
		]
	  },
	  {
		name: "ConditionalRouter",
		superClass: ["bpmn:Task"],
		properties: [
		  {
			name: "renderings",
			type: "Rendering",
			isMany: true
		  },
		  {
			name: "implementation",
			isAttr: true,
			type: "String"
		  },
		  {
			name: "taskType",
			isMany: false,
			isReference: false,
			type: "String"
		  },
		  {
			name: "taskArguments",
			type: "taskArguments"
		  }
		]
	  },
	  {
		name: "NoAction",
		superClass: ["bpmn:Task"],
		properties: [
		  {
			name: "renderings",
			type: "Rendering",
			isMany: true
		  },
		  {
			name: "implementation",
			isAttr: true,
			type: "String"
		  },
		  {
			name: "taskType",
			isMany: false,
			isReference: false,
			type: "String"
		  },
		  {
			name: "taskArguments",
			type: "taskArguments"
		  }
		]
	  },
	  {
		name: "InitialEvent",
		superClass: ["bpmn:Task"],
		properties: [
		  {
			name: "renderings",
			type: "Rendering",
			isMany: true
		  },
		  {
			name: "implementation",
			isAttr: true,
			type: "String"
		  },
		  {
			name: "taskType",
			isMany: false,
			isReference: false,
			type: "String"
		  },
		  {
			name: "taskArguments",
			type: "taskArguments"
		  }
		]
	  },
	  {
		name: "Argument",
		isAbstract: true,
		properties: [
		  {
			name: "argName",
			isAttr: true,
			type: "String"
		  },
		  {
			name: "argValue",
			isAttr: true,
			type: "String"
		  }
		]
	  },
	  {
		name: "inArgument",
		superClass: ["Argument"]
	  },
	  {
		name: "outArgument",
		superClass: ["Argument"]
	  },
	  {
		name: "taskArguments",
		properties: [
		  {
			name: "inArgument",
			type: "inArgument",
			isMany: true
		  },
		  {
			name: "outArgument",
			type: "outArgument",
			isMany: true
		  }
		]
	  }
	],
	emumerations: [],
	associations: []
};

export const customElements = ['custom:EmailPoll', 'custom:EmailNotifications', 'custom:ConditionalRouter', 'custom:NoAction', 'custom:InitialEvent'];