import EmployeeRepo from "../repository/employee-repo.js";

const employeeRepo = new EmployeeRepo();

export default class EmployeeService {

    async getEmployees(req, res) {
        try {
            let response = !req.query.eid ?
                await employeeRepo.getEmployees() :
                await employeeRepo.getEmployee(req.query.eid)

            res.json(response)
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async addEmployee(req, res) {
        try {
            const response = await employeeRepo.addEmployee(req.body)
            res.json(response);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async updateEmployee(req, res) {
        try {
            const response = await employeeRepo.updateEmployee(req.params.eid, req.body)
            res.json(response);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async deleteEmployee(req, res) {
        try {
            const response = await employeeRepo.deleteEmployee(req.params.eid)
            res.json(response);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async deleteAllEmployees(req, res) {
        try {
            const response = await employeeRepo.deleteAllEmployees()
            res.json(response);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getDepartment(req, res) {
        try {
            const department = await employeeRepo.getDepartment(req.params.did)
            res.json(department)
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getDepartments(req, res) {
        try {
            const departments = await employeeRepo.getDepartments()
            res.json(departments)
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getDepartmentEmployees(req, res) {
        try {
            const departmentsWithEmployees = await employeeRepo.getDepartmentEmployees()
            res.json(departmentsWithEmployees)
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getDepartmentStats(req, res) {
        try {
            const starts = await employeeRepo.getDepartmentsStats()
            res.json(starts)
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
