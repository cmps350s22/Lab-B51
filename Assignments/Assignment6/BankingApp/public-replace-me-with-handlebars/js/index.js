//After the document is loaded in the browser
import accountRepo from './repository/account-repo.js'

document.addEventListener("DOMContentLoaded", async () => {
    window.handleLoadAccounts = handleLoadAccounts
    window.handleDeleteAccount = handleDeleteAccount
    window.handleAddAccount = handleAddAccount
    window.loadPage = loadPage

    await handleLoadAccounts('All');
});

//returns all the accounts depending on the type the user selected

async function handleLoadAccounts(acctType) {
    try {
        const accounts = await accountRepo.getAccounts(acctType);
        document.querySelector('#accounts-table').innerHTML =
            `<table id="accounts">
                <tr>
                    <th>Account No</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                    <th>Action</th>
                </tr>
                ${accounts.map(account => accountToHTMLRow(account)).join('')} 
            <table>`;
    } catch (e) {
        console.log(e);
    }
}

function accountToHTMLRow(acct) {
    return `
        <tr id="row-${acct._id}">
            <td>${acct._id}</td>
            <td>${acct.acctType}</td>
            <td>${acct.balance}</td>
            <td>
                ${acct.balance <= 0 ?
        `<button onclick="handleDeleteAccount('${acct._id}')">
                            <i class="fas fa-trash"></i>
                        </button>`
        : ''
    }
            </td>
        </tr>   
    `
}

async function handleDeleteAccount(acctNo) {
    try {
        const confirmed = confirm("Are you sure you want to delete this account?");
        if (confirmed) {
            await accountRepo.deleteAccount(acctNo)
            document.querySelector(`#row-${acctNo}`).remove();
        }
    } catch (e) {
        console.log(e);
    }
}

async function handleAddAccount(event) {
    try {
        const form = event.target;
        const isFormValid = form.checkValidity();
        if (!isFormValid) return;

        event.preventDefault();
        const account = formToObject(form);
        await accountRepo.addAccount(account)
        window.location.href = 'index.html'
    } catch (e) {
        console.log(e);
    }
}

async function fillAccountsDD() {
    try {
        const accounts = await accountRepo.getAccounts('All');
        document.querySelector('#acctNo').innerHTML +=
            `${accounts.map(account => accountToHtmlOption(account)).join('')}`;

    } catch (e) {
        console.log(e);
    }
}

function accountToHtmlOption(account) {
    return `<option value='${account._id}'>
                #${account._id} - ${account.acctType} (QR ${account.balance})
             </option>`;
}

async function handleAddTrans(event) {
    try {
        const form = event.target;
        const isFormValid = form.checkValidity();
        if (!isFormValid) return;

        event.preventDefault();
        const trans = formToObject(form);
        console.log(trans)
        await accountRepo.addTrans(trans);
        window.location.href = 'index.html'
    } catch (e) {
        console.log(e);
    }
}

async function loadPage(pageName) {
    const response = await fetch(pageName);
    document.querySelector('#main').innerHTML = await response.text();

    if (pageName === "add-acct.html") {
        await fillAccountsDD();
        document.querySelector('#account-form').addEventListener('submit', handleAddAccount)
    } else if (pageName === "acct-trans.html") {
        await fillAccountsDD();
        document.querySelector('#trans-form').addEventListener('submit', handleAddTrans)
    }
}

function formToObject(form) {
    // Construct key/value pairs representing form fields and their values,
    const formData = new FormData(form);
    let formObject = {};

    // Convert key/value pairs to an object
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    return formObject;
}
