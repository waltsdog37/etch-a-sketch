function createColumn(){    
    for (let i=0; i<256; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        document.getElementById("main-container").appendChild(newDiv);
        
    };
};

function drawing(){
    let draw = document.getElementById("main-container");
    draw.addEventListener("mouseout", function(event){
        event.target.style.backgroundColor = "black";
    });
};


createColumn();
drawing();