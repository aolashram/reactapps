export const menulist = [
    {
        title: "Main",
        menus: [
            {
                path: "/Dashboard",
                name: "Dashboard",
                icon: "la la-dashboard",
                roleList: "all",
                subMenus: [
                    {
                        path: "/AdmDashboard",
                        title: "Admin Dashboard",
                        roleList: "all"
                    },
                    {
                        path: "/EmpDashboard",
                        title: "Employee Dashboard",
                        roleList: "all"
                    },
                ]
            }
        ]
    },
    {
        title: "Employees",
        menus: [
            {
                path: "#",
                name: "Employees",
                icon: "la la-dashboard",
                roleList: "all",
                subMenus: [
                    {
                        path: "/employees",
                        title: "All Employees",
                        roleList: "all"
                    },
                    {
                        path: "/holidays",
                        title: "Holidays",
                        roleList: "all"
                    },
                    {
                        path: "/leaves",
                        title: "Employee Leave",
                        roleList: "all"
                    },
                    {
                        path: "/departments",
                        title: "Departments",
                        roleList: "all"
                    },
                    {
                        path: "/designations",
                        title: "Designations",
                        roleList: "all"
                    },
                    {
                        path: "/timesheet",
                        title: "Timesheet",
                        roleList: "all"
                    },
                    {
                        path: "/overtime",
                        title: "Overtime",
                        roleList: "all"
                    },
                ]
            },
        ]
    }
]