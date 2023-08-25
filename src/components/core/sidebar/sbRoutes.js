import {
  FaHome, FaListUl, FaLock, FaMoneyBill, FaUser, FaSignOutAlt,
  FaArtstation, FaMoneyCheck, FaChalkboardTeacher
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";

export const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/hrm",
    name: "Hrm",
    icon: <FaPeopleGroup />,
    subRoutes: [
      {
        path: "/hrm/allemployees",
        name: "Employees",
        icon: "",
      },
      {
        path: "/hrm/employee-list",
        name: "Employee List",
        icon: "",
      },
      {
        path: "/hrm/holidays",
        name: "Holidays",
        icon: "",
      },
      {
        path: "/leaves",
        name: "Employee Leave",
        icon: ""
      },
      {
        path: "/departments",
        name: "Departments",
        icon: ""
      },
      {
        path: "/designations",
        name: "Designations",
        icon: ""
      },
      {
        path: "/timesheet",
        name: "Timesheet",
        icon: ""
      },
      {
        path: "/overtime",
        name: "Overtime",
        icon: ""
      },
    ]
  },
  {
    path: "/accounts",
    name: "Account",
    icon: <FaArtstation />,
    subRoutes: [
      {
        path: "/hrm/accounts/invoices",
        name: "Invoices",
        icon: "",
      },
      {
        path: "/hrm/accounts/payments",
        name: "Payments",
        icon: "",
      },
      {
        path: "/hrm/accounts/expenses",
        name: "Expenses",
        icon: "",
      },
      {
        path: "/hrm/accounts/pf",
        name: "Provident Funds",
        icon: "",
      },
      {
        path: "/hrm/accounts/taxes",
        name: "Taxes",
        icon: "",
      },
    ]
  },
  {
    path: "/payroll",
    name: "Payroll",
    icon: <FaMoneyCheck />,
    subRoutes: [
      {
        path: "/hrm/accounts/salary",
        name: "Employee Salary",
        icon: "",
      },
      {
        path: "/hrm/accounts/payslip",
        name: "Payslip",
        icon: "",
      },
      {
        path: "/hrm/accounts/items",
        name: "Payroll Items",
        icon: "",
      },
    ]
  },
  {
    path: "/goals",
    name: "Goals",
    icon: <BiAnalyse />,
    subRoutes: [
      {
        path: "/hrm/goallist",
        name: "Goal List",
        icon: <FaListUl />,
      },
      {
        path: "/hrm/goaltype",
        name: "Goal Type",
        icon: "",
      },
    ]
  },
  {
    path: "/training",
    name: "Training",
    icon: <FaChalkboardTeacher />,
    subRoutes: [
      {
        path: "/training/list",
        name: "Training List ",
        icon: <FaListUl />,
      },
      {
        path: "/training/trainers",
        name: "Trainers",
        icon: <FaPeopleGroup />,
      },
      {
        path: "/training/type",
        name: "Training Type",
        icon: "",
      },
    ],
  },
  {
    path: "/promotion",
    name: "Promotion",
    icon: <BsCartCheck />,
  },
  {
    path: "/resignation",
    name: "Resignation",
    icon: <BiCog />
  },
  {
    path: "/termination",
    name: "Termination",
    icon: <AiFillHeart />,
  },
  {
    path: "/administration",
    name: "Administration",
    icon: <FaChalkboardTeacher />,
    subRoutes: [
      {
        path: "/assets",
        name: "Assets",
        icon: <FaListUl />,
      },
      {
        path: "/users",
        name: "Users",
        icon: <FaPeopleGroup />,
      },
      {
        path: "/training/type",
        name: "Training Type",
        icon: "",
      },
    ],
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <FaSignOutAlt />,
  }
];