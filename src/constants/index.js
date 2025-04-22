
import { HiHome } from "react-icons/hi2"
import { MdSavings } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiViewList } from "react-icons/ci";


export default {
    NAVLINKS: [
        {
            name: "Home",
            path: "/dashboard",
            icon: HiHome,
        },
        {
            name: "Budget",
            path: "/dashboard/budget",
            icon: MdSavings,
        },
        {
            name: "Expenses",
            path: "/dashboard/expenses",
            icon: FaMoneyBillWave,
        },
        {
            name: "Income",
            path: "/dashboard/income",
            icon: MdAttachMoney,
        },
        {
            name: "Wishlist",
            path: "/dashboard/wishlist",
            icon: CiViewList,
        },
        {
            name: "Settings",
            path: "/dashboard/settings",
            icon: IoMdSettings,
        },
       
       

    ],
};