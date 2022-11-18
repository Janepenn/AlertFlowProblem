export default class CustomPalette {
	constructor(bpmnFactory, create, elementFactory, palette, translate) {
	  this.bpmnFactory = bpmnFactory;
	  this.create = create;
	  this.elementFactory = elementFactory;
	  this.translate = translate;
  
	  palette.registerProvider(this);
	}
  
	getPaletteEntries(element) {
	  const { bpmnFactory, create, elementFactory, translate } = this;
  
	  const createCustomELement = (elementName) => {
			return (event) => {
				const businessObject = bpmnFactory.create(`custom:${elementName}`);
		
				const shape = elementFactory.createShape({
				  type: `custom:${elementName}`,
				  businessObject
				});
		
				create.start(event, shape);
			  };
	  }
  
	  return {
		"create.emailPoll": {
		  group: "custom",
		  className: "emailPoll",
		  title: translate("Create Email Poll"),
		  action: {
			dragstart: createCustomELement('EmailPoll'),
			click: createCustomELement('EmailPoll')
		  }
		},
		"create.emailNotifications": {
			group: "custom",
			className: "emailNotifications",
			title: translate("Create Email Notifications"),
			action: {
			  dragstart: createCustomELement('EmailNotifications'),
			  click: createCustomELement('EmailNotifications'),
			}
		  },
	    "create.conditionalRouter": {
	  		group: "custom",
	  		className: "conditionalRouter",
	  		title: translate("Create Conditional Router"),
	  		action: {
	  		  dragstart: createCustomELement('ConditionalRouter'),
	  		  click: createCustomELement('ConditionalRouter')
	  	}
	    },
	    "create.noAction": {
	  		group: "custom",
	  		className: "noAction",
	  		title: translate("Create No Action"),
	  		action: {
	  		  dragstart: createCustomELement('NoAction'),
	  		  click: createCustomELement('NoAction')
	  		}
	    },
		"create.initialEvent": {
			group: "custom",
			className: "initialEvent",
			title: translate("Create Initial Event"),
			action: {
			  dragstart: createCustomELement('InitialEvent'),
			  click: createCustomELement('InitialEvent')
			}
	  }
	  };
	}
  }
  
  CustomPalette.$inject = [
	"bpmnFactory",
	"create",
	"elementFactory",
	"palette",
	"translate"
  ];
  