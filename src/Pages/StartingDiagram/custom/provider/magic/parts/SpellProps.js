import { useService } from 'bpmn-js-properties-panel';
import {
  is
} from 'bpmn-js/lib/util/ModelUtil';
import { TextFieldEntry, isTextFieldEntryEdited } from '@bpmn-io/properties-panel';

export default function(element, translate) {
	console.log('element', element)
  if (is(element, 'custom:InitialEvent')) {
	return[
		{
			id: 'spell',
			element,
			component: Spell(element, 'spell'),
			isEdited: isTextFieldEntryEdited
		  }
	]
  }
}



function Spell(element, id) {

	

  const modeling = useService('modeling');
  const translate = useService('translate');
  const debounce = useService('debounceInput');

  const getValue = () => {
    return element.businessObject.spell || '';
  }

  const setValue = value => {
    return modeling.updateProperties(element, {
      spell: value
    });
  }

  return <TextFieldEntry
    id={id}
    element={ element }
    description={"Apply a black magic spell"}
    label={ "Spell" }
    getValue={ getValue }
    setValue={ setValue }
    debounce={ debounce }
  />
}
