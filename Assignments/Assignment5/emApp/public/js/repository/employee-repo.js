import Employee from "../model/employee.js";

class EmployeeRepo {

    constructor() {
        this.baseUrl = ' /api/employees';
    }

    async addEmployee(employee) {
        return await fetch(this.baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        });
    }

    async getEmployees() {
        const data = await fetch(this.baseUrl)
        const employees = await data.json()
        employees.map(e => Object.setPrototypeOf(e, Employee.prototype))
        return employees
    }

    async getDepartments() {
        const data = await fetch('/api/departments')
        const employees = await data.json()
        return employees
    }

    async getDepartment(did) {
        const data = await fetch(`/api/departments/${did}`)
        const department = await data.json()
        return department
    }
    async getEmployee(eid) {
        const data = await fetch(`${this.baseUrl}/?eid=${eid}`)
        const employee = await data.json()
        Object.setPrototypeOf(employee, Employee.prototype)
        return employee
    }

    async updateEmployee(updatedEmployee) {
        return await fetch(`${this.baseUrl}/${updatedEmployee.eid}`, {
            method: 'Put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedEmployee)
        });
    }

    async deleteEmployee(eid) {
        return await fetch(`${this.baseUrl}/${eid}`, {
            method: 'Delete'
        });
    }

    async deleteAllEmployees() {
        return await fetch(`${this.baseUrl}`, {
            method: 'Delete'
        });
    }
}

export default new EmployeeRepo()
