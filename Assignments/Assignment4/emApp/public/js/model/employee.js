export default class Employee {
    constructor(eid, firstName, lastName, email) {
        this.eid = eid
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }

    toHTMLRow() {
        return ` <tr>
                <td>${this.firstName}</td>
                <td>${this.lastName}</td>
                <td>${this.email}</td>
                <td class="actions">
                    <button class="btn small-btn read" onclick="readEmployee(${this.eid})">Detail</button> 
                    <button class="btn small-btn" onclick="editEmployee(${this.eid})">Edit</button> 
                    <button class="btn small-btn red-btn" onclick="deleteEmployee(${this.eid})">Delete</button>
                </td>
         </tr>`
    }

    toCard() {
        return `
            <div class="card">
                <h1>Employee Information</h1>
                <div>
                    <p>Employee Id : ${this.eid}</p>
                    <p>First Name : ${this.firstName}</p>
                    <p>Last Name : ${this.lastName}</p>
                    <p>Email : ${this.email}</p>
                </div>
                <div>
                    <button class="btn small-btn" onclick="editEmployee(${this.eid})">Edit</button> 
                    <button class="btn small-btn red-btn" onclick="deleteEmployee(${this.eid})">Delete</button>
                </div>
            </div>   
        `
    }
}
