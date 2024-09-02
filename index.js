//Title Change
let beginTitle = document.getElementById("title").innerHTML = "<H2>Select option to begin</H2>"
    
document.querySelector('#choice').addEventListener("change",() => {
    calculateValues();
    changeTitle();
});
document.querySelector('#inputDegree').addEventListener("change",() => {
    calculateValues();
    changeTitle();
});
document.querySelector('#inputFromValue').addEventListener("change",() => {
    calculateValues();
    changeTitle();
});
document.querySelector('#inputToValue').addEventListener("change",() => {
    calculateValues();
    changeTitle();
});

function changeTitle(){
    let choice = document.getElementById("choice").value
    if(choice==1){
        document.getElementById("title").innerHTML = "<H2>Convert Farenheit to Celsius</H2>"
        document.getElementById("inputLetter").innerHTML = "&deg;F"
        document.getElementById("rangeInputLetter").innerHTML = "&deg;F"
        document.getElementById("outputLetter").innerHTML = "&deg;C"
        document.getElementById("rangeOutputLetter").innerHTML = "&deg;C"
    }else if(choice==2){
        document.getElementById("title").innerHTML = "<H2>Convert Celsius to Farenheit</H2>"
        document.getElementById("inputLetter").innerHTML = "&deg;C"
        document.getElementById("rangeInputLetter").innerHTML = "&deg;C"
        document.getElementById("outputLetter").innerHTML = "&deg;F"
        document.getElementById("rangeOutputLetter").innerHTML = "&deg;F"
    }else{
        document.getElementById("title").innerHTML = "<H2>Select option to begin</H2>"
        document.getElementById("inputLetter").innerHTML = "?"
        document.getElementById("outputLetter").innerHTML = "?" 
        document.getElementById("rangeInputLetter").innerHTML = "?"   
        document.getElementById("rangeOutputLetter").innerHTML = "?"
    }
};

function calculateValues(){
    let choice = document.getElementById("choice").value;
    let inputTemp = parseFloat(document.getElementById("inputDegree").value);
    let inputFromValue = parseFloat(document.getElementById("inputFromValue").value);
    let inputToValue = parseFloat(document.getElementById("inputToValue").value);

    if(isNaN(inputTemp)){
        document.getElementById("outputDegree").innerHTML = "";
    
    }else if(choice == 1){
        let outputDegree = ((inputTemp -32) * 5/9).toFixed(1);
        document.getElementById("outputDegree").innerHTML = outputDegree;
        
    }else if(choice == 2){
        let outputDegree = ((inputTemp * 9/5) +32).toFixed(1);
        document.getElementById("outputDegree").innerHTML = outputDegree;
    }
    
    if(isNaN(inputFromValue) || isNaN(inputToValue)){
        document.getElementById("outputFromValue").innerHTML = "";
        document.getElementById("outputToValue").innerHTML = ""; 
    
    }else if(choice == 1){
        let outputTop = ((inputFromValue -32) * 5/9).toFixed(1);
        let outputBot = ((inputToValue -32) * 5/9).toFixed(1);
        document.getElementById("outputFromValue").innerHTML = outputTop;
        document.getElementById("outputToValue").innerHTML = outputBot; 
        
    }else if(choice == 2){
        let outputLongForm = (inputTemp * 9/5) +32;
        let outputDegree = outputLongForm.toFixed(1);
        let outputTopLong = (inputFromValue * 9/5) +32;
        let outputTop = outputTopLong.toFixed(1);
        let outputBotLong = (inputToValue * 9/5) +32;
        let outputBot = outputBotLong.toFixed(1);
        document.getElementById("outputFromValue").innerHTML = outputTop;
        document.getElementById("outputToValue").innerHTML = outputBot;
    }
}

function calculateIntervals() {
    let choice = document.getElementById("choice").value;
    let inputTemp = parseFloat(document.getElementById("inputDegree").value);
    let inputFromValue = parseFloat(document.getElementById("inputFromValue").value);
    let inputToValue = parseFloat(document.getElementById("inputToValue").value);
    let intervalNumber = parseFloat(document.getElementById("intervalNumber").value);
    
    document.getElementById("error").innerHTML = "";
    document.getElementById("startingValues").innerHTML = "";

    if (isNaN(intervalNumber) || intervalNumber <= 0) {
        intervalNumber = 1;
    }

    if (choice == 1) {
        if (isNaN(inputFromValue) || isNaN(inputToValue)) {
            document.getElementById("error").innerHTML = `<h2 class="error">ERROR: Please enter "From" and "To" Values!</h2>`;
        } else if (inputFromValue >= inputToValue) {
            for (let i = inputFromValue; i >= inputToValue; i -= intervalNumber) {
                document.getElementById("startingValues").innerHTML += `
                <div class="interval-results">
                    <p>${i} &deg;F</p>
                    <img class="small-arrow" src="./img/arrow.png">
                    <p>${((i - 32) * 5 / 9).toFixed(1)} &deg;C</p>
                </div>`;
            }
        } else {
            for (let i = inputFromValue; i <= inputToValue; i += intervalNumber) {
                document.getElementById("startingValues").innerHTML += `
                <div class="interval-results">
                    <p>${i} &deg;F</p>
                    <img class="small-arrow" src="./img/arrow.png">
                    <p>${((i - 32) * 5 / 9).toFixed(1)} &deg;C</p>
                </div>`;
            }
        }
    } else if (choice == 2) {
        if (isNaN(inputFromValue) || isNaN(inputToValue)) {
            document.getElementById("error").innerHTML = `<h2 class="error">ERROR: Please enter "From" and "To" Values!</h2>`;
        } else if (inputFromValue >= inputToValue) {
            for (let i = inputFromValue; i >= inputToValue; i -= intervalNumber) {
                document.getElementById("startingValues").innerHTML += `
                <div class="interval-results">
                    <p>${i} &deg;C</p>
                    <img class="small-arrow" src="./img/arrow.png">
                    <p>${((i * 9 / 5) + 32).toFixed(1)} &deg;F</p>
                </div>`;
            }
        } else {
            for (let i = inputFromValue; i <= inputToValue; i += intervalNumber) {
                document.getElementById("startingValues").innerHTML += `
                <div class="interval-results">
                    <p>${i} &deg;C</p>
                    <img class="small-arrow" src="./img/arrow.png">
                    <p>${((i * 9 / 5) + 32).toFixed(1)} &deg;F</p>
                </div>`;
            }
        }
    } else {
        document.getElementById("error").innerHTML = `<h2 class="error">ERROR: Please select conversion option!</h2>`;
    }
}
