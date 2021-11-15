let entries = document.querySelectorAll(".pc-entry");

entries.forEach(function(element){
    element.addEventListener("click", clickHandler)
});

function clickHandler (event){
    //console.log(event.target);
    if(event.target.className == "pc-more"){
        this.classList.toggle("exp");
    }
}

