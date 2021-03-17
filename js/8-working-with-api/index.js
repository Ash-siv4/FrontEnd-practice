'use strict'

axios.get("https://pokeapi.co/api/v2/pokemon/sneasel", {
    headers: {
        "Accept": "application/json"
    }
}).then(function (response) {
    // success callback
    const data = response.data;
    console.log(response);
    const name = data.name;
    document.write(name + " " + name);
}).catch(function (err) {
    // failure callback
    console.error(err);
});

console.log("hello");