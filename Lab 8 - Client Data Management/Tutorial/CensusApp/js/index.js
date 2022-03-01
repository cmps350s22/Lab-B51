import {CensusRepo} from "./repository/census-repo.js";

const repo = new CensusRepo()
let isUpdateMode = false

window.onload = async () => {
    await showCensusData();
    window.handleDelete = handleDelete
    window.handleUpdate = handleUpdate
}

const addBtn = document.querySelector('#add-btn')
const noOfRows = document.querySelector('#noOfRows')
const countriesTable = document.querySelector('#countries')
const form = document.querySelector('#form')

form.addEventListener('submit', handleSubmitCensus)
noOfRows.addEventListener('change', showCensusData)

async function handleSubmitCensus(e) {
    e.preventDefault();
    const census = formToObject(e.target)

    if(isUpdateMode){
        await repo.updateCensus(census)
        addBtn.value = 'Add'
        isUpdateMode = false
    }
    else{
        census.id = Date.now().toString()
        await repo.addCensus(census)
    }

    form.reset()
    await showCensusData();
}

function formToObject(form) {
    const formData = new FormData(form)
    const data = {}

    for (const [key, value] of formData) {
        data[key] = value
    }
    return data
}

async function showCensusData() {
    const censuses = await repo.getCensuses(parseInt(noOfRows.value));
    const htmlRows = censuses.map(census => censusToHTMLRow(census)).join(' ')
    countriesTable.innerHTML = `
        <tr>
            <th>Country</th>
            <th>Population</th>
            <th>Action</th>
        </tr>
        ${htmlRows}
    `
}

function censusToHTMLRow(census) {
    return `
        <tr>
            <td>${census.country}</td>
            <td>${census.population}</td>
            <td>
                <i class="fa fa-edit" onclick="handleUpdate('${census.id}')">Edit</i>
                <i class="fa fa-trash" onclick="handleDelete('${census.id}')">Delete</i>
            </td>
        </tr>
    
    `;
}
async function handleUpdate(id){
    const census = await repo.getCensus(id)
    document.querySelector('#id').value = census.id
    document.querySelector('#country').value = census.country
    document.querySelector('#population').value = census.population
    addBtn.value = 'Update'
    isUpdateMode = true
}

async function handleDelete(id) {
    await repo.deleteCensus(id)
    await showCensusData()
}








