import { createStackNavigator } from "react-navigation-stack";
import Risk_Management from "../components/RiskMangement/AssesRisk";

const screens = {
  Risk_Management: {
    screen: Risk_Management,
  },
};
const AssesRiskStack = createStackNavigator(screens);

export default AssesRiskStack;
