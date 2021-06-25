/* Now it's your turn! Keep in mind, not all elements will follow this exact process.
For example, <ul> and its child <li> elements will need an extra step or two to render properly.
Images too, will need an href added... etc.
*/

let body = document.body;
document.title = "For When Things Happen";

// Create elements
let h1Elem = document.createElement("h1");
let h2Elem = document.createElement("h2");
let h3Elems = [document.createElement("h3"), document.createElement("h3")];
let h4Elems = [document.createElement("h4"), document.createElement("h4")];
let ulElems = [document.createElement("ul"), document.createElement("ul")];
let imgElem = document.createElement("img");

let divRowElem = document.createElement("div");
let divColElems = [document.createElement("div"), document.createElement("div")];

let juliesFavThings = [
    "Raindrops on roses",
    "Whiskers on kittens",
    "Bright copper kettles",
    "Warm woolen mittens",
    "Brown paper packages tied up with strings"
]

let myFavThings = [
    "Bandaid",
    "Maybe antiseptic",
    "Ice",
    "Ice cream",
    "A good lie down",
    "Make up with the dog",
    "Make up with the bee"
]

let favThings = [juliesFavThings, myFavThings];


// Add content to elements
h1Elem.textContent = "A Few of My Favorites for When Things Happen";
h2Elem.textContent = "+ a Few of Julie Andrews";

h4Elems[0].textContent = "\"When the dog bites, when the bee stings, when I'm feeling sad, I simply remember my favorite things...\"";
h4Elems[1].textContent = "\"... and then I don't feel so bad.\""

h3Elems[0].textContent = "Julie Andrews' Favorite Things";
h3Elems[1].textContent = "My Favorite Things";

// Add href and style img
imgElem.src = "gus.jpg";
imgElem.style.maxWidth = "300px";
imgElem.style.maxHeight = "300px";

// Grid layout for lists
divRowElem.classList.add("row");
divColElems[0].classList.add("col-5");
divColElems[1].classList.add("col-5");
divRowElem.appendChild(divColElems[0]);
divRowElem.appendChild(divColElems[1]);

// Append elements to HTML body
body.appendChild(h1Elem);
body.appendChild(h2Elem);
body.appendChild(document.createElement("br"));
body.appendChild(h4Elems[0]);
body.appendChild(document.createElement("br"));

// Create lists
for (let i = 0; i < 2; i++) 
{
    divColElems[i].appendChild(h3Elems[i]);

    // <li> items from favThings arrays
    favThings[i].forEach((item)=>{
        let li = document.createElement("li");
        li.textContent = item;
        ulElems[i].appendChild(li);
      })
    
    // If myFavThings array, add image
    if (i == 1)
    {
        let li = document.createElement("li");
        li.appendChild(imgElem);
        ulElems[i].appendChild(li);
    }

    // Add respective list to respective column
    divColElems[i].appendChild(ulElems[i]);
}

// Add row div to body (parent to col divs -> ul -> li...)
body.appendChild(divRowElem);

body.appendChild(document.createElement("br"));
body.appendChild(h4Elems[1]);

// Styling
body.style.textAlign = "center";
divRowElem.style.justifyContent = "center";
ulElems[0].style.textAlign = "left";
ulElems[1].style.textAlign = "left";

