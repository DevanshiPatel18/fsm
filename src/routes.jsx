import AllDashboardElements from "./components/Dashboard/Dashboard Elements/allElements";
import OrderHistory from "./components/Dashboard/Dashboard Elements/elements/orderHistory";
import { Assignment, Dashboard, LocalShipping } from "@material-ui/icons";
import Report from "./components/Dashboard/Dashboard Elements/elements/report";

const routes = [
    {
        path: '/',
        sidebarName: 'Dashboard',
        icon: Dashboard,
        component: AllDashboardElements
    },{
        path: '/todayreport',
        sidebarName: "Today's Report",
        icon: Assignment,
        component: Report
    },{
        path: '/orderHistory',
        sidebarName: 'Order History',
        icon: LocalShipping,
        component: OrderHistory
    }
]

export default routes;