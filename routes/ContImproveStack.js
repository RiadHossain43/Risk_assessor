import { createStackNavigator } from "react-navigation-stack";
import ContImpove from "../components/ContinualImprovements/ContImpove";

const screens = {
  ContinualImprovements: {
    screen: ContImpove,
  },
};
const ContinualImprovementsStack = createStackNavigator(screens);

export default ContinualImprovementsStack;
