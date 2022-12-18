// Create a "close" button and append it to each list item
let li_DOM = document.querySelectorAll("li");
for (let i=0; i<li_DOM.length; i++) {
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li_DOM[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close_DOM = document.querySelectorAll(".close");
for (let i=0; i<close_DOM.length; i++) {
    close_DOM[i].onclick = function () {
        let parent = this.parentElement;
        parent.style.display = "none";
    }
}

//checked
let ul_DOM = document.querySelector("ul");
ul_DOM.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
}, false);


//add button
let addButton_DOM = document.querySelector("#liveToastBtn");

addButton_DOM.onclick = function () {
    let ul_DOM = document.querySelector("#list");
    let inputValue = document.querySelector("#task").value;
    
    let text;
    if ((inputValue !== "") && (inputValue !== " ")) { 
        //creating list
        let li_DOM = document.createElement("li");
        let text = document.createTextNode(inputValue);
        li_DOM.appendChild(text);
        ul_DOM.appendChild(li_DOM);
        //creating close button
        let span = document.createElement("span");
        let textX = document.createTextNode("\u00D7");
        span.appendChild(textX);
        span.className = "close";
        li_DOM.appendChild(span);
        //delete
        span.onclick = function (e) {
            let parent = e.target.parentElement;
            parent.style.display = "none";
        }
        document.querySelector("#task").value = "";
        //toast
        $('.success').toast('show')
    }
    else {
        $('.error').toast('show')
    }
    
    

    
}


