let counter = 0;
//let imgTag = document.getElementsByTagName("img")[0];
let prevBtn = document.getElementsByTagName("button")[0];
let nextBtn = document.getElementsByTagName("button")[1];
const photoURL = "https://jsonplaceholder.typicode.com/photos?albumId=1";

function addNewPhoto(counter) {
    const promise = fetch(photoURL);
    const li = document.querySelector("li");

    promise
        .then((response) => response.json())
        .then((json) => {
            let img = document.querySelector("img");
            img.src = json[counter].url;
            console.log(img);
        });
}
addNewPhoto(0);
prevBtn.addEventListener("click", slideToPrev);
nextBtn.addEventListener("click", slideToNext);

function slideToNext() {
    prevBtn.disabled = false;
    console.log(counter);
    counter++;

    if (counter <= 10) {
        addNewPhoto(counter);
    }
    if (counter == 10) {
        nextBtn.disabled = true;
    }
}

function slideToPrev() {
    nextBtn.disabled = false;
    console.log(counter);
    if (counter === 0) {
        prevBtn.disabled = true;
    }

    counter--;

    if (counter >= 0) {
        addNewPhoto(counter);
    }
    if (currSelected + 1 == allImages.length) {
        nextBtn.disabled = true;
    }
}
