import BaseRenderer from "diagram-js/lib/draw/BaseRenderer";

import { assign } from "min-dash";

import {
  append as svgAppend,
  attr as svgAttr,
  create as svgCreate,
  classes as svgClasses
} from "tiny-svg";

import {
  getRoundRectPath,
  getSemantic,
  getLabelColor
} from "bpmn-js/lib/draw/BpmnRenderUtil";

import { is } from "bpmn-js/lib/util/ModelUtil";
import { isAny } from "bpmn-js/lib/features/modeling/util/ModelingUtil";

const HIGH_PRIORITY = 1500,
  TASK_BORDER_RADIUS = 25

export default class CustomRenderer extends BaseRenderer {

  constructor(config, eventBus, bpmnRenderer, textRenderer, styles) {
    super(eventBus, HIGH_PRIORITY);

    this.bpmnRenderer = bpmnRenderer;

    this.computeStyle = styles.computeStyle;
    this.textRenderer = textRenderer;

    this.defaultFillColor = config && config.defaultFillColor;
    this.defaultStrokeColor = config && config.defaultStrokeColor;
    this.defaultLabelColor = config && config.defaultLabelColor;
  }

  canRender(element) {
    // only render tasks and events (ignore labels)
    return isAny(element, ["custom:EmailPoll", "custom:EmailNotifications", "custom:ConditionalRouter", "custom:NoAction", "custom:InitialEvent"]) && !element.labelTarget;
  }

  drawShape(parentNode, element) {
    var rect;
	
    if (is(element, "custom:EmailPoll")) {
    
		const rectangleAttributes = {
			parentNode,
			width:274,
			height:50,
			borderRadius: TASK_BORDER_RADIUS,
			stroke: '#4472C4',
			fill: 'transparent',
		}

      rect = drawRect(rectangleAttributes);

      this.renderEmbeddedLabel(
        parentNode,
        element,
        "center-middle",
        getLabelColor(element, this.defaultLabelColor, this.defaultStrokeColor)
      );

      return rect;
    } 
	else if(is(element, "custom:EmailNotifications")){
	
		const rectangleAttributes = {
			parentNode,
			width:274,
			height:50,
			borderRadius: TASK_BORDER_RADIUS,
			stroke: '#4472C4',
			fill: 'transparent',
		}

		  rect = drawRect(rectangleAttributes);
	
		  this.renderEmbeddedLabel(
			parentNode,
			element,
			"center-middle",
			getLabelColor(element, this.defaultLabelColor, this.defaultStrokeColor)
		  );
	
		  return rect;
	} 
	else if(is(element, "custom:ConditionalRouter")){
	
		const rectangleAttributes = {
			parentNode,
			width:274,
			height:50,
			borderRadius: TASK_BORDER_RADIUS,
			stroke: '#4472C4',
			fill: 'transparent',
		}

		  rect = drawRect(rectangleAttributes);
	
		  this.renderEmbeddedLabel(
			parentNode,
			element,
			"center-middle",
			getLabelColor(element, this.defaultLabelColor, this.defaultStrokeColor)
		  );
	
		  return rect;
	} 
	else if(is(element, "custom:NoAction")){
		const rectangleAttributes = {
			parentNode,
			width:274,
			height:50,
			borderRadius: TASK_BORDER_RADIUS,
			stroke: '#83B981 ',
			fill: ' #83B981 ',
		}

		  rect = drawRect(rectangleAttributes);
	
		  this.renderEmbeddedLabel(
			parentNode,
			element,
			"center-middle",
			getLabelColor(element, this.defaultLabelColor, this.defaultStrokeColor)
		  );
	
		  return rect;
	} 
	else if(is(element, "custom:InitialEvent")){
		
		const rectangleAttributes = {
			parentNode,
			width:274,
			height:50,
			borderRadius: TASK_BORDER_RADIUS,
			stroke: '#4472C4',
			fill: ' #4472C4 ',
		}

		  rect = drawRect(rectangleAttributes);
	
		  this.renderEmbeddedLabel(
			parentNode,
			element,
			"center-middle",
			getLabelColor(element, this.defaultLabelColor, this.defaultStrokeColor)
		  );
	
		  return rect;
	}
	else {
      return this.bpmnRenderer.drawShape(parentNode, element);
    }

	
  }

  getShapePath(shape) {
    if (isAny(shape, ["custom:EmailPoll", "custom:EmailNotifications", "custom:ConditionalRouter", "custom:NoAction", "custom:InitialEvent"])) {
      return getRoundRectPath(shape, TASK_BORDER_RADIUS);
    }
    return this.bpmnRenderer.getShapePath(shape);
  }

  renderEmbeddedLabel(parentGfx, element, align) {
    var semantic = getSemantic(element);

    return this.renderLabel(parentGfx, semantic.name, {
      box: element,
      align: align,
      padding: 5,
      style: {
        fill: getLabelColor(
          element,
          this.defaultLabelColor,
          this.defaultStrokeColor
        )
      }
    });
  }

  renderLabel(parentGfx, label, options) {
    options = assign(
      {
        size: {
          width: 100
        }
      },
      options
    );

    var text = this.textRenderer.createText(label || "", options);

    svgClasses(text).add("djs-label");

    svgAppend(parentGfx, text);

    return text;
  }
}

CustomRenderer.$inject = [
  "config.bpmnRenderer",
  "eventBus",
  "bpmnRenderer",
  "textRenderer",
  "styles"
];

// helpers //////////

// copied from https://github.com/bpmn-io/bpmn-js/blob/master/lib/draw/BpmnRenderer.js

function drawRect(rectangleAttributes) {
  const rect = svgCreate("rect");
  const { width, height, borderRadius, stroke, fill } = rectangleAttributes;
  
  svgAttr(rect, {
    width: width,
    height: height,
    rx: borderRadius,
    ry: borderRadius,
	stroke,
    strokeWidth: 2,
    fill,
  });

  svgAppend(rectangleAttributes.parentNode, rect);

  return rect;
}
