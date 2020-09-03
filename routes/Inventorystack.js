import { createStackNavigator } from "react-navigation-stack";
import Invenoties from "../components/Inventoroies/Inventories";

const screens = {
  Inventories: {
    screen: Invenoties,
  },
};
const InventoryStack = createStackNavigator(screens);

export default InventoryStack;
