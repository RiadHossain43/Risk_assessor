import { createStackNavigator } from "react-navigation-stack";
import MngmntReview from "../components/ManagementReview/MngmntReview";

const screens = {
  ManagementReview: {
    screen: MngmntReview,
  },
};
const ManagementReviewStack = createStackNavigator(screens);

export default ManagementReviewStack;
