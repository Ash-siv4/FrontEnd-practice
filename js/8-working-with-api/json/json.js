"use strict";

const output = document.getElementById("output");

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
.then(res => {
    const data = res.data;
    const json = JSON.stringify(data, null, 2);
    console.log(json);
    output.innerText = json;
})
.catch(err => console.error(err));