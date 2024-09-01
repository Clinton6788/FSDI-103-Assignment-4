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
    let inputTemp = document.getElementById("inputDegree").value;
    let inputFromValue = document.getElementById("inputFromValue").value;
    let inputToValue = document.getElementById("inputToValue").value;

    if(choice == 1){
        let outputLongForm = (inputTemp -32) * 5/9;
        let outputDegree = outputLongForm.toFixed(1);
        let outputTopLong = (inputFromValue -32) * 5/9;
        let outputTop = outputTopLong.toFixed(1);
        let outputBotLong = (inputToValue -32) * 5/9;
        let outputBot = outputBotLong.toFixed(1);
        document.getElementById("outputDegree").innerHTML = outputDegree;
        document.getElementById("outputFromValue").innerHTML = outputTop;
        document.getElementById("outputToValue").innerHTML = outputBot;       
    }else if(choice == 2){
        let outputLongForm = (inputTemp * 9/5) +32;
        let outputDegree = outputLongForm.toFixed(1);
        let outputTopLong = (inputFromValue * 9/5) +32;
        let outputTop = outputTopLong.toFixed(1);
        let outputBotLong = (inputToValue * 9/5) +32;
        let outputBot = outputBotLong.toFixed(1);
        document.getElementById("outputDegree").innerHTML = outputDegree;
        document.getElementById("outputFromValue").innerHTML = outputTop;
        document.getElementById("outputToValue").innerHTML = outputBot;
    }
}
