import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

function EmployeesList () {
    return (<div className="app-list">
        <EmployeesListItem/>
        <EmployeesListItem/>
        <EmployeesListItem/>
        <EmployeesListItem/>
    </div>)
}

export default EmployeesList;