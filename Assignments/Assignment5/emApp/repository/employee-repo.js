import fs from 'fs-extra';
import path from "path";

export default class EmployeeRepo {

    constructor() {
        this.employeesFilePath = path.join(path.resolve(), 'data/employees.json');
        this.departmentsFilePath = path.join(path.resolve(), 'data/departments.json');
    }

    async addEmployee(employee) {
        const employees = await this.getEmployees();
        employees.push(employee);
        await this.saveEmployees(employees);
        return `successfully added employee ${employee.eid}`
    }

    async getEmployees() {
        return await fs.readJson(this.employeesFilePath);
    }

    async getEmployee(eid) {
        const employees = await this.getEmployees()
        const employee = employees.find(e => e.eid == eid);
        return employee

    }

    async updateEmployee(eid, updatedEmployee) {
        const employees = await this.getEmployees()
        const index = employees.findIndex(e => e.eid == eid);
        if (index >= 0) {
            //even if they just send one value [eg. name], then it will only update that value and keep the rest
            employees[index] = [...employees[index], ...updatedEmployee];
            await this.saveEmployees(employees)
            return `successfully updated employee with eid ${eid}`
        } else
            return `unable to update employees with id ${eid}, as it does not exist`
    }

    async deleteEmployee(eid) {
        const employees = await this.getEmployees();
        const index = employees.findIndex(e => e.eid == eid);
        if (index >= 0) {
            employees.splice(index, 1);
            await this.saveEmployees(employees);
            return `successfully deleted all the employee`
        }
        return `employees with id ${eid} does not exist`

    }

    async deleteAllEmployees() {
        await this.saveEmployees([]);
        return `successfully deleted all the employee`
    }

    async saveEmployees(employees) {
        return await fs.writeJson(this.employeesFilePath, employees);
    }

    async getDepartment(did) {
        const departments = await this.getDepartments()
        const department = departments.find(e => e.did == did);

        return department
    }

    async getDepartments() {
        return await fs.readJson(this.departmentsFilePath);
    }

    async getDepartmentEmployees() {

        const departments = await this.getDepartments()
        const employees = await this.getEmployees()

        for (const department of departments)
            department.employees = employees.filter(e => e.did == department.did)

        return await departments
    }

    async getDepartmentsStats() {

        const departments = await this.getDepartments()
        const employees = await this.getEmployees()

        for (const department of departments)
            department.numberOfEmployees = employees
                .filter(e => e.did == department.did)
                .length

        console.log(departments.length)
        return await departments
    }

}

