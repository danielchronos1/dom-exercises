// Create a page that displays a numbered list of tracks:

var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];

let heading = document.createElement("h1");
heading.textContent = "Track List";
document.body.appendChild(heading);

let trackListElement = document.createElement("ol");

for (let i = 0; i < playList.length; i++) {
    var track = playList[i];
    var listItem = document.createElement("li");
    listItem.textContent = track.song + " - " + track.author;
    trackListElement.appendChild(listItem);
}

document.body.appendChild(trackListElement);

//Create an html page with OPEN button and a modal box. The modal box should have text and a CLOSE button. 
//The modal box is not displayed from the beginning. It appears when clicking the OPEN button and disappears when clicking CLOSE.

var openButton = document.createElement("button");
openButton.className = "button";
openButton.textContent = "OPEN";
document.body.appendChild(openButton);

var modal = document.createElement("div");
modal.className = "modal";
    
var modalContent = document.createElement("div");
modalContent.className = "modal-content";
    
var closeButton = document.createElement("span");
closeButton.className = "close";
closeButton.innerHTML = "&times;";
    
var modalText = document.createElement("p");
modalText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
var closeButton2 = document.createElement("button");
closeButton2.className = "close-modal";
closeButton2.textContent = "CLOSE";
    
modalContent.appendChild(closeButton);
modalContent.appendChild(modalText);
modalContent.appendChild(closeButton2);
modal.appendChild(modalContent);
document.body.appendChild(modal);

var openButton = document.querySelector(".button");
openButton.addEventListener("click", function() {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

closeButton2.addEventListener("click", function() {
  modal.style.display = "none";
});

//Create an html page with streetlights and a button that switches the color to the next one.



function changeColor() {
    const streetlights = document.querySelectorAll('.streetlight');
    streetlights.forEach(light => {
      if (light.classList.contains('red')) {
        light.classList.remove('red');
        light.classList.add('yellow');
      } else if (light.classList.contains('yellow')) {
        light.classList.remove('yellow');
        light.classList.add('green');
      } else if (light.classList.contains('green')) {
        light.classList.remove('green');
        light.classList.add('red');
      } else {
        light.classList.add('red');
      }
    });
  }


