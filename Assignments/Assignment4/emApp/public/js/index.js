import employeeRepo from '../js/repository/employee-repo.js'


window.onload = async () => {
    window.deleteEmployee = deleteEmployee
    window.submitEmployeeForm = submitEmployeeForm
    window.editEmployee = editEmployee
    window.readEmployee = showEmployeeDetail
    await loadEmployeesTable()
}

const appContainer = document.querySelector('#container');
const deleteEmployeesBtn = document.querySelector('#delete-employees-btn');
const addEmployeeLink = document.querySelector('#add-employee-link');
const employeesTable = document.querySelector('#employees-table');
const employeeTableBody = document.querySelector('.employees-table-body');
const createEmployeeBtn = document.querySelector('#create-employee-btn');

createEmployeeBtn.addEventListener('click', loadEmployeeForm)
deleteEmployeesBtn.addEventListener('click', deleteAllEmployees)
addEmployeeLink.addEventListener('click', loadEmployeeForm)

let isEdit = false;
let employeeToBeUpdated = null;

async function loadEmployeesTable() {
    const employees = await employeeRepo.getEmployees()
    const employeeToHTMl = employees.map(p => toHTMLRow(p)).join('')
    if (employeeToHTMl.length > 0)
        employeeTableBody.innerHTML = employeeToHTMl
    else
        employeesTable.innerHTML = '<h1>No Employees to show</h1>'
    console.log(employees)
}

async function showEmployeeDetail(eid) {
    const employee = await employeeRepo.getEmployee(eid)
    appContainer.innerHTML = toCard(employee)
}

async function deleteEmployee(eid) {
    const confirmed = confirm(`Are you sure you want to delete Employee #${eid}?`);
    if (confirmed) {
        await employeeRepo.deleteEmployee(eid)
        await loadEmployeesTable()
    }
}

async function deleteAllEmployees() {
    const confirmed = confirm(`Are you sure you want to delete all the employees?`);
    if (confirmed) {
        await employeeRepo.deleteAllEmployees()
        await loadEmployeesTable()
    }
}

//will be used for both edit and add
async function loadEmployeeForm() {
    await loadPage('employee-form.html')
    document.querySelector('#add-employee-link').style.backgroundColor = '#352323';
    document.querySelector('.employee_form').addEventListener('submit', submitEmployeeForm);
    document.querySelector('#back-btn').addEventListener('click', async () => {
        location.reload()
    })

}

//if edit we need to populate the sample into the form
async function editEmployee(eid) {
    employeeToBeUpdated = await employeeRepo.getEmployee(eid);
    await loadEmployeeForm();
    document.querySelector('#update-title').innerText = 'Update Employee';
    document.querySelector('.submit-btn').value = 'Update';

    const form = document.querySelector('#form')
    for (const [key, value] of Object.entries(employeeToBeUpdated))
        if (form.elements[key] != null)
            form.elements[key].value = value
    isEdit = true

}

async function submitEmployeeForm(event) {
    event.preventDefault();
    const form = event.target
    if (!form.checkValidity()) return;

    const newEmployee = formToObject(form);

    if (isEdit) {
        employeeToBeUpdated = {...employeeToBeUpdated, ...newEmployee}
        employeeToBeUpdated.eid = parseInt(employeeToBeUpdated.eid.toString())
        await employeeRepo.updateEmployee(employeeToBeUpdated)
    } else {
        newEmployee.eid = Date.now();
        await employeeRepo.addEmployee(newEmployee)
        form.reset();
    }
    location.reload()

}

function formToObject(formElement) {
    const formData = new FormData(formElement);
    const data = {};
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return data;
}

async function loadPage(pageName) {
    const pageContent = await fetch(`../pages/${pageName}`)
    appContainer.innerHTML = await pageContent.text()
}

function toHTMLRow(p) {
    return ` <tr>
                <td>${p.firstName}</td>
                <td>${p.lastName}</td>
                <td>${p.email}</td>
                <td class="actions">
                    <button class="btn small-btn read" onclick="readEmployee(${p.eid})">Detail</button> 
                    <button class="btn small-btn" onclick="editEmployee(${p.eid})">Edit</button> 
                    <button class="btn small-btn red-btn" onclick="deleteEmployee(${p.eid})">Delete</button>
                </td>
         </tr>`
}

function toCard(p) {
    return `
            <div class="card">
                <h1>Employee Information</h1>
                <div>
                    <p>Employee Id : ${p.eid}</p>
                    <p>First Name : ${p.firstName}</p>
                    <p>Last Name : ${p.lastName}</p>
                    <p>Email : ${p.email}</p>
                </div>
                <div>
                    <button class="btn small-btn" onclick="editEmployee(${p.eid})">Edit</button> 
                    <button class="btn small-btn red-btn" onclick="deleteEmployee(${p.eid})">Delete</button>
                </div>
            </div>   
        `
}
