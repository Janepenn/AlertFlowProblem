import CustomRenderer from "./CustomRenderer";
import CustomPalette from "./CustomPalette";
import CustomElementFactory from "./CustomElementFactory";
import MagicPropertiesProvider from "./provider/magic/MagicPropertiesProvider";
export default {
  __init__: ["customRenderer", "customPalette", ],
  customRenderer: ["type", CustomRenderer],
  customPalette: ["type", CustomPalette],
  elementFactory: ["type", CustomElementFactory],
};
