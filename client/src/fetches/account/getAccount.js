const fetch = require('node-fetch');


module.exports = {
    
    account() {
        let accountExists = false;
    
        fetch('http://127.0.0.1:5000/checkAccount')
            .then(response => response.json())
            .then(response => {
                if(response.success) {
                    accountExists = true
                } else {
                    accountExists = false;
                }
            });
        return accountExists;
    }
} 