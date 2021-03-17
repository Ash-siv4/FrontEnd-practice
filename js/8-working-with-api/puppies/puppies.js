"use strict"

const contextPath = "http://localhost:8080";
const output = document.getElementById("output");

function getPuppies() {
  axios.get(contextPath + "/getPuppies")
    .then(res => {
      output.innerHTML = "";

      const puppies = res.data;

      puppies.forEach(puppy => {
        const newPuppy = renderPuppy(puppy);
        // console.log("New penguin: ", newPenguin);
        output.appendChild(newPuppy);
      });
    }).catch(err => console.error(err))
}

{/* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

function renderPuppy(puppy) {

  const newColumn = document.createElement("div");
  newColumn.className = "col";

  const newPuppy = document.createElement("div");
  newPuppy.className = "card";
  newColumn.appendChild(newPuppy);

  const puppyBody = document.createElement("div");
  puppyBody.className = "card-body";
  newPuppy.appendChild(puppyBody);

  const puppyName = document.createElement("h5");
  puppyName.className = "card-title";
  puppyName.innerText = puppy.name;
  puppyBody.appendChild(puppyName);

  const puppyText = document.createElement("p");
  puppyText.className = "card-text";
  puppyText.innerHTML = "Age: " + puppy.age;
  puppyText.innerHTML += "<br>";
  puppyText.innerHTML += "Breed: " + puppy.breed;
  puppyBody.appendChild(puppyText);

  const puppyFooter = document.createElement("div");
  puppyFooter.className = "card-footer"
  newPuppy.appendChild(puppyFooter);

  const deletePuppyButton = document.createElement("a");
  deletePuppyButton.className = "card-link";
  deletePuppyButton.innerText = "Delete";
  deletePuppyButton.addEventListener('click', () => deletePuppy(puppy.id));
  puppyFooter.appendChild(deletePuppyButton);

  return newColumn;
}

function deletePuppy(id) {
  axios.delete(contextPath + "/removePup/" + id)
    .then(() => getPuppies())
    .catch(err => console.error(err));
}

document.getElementById("puppiesForm").addEventListener('submit', function (event) {
  event.preventDefault();

  console.log("this: ", this);
  console.log("this.name:", this.name);
  console.log("this.age:", this.age);
  console.log("this.breed:", this.breed);

  const data = {
    name: this.name.value,
    age: this.age.value,
    breed: this.breed.value
  };

  axios.post(contextPath + "/createPups", data, {
    headers: {
      "Content-Type": "application/json", // sending JSON
      "Accept": "application/json" // gimme JSON
    }
  }).then(() => {
    this.reset();
    this.name.focus();
    getPuppies();
  })
    .catch(err => console.error(err));

});

getPuppies();