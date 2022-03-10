const mainContent = document.querySelector('#main-content')
window.onload = async () => {
    window.loadPage = loadPage
}


async function loadPage(pageName) {
    const pageContent = await fetch(`partial-views/${pageName}`)
    mainContent.innerHTML = await pageContent.text()
}
