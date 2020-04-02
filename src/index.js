console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const images = document.getElementById('dog-image-container')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedDropdown = document.querySelector("#breed-dropdown")


document.addEventListener("DOMContentLoaded", function(){
    loadImages();
    loadBreeds();
})

	breedDropdown.addEventListener('change', () => {
		const letter = event.target.value;
		filterBreeds(letter, breeds)
	})

function filterBreeds(letter, breeds) {
 let breeds = breeds.filter(breed => breed[0] === letter)
  breeds{
	let ul = document.querySelector('#dog-breeds')
	ul.innerHTML = ""
	filteredBreeds.forEach(breed => createBreedList(breed))
}
}

function loadImages() {
  fetch(imgUrl)
    .then((response) =>
      response.json())
    .then(json => {json.message.forEach(image => addImage(image))
    })
  }
  
function addImage(photo){
    let container = document.querySelector('#dog-image-container');
    let imageElement = document.createElement('img');
    imageElement.src = photo;
    container.appendChild(imageElement);
}

function loadBreeds() {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {

      breeds = Object.keys(results.message);
      breeds.forEach(breed => addBreed(breed))      
    })    
  }

function addBreed(breed) {
  let list = document.getElementById('dog-breeds');
  let listElement = document.createElement('li');
  listElement.innerText = breed;
  list.appendChild(listElement);
  listElement.addEventListener('click', changeColor)
}

  function changeColor(event) {
  event.target.style.color = 'green';
}

