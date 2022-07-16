// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */


}
function validateInput(testInput) {
    if (testInput === "" || testInput === undefined) {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }



    
}





function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilot1 = document.getElementById("pilotStatus");
    let copilot1 = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");


    if (validateInput(cargoLevel) === "Not A Number" || validateInput(cargoLevel) === "Empty") {
        alert("Please Enter a Number for Cargo Level")
    }
    if (validateInput(fuelLevel) === "Not A Number" || validateInput(fuelLevel) === "Empty") {
        alert("Please Enter a Number for Fuel Level")
    }
    if (validateInput(coPilot) === "Empty" || validateInput(coPilot) === "Is a Number") {
        alert("coPilot must be made of letters and/or words")
    }
    if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number") {
        alert("Pilot must be made of letters and/or words")
    }

    if (fuelLevel.value >= 10000 && cargoLevel.value <= 10000) {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level is sufficient for launch`;
        cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
        launchStatus.innerHTML = `Shuttle is ready for launch`
        document.getElementById("launchStatus").style.color = 'green'
        list.style.visibility = "visible";
    } else if (fuelLevel.value >= 10000 && cargoLevel.value > 10000) {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level is sufficient for launch`;
        cargoStatus.innerHTML = `Cargo mass is too high for launch`;
        launchStatus.innerHTML = `Shuttle is not ready for launch`
        document.getElementById("launchStatus").style.color = 'red'
        list.style.visibility = "visible";
    } else if (fuelLevel.value < 10000 && cargoLevel.value <= 10000) {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level is not sufficient for launch`;
        cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
        launchStatus.innerHTML = `Shuttle is not ready for launch`
        document.getElementById("launchStatus").style.color = 'red'
        list.style.visibility = "visible";
    } else if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level is not sufficient for launch`;
        cargoStatus.innerHTML = `Cargo mass is too high for launch`;
        launchStatus.innerHTML = `Shuttle is not ready for launch`
        document.getElementById("launchStatus").style.color = 'red'
        list.style.visibility = "visible";

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function(response) {});

    return planetsReturned;
}

function pickPlanet(planets) {

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;