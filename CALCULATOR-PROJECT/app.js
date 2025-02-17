let inputBox = document.querySelector("#input-box");
let buttons = document.querySelectorAll(".button");

let string = "";

buttons.forEach( (button) => {

    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
           if (string.length === 0) {
            alert("Please enter some value")
           }
           else {
            string = eval(string);
            inputBox.value = string;
           }
        } 
        else if (e.target.innerHTML == "AC") {
            string = "";
            inputBox.value = string;
        }
        else if (e.target.innerHTML == "DE") {
             string = string.slice(0, string.length -1)
             inputBox.value = string;
        }
        else {
            string += e.target.innerHTML;
            inputBox.value = string;
        }

    })
    
})


