
const newChar = document.getElementById('newCharacter');

newChar.addEventListener('click', () => {
        let test = getCharacters();
        test.then(r => console.log(r));

})

function getCharacters() {
    return fetch('http://127.0.0.1:5000/getCharacters')
        .then(response => response.json())
        .then(response => response)
}