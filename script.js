// get all elements 
let generationZone = document.getElementById("generationZone");
let dropTarget = document.getElementById("dropTarget");
let dragged;


//fetch a single fact about cat

function generateFact(){
    fetch("https://meowfacts.herokuapp.com/?count=1")
    
    .then(response => response.json())
    .then(data => {
        // console.log(data.data[0]);
        generationZone.innerHTML = "";
        card = document.createElement("div");
        card.id="card";
        card.classList = "draggableCard";
        card.setAttribute("draggable", "true")
        generationZone.append(card)
        card.append(data.data[0]);

        //drag functionality

        card.addEventListener("drag", (event)=>{
                // console.log(event.target)
                
        })
        card.addEventListener("dragstart",(event)=>{
            // console.log(event.target);
            dragged = event.target;
            event.target.classList.add("dragging");
        })

        card.addEventListener("dragend", (event)=>{
            event.target.classList.remove("dragging");
        })


    })
}

//drop functionality

dropTarget.addEventListener("dragover", (event)=>{
    event.preventDefault();
    event.target.classList.add("dragover");
})

dropTarget.addEventListener("dragleave", (event)=>{
    event.target.classList.remove("dragover");
})

dropTarget.addEventListener("drop",(event)=>{
    event.preventDefault();
    console.log("working")
    
    event.target.appendChild(dragged);
})


// clear drop zone

function clearall(){
    dropTarget.innerHTML = "";
}
