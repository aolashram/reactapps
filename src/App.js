import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/core/sidebar/Sidebar'
import './components/core/navbar/Navbar.css';
import './App.css';
import Employee from './components/hrm/forms/Employee'
import EmployeeList from './components/hrm/EmployeeList'
import Profile from './components/hrm/Profile'
import AllEmployees from "./components/hrm/forms/AllEmployees";

function App_first() {
    return (
        <div className="App">
            <Router>
                <Sidebar >
                    <Routes >
                        <Route path="/hrm/employee" element={<Employee />} />
                        <Route path="/hrm/allemployees" element={<AllEmployees />} />
                        <Route path="/hrm/employee-list" element={<EmployeeList />} />
                        <Route path="/hrm/profile" element={<Profile />} />
                    </Routes>
                </Sidebar>
            </Router>
        </div>
    );
}

export default App_first;
