import { createStackNavigator } from "react-navigation-stack";
import Overview from "../components/Overview/Home";

const screens = {
  Overview: {
    screen: Overview,
  },
};
const HomeStack = createStackNavigator(screens);

export default HomeStack;
