import {CensusRepo} from './repository/census-repo.js'

const repo = new CensusRepo()

const countriesTable = document.querySelector('#countries')
const noOfRowsDD = document.querySelector('#noOfRows')
const form = document.querySelector('#form')
const addBtn = document.querySelector('#add-btn')


form.addEventListener('submit', addCensus)
noOfRowsDD.addEventListener('change', showCensusList)

window.onload = async ()=>{
    await showCensusList();
    window.deleteCensus = deleteCensus
    window.updateCensus = updateCensus
}

async function addCensus(e) {
    e.preventDefault()
    const census = formToObject(e.target)

    if(addBtn.value == 'Add'){
        census.id = Date.now().toString()
        const response = await repo.addCensus(census)
    }else{
        const response = await repo.updateCensus(census)
        addBtn.value = 'Add'
    }
    await showCensusList()
    form.reset()
}

async function showCensusList() {
    const noOfRows = parseInt(noOfRowsDD.value)
    const allCensus = await repo.getAllCensus(noOfRows)

    const censusHTMLRows = allCensus.map(census => censusToHTMLRow(census)).join(' ')

    countriesTable.innerHTML = `
        <tr>
            <th>Country</th>
            <th>Population</th>
            <th>Action</th>
        </tr>
        ${censusHTMLRows} 
    `
}

function censusToHTMLRow(census){
    return `
        <tr>
            <td>${census.country}</td>
            <td>${census.population}</td>
            <td>
                <i class="fa fa-edit" onclick="updateCensus('${census.id}')">Edit</i>
                <i class="fa fa-trash" onclick="deleteCensus('${census.id}')">Delete</i>
            </td>
        </tr>
    `
}
async function updateCensus(id){
    const census = await repo.getCensusById(id)
    document.querySelector('#country').value = census.country
    document.querySelector('#population').value = census.population
    document.querySelector('#id').value = census.id
    addBtn.value = 'Update'
}
async function deleteCensus(id) {
    await repo.deleteCensus(id)
    await showCensusList()
}
function formToObject(form) {
    const formData = new FormData(form)
    console.log(formData)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data;
}
