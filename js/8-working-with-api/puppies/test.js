"use strict"

function getPups(){
  fetch("http://localhost:8080/getPuppies")
  .then(res => {
    console.log(res)
  }).catch(err => console.error(err))
}