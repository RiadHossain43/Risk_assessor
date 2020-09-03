import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./Homestack";
import InternalAuditStack from "./InternalAuditStack";
import AssesRiskStack from "./AssesRiskStack";
import InventoryStack from "./Inventorystack";
import ManagementReviewStack from "./ManagementReviewStack";
import ContinualImprovementStack from "./ContImproveStack";
const rootDrawer = createDrawerNavigator({
  Overview: {
    screen: HomeStack,
  },
  Inventories: {
    screen: InventoryStack,
  },
  Risk_Management: {
    screen: AssesRiskStack,
  },
  Internal_Audits: {
    screen: InternalAuditStack,
  },
  ManagementReview: {
    screen: ManagementReviewStack,
  },
  ContinualImprovement: {
    screen: ContinualImprovementStack,
  },
});

export default createAppContainer(rootDrawer);
