const fetch = require('node-fetch');
const constants = require('../../utils/constants')
function errorHandler(e) {
    return e;
}


module.exports = {
    
    account() {
        let accountExists = false;
    
        fetch(`${constants.BASE_URL}/account`)
            .then(response => response.json())
            .then(response => {
                if(response.success) {
                    accountExists = true
                } else {
                    accountExists = false;
                }
            })
            .catch(e => accountExists = false);
        return accountExists;
    },

    addAccount(form) {
        return fetch(`${constants.BASE_URL}/account`, {
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(e => errorHandler(e))
    }

} 