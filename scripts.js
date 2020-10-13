function createColumn(){    
    for (let i=0; i<256; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        document.getElementById("main-container").appendChild(newDiv);
        
    }};


createColumn();