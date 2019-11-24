
function addNewAccount(e) {

    const obj = {
        name: e.name.value,
        nickName: e.nickName.value,
        photo: parsePhoto(e)
    }
    addAccount(obj);
}

function parsePhoto(file) {
    const data = new FormData();

    data.append("file", file.photo.files[0]);
    data.append("filename", file.photo.files[0].name);
    
    return data;
}
function addAccount(form) {
    return fetch('http://127.0.0.1:5000/account', {
        method: 'POST',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(res => res)
    .catch(e => errorHandler(e));
}