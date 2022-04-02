//Todo : replace the current implementation with calls to the API as we did in Lab 9,9.2

import Employee from "../model/employee.js";

const db = new Localbase('employee.db')
const collectionName = 'employees'

class EmployeeRepo {

    async addEmployee(employee) {
        try {
            return db.collection(collectionName).add(employee)
        } catch (e) {
            console.log(e)
        }
    }

    async updateEmployee(updatedEmployee) {
        try {
            return db.collection(collectionName).doc({eid: updatedEmployee.eid}).update(updatedEmployee)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteEmployee(eid) {
        try {
            return db.collection(collectionName).doc({eid}).delete()
        } catch (e) {
            console.log(e)
        }
    }

    async getEmployees() {
        try {
            const employees = await db.collection(collectionName).get()
            for (const employee of employees)
                Object.setPrototypeOf(employee, Employee.prototype)
            return employees
        } catch (e) {
            console.log(e)
        }
    }

    async getEmployee(eid) {
        try {
            const employee = await db.collection(collectionName).doc({eid}).get()
            return Object.setPrototypeOf(employee, Employee.prototype)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteAllEmployees() {
        try {
            return db.collection(collectionName).delete()
        } catch (e) {
            console.log(e)
        }
    }
}

export default new EmployeeRepo()
