// Require your custom property entries.
import spellProps from "./parts/SpellProps";
import { is } from 'bpmn-js/lib/util/ModelUtil';

var LOW_PRIORITY = 500;

// Create the custom magic tab.
// The properties are organized in groups.
// function createMagicTabGroups(element, translate) {
//   // Create a group called "Black Magic".
//   var blackMagicGroup = {
//     id: "black-magic",
//     label: "Black Magic",
//     entries: []
//   };

//   // Add the spell props to the black magic group.
//   spellProps(blackMagicGroup, element, translate);

//   return [blackMagicGroup];
// }

function createMagicGroup(element, translate) {

	const magicGroup = {
	  id: 'magic',
	  label: translate('Magic properties'),
	 // entries: spellProps(element, translate)
	  entries:[]
	};
  
	console.log('magicGroup', magicGroup)
	return magicGroup
  }

export default function MagicPropertiesProvider(propertiesPanel, translate) {

//   this.getTabs = function (element) {

// 	/**
//      * We return a middleware that modifies
//      * the existing groups.
//      *
//      * @param {Object[]} tabs
//      *
//      * @return {Object[]} modified groups
//      */

//     return function (tabs) {
//       // Add the "magic" tab

// 	  if(is(element, 'bpmn:StartEvent')) {
//         tabs.push(createMagicTabGroups(element, translate));
//       }


//       // Show general + "magic" tab
//       return tabs;
//     };
//   };

  this.getGroups = function(element) {

    /**
     * We return a middleware that modifies
     * the existing groups.
     *
     * @param {Object[]} groups
     *
     * @return {Object[]} modified groups
     */
    return function(groups) {

      // Add the "magic" group
      if(is(element, 'custom:InitialEvent')) {
        groups.push(createMagicGroup(element, translate));
      }

      return groups;
    }
  };
  // Register our custom magic properties provider.
  // Use a lower priority to ensure it is loaded after the basic BPMN properties.
  propertiesPanel.registerProvider(LOW_PRIORITY, this);
}

MagicPropertiesProvider.$inject = ["propertiesPanel", "translate"];
