import {CensusRepo} from './repository/census-repo.js'

const censusRepo = new CensusRepo()

window.onload = async () => {
    await showCensusList()
    window.deleteCensus = deleteCensus
    window.updateCensus = updateCensus
}

// const db = new Localbase('census.db')
const addBtn = document.querySelector('#add-btn')
const formElement = document.querySelector('#form')
const censusTable = document.querySelector('#countries')
const noOfRowsDD = document.querySelector('#noOfRows')


formElement.addEventListener('submit', addCensus)
noOfRowsDD.addEventListener('change', showCensusList)
//registering your methods


//1. create a function that converts one census object into a row
//2. map all the census into HTML rows by calling that function
//3. Inject


async function showCensusList() {
    const noOfRows = parseInt(noOfRowsDD.value)
    const allCensus = await censusRepo.getAllCensus(noOfRows)
    // console.log(allCensus)
    const censusHTMLRows = allCensus.map(census => censusHTMLRow(census)).join(' ')
    censusTable.innerHTML = `
        <tr> 
            <th>Country</th>
            <th>Population</th>
            <th>Action</th>
        </tr>
        ${censusHTMLRows}
    `
}

function censusHTMLRow(census) {
    return `
        <tr>
            <td>${census.country}</td>
            <td>${census.population}</td>
            <td>
                <i class="fa fa-edit" onclick="updateCensus('${census.id}')"> Edit </i>
                <i class="fa fa-trash" onclick="deleteCensus('${census.id}')"> Delete </i>
            </td>
        </tr>
    `
}

async function addCensus(e) {
    e.preventDefault()
    const census = formToObject(e.target)

    if (census.id.toString().length > 4) {
        console.log(census)
        const result = await censusRepo.updateCensus(census);
        console.log(result)
        addBtn.value = 'Add'

    } else {
        census.id = 'id-' + Date.now()
        await censusRepo.addCensus(census);
    }
    await showCensusList()
    formElement.reset()
    document.querySelector('#id').value = ''

}

async function updateCensus(id) {
    const census = await censusRepo.getCensusById(id)
    document.querySelector('#country').value = census.country
    document.querySelector('#population').value = census.population
    document.querySelector('#id').value = census.id

    addBtn.value = 'Update'

}

async function deleteCensus(id) {
    await censusRepo.deleteCensus(id)
    await showCensusList()
}


function formToObject(form) {
    const formData = new FormData(form)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data;
}
