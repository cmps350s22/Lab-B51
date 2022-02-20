const regionsBaseUrl = "https://restcountries.com/v3.1/region"
const countryBaseUrl = "https://restcountries.com/v3.1/name"
const regionSearchBar = document.querySelector('#region')
const countryDropDown = document.querySelector('#country')

async function getCountries() {
    const url = `${regionsBaseUrl}/${regionSearchBar.value}`
    const data = await fetch(url)
    const countries = await data.json()
    const options = countries.map(country => convertToOption(country))
    countryDropDown.innerHTML = options.join(' ')
}

function loadCountryDetails() {
  //receive which country is selected
    //
}

function convertToOption(country) {
    return `<option value="${country.name.common}"> ${country.name.common} </option>`
}
