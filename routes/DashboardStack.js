import { createStackNavigator } from "react-navigation-stack";
import Dashboard from "../components/Dashboard";

const screens = {
  Dashboard: {
    screen: Dashboard,
  },
};
const DashboardStack = createStackNavigator(screens);

export default DashboardStack;
