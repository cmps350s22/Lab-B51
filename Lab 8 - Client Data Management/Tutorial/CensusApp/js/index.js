import {CensusRepo} from './repository/census-repo.js'
const censusRepo = new CensusRepo()

// const db = new Localbase('census.db')
const addBtn = document.querySelector('#add-btn')
const formElement = document.querySelector('#form')
const censusTable = document.querySelector('#countries')


formElement.addEventListener('submit', addCensus)
//registering your methods

showCensusList()

async function showCensusList() {
    const allCensus = await censusRepo.getAllCensus()
    console.log(allCensus)
    
    censusTable.innerHTML = `
        <tr> 
            <th>Country</th>
            <th>Population</th>
            <th>Action</th>
        </tr>
    
    `
}

async function addCensus(e) {
    e.preventDefault()
    console.log(e.target)
    const census = formToObject(e.target)
    census.id = Date.now()
    const result =  await censusRepo.addCensus(census);
}


function formToObject(form) {
    const formData = new FormData(form)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data;
}
