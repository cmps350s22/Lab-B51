import express from 'express';
import EmployeeService from "./service/employee-service.js";

const router = express.Router();
const employeeService = new EmployeeService();

router.route('/employees')
    .get(employeeService.getEmployees)
    .post(employeeService.addEmployee)
    .delete(employeeService.deleteAllEmployees)

router.route('/employees/:eid')
    .put(employeeService.updateEmployee)
    .delete(employeeService.deleteEmployee)

router.route('/departments')
    .get(employeeService.getDepartments)

router.route('/departments/stats')
    .get(employeeService.getDepartmentStats)

router.route('/departments/employees')
    .get(employeeService.getDepartmentEmployees)

router.route('/departments/:did')
    .get(employeeService.getDepartment)

export default router;
