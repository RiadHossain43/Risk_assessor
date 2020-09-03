import { createStackNavigator } from "react-navigation-stack";
import InternalAudits from "../components/Audits/InternalAudits";

const screens = {
  InternalAudits: {
    screen: InternalAudits,
  },
};
const InternalAuditStack = createStackNavigator(screens);

export default InternalAuditStack;
