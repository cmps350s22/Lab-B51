const regionsBaseUrl = "https://restcountries.com/v3.1/region"
const countryBaseUrl = "https://restcountries.com/v3.1/name"
const regionSearchBar = document.querySelector('#region')
const countryDropDown = document.querySelector('#country')
const factsArea = document.querySelector('#facts-area')

countryDropDown.addEventListener('onchange', loadCountryDetails)

async function getCountries(e) {
    alert('hello')
    const url = `${regionsBaseUrl}/${regionSearchBar.value}`
    const data = await fetch(url)
    const countries = await data.json()
    const options = countries.map(country => convertToOption(country))
    countryDropDown.innerHTML = options.join(' ')
    await loadCountryDetails()
}

async function loadCountryDetails(e) {
    const url = `${countryBaseUrl}/${countryDropDown.value}`
    const data = await fetch(url)
    const country = await data.json()
    const factsHTML = generateFactsTable(country[0])
    factsArea.innerHTML = factsHTML
}

function generateFactsTable(country) {
    return `
     <h1 class="subtitle"><u>Facts about ${country.name.common}</u></h1>
     <img src=${country.flags.png} alt="" class="flag-img">
        <table id="countries-table">
            <tr>
                <td>Offical Country Name</td>
                <td>${country.name.official} : ${country.name.official}</td>
            </tr>
            <tr>
                <td>Capital City</td>
                <td>${country.capital}</td>
            </tr>
            <tr>
                <td>Currency</td>
                <td>${Object.keys(country.currencies).map(key => country.currencies[key].name).join('-')}</td>
            </tr>
            <tr>
               <td>Population</td>
               <td>${country.population}</td>
            </tr>
            <tr>
                <td>Language</td>
                <td>${Object.keys(country.languages).map(key => country.languages[key]).join('-')}</td>
            </tr>
        </table>
    `
}


function convertToOption(country) {
    return `<option value="${country.name.common}"> ${country.name.common} </option>`
}
