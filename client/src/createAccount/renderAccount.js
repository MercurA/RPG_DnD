
function addNewAccount(e) {

    const obj = {
        name: e.name.value,
        nickName: e.nickName.value
    }
    addAccount(obj);
}

function addAccount(form) {
    return fetch('http://127.0.0.1:5000/account', {
        method: 'POST',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(res => res)
    .catch(e => errorHandler(e))
}