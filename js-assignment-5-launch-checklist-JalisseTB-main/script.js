// Write your JavaScript code here!

window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
     response.json().then(function(json){
        const container = document.getElementById("missionTarget");
        
           container.innerHTML += `
           <div class="planetInfo">
              <h1> Mission Destination </h1>
              <ol>
                 <li>Name: ${json[3].name}</li>
                 <li>Diameter: ${json[3].diameter}</li>
                 <li>Star: ${json[3].star}</li>
                 <li>Distance: ${json[3].distance}</li>
                 <li>Moons: ${json[3].moons}</li>
              </ol>
           </div>
           <div>
              <img class="image" src="${json[3].image}">
           </div>
           `
        
     })
  })

  let form = document.querySelector('form');
  let pilotName = document.querySelector('input[name="pilotName"]');
  let copilotName = document.querySelector('input[name="copilotName"]');
  let fuelLevelInput = document.querySelector('input[name="fuelLevel"]');
  let cargoMassInput = document.querySelector('input[name="cargoMass"]');

  form.addEventListener("submit", function (event) {

     event.preventDefault();
     if (pilotName.value === "" || copilotName.value === "" || cargoMassInput.value === "" || fuelLevelInput.value === "") {
        alert("All fields are required");
     }
    //making sure they are numbers
     if (isNaN(cargoMassInput.value) || isNaN(fuelLevelInput.value)) {
        alert("Enter a number in cargo mass and fuel level.");
     } 
     //is fuel within range?
     if(fuelLevelInput.value < 10000){
        document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`
        document.getElementById("fuelStatus").innerHTML = `Not enough fuel for the journey.`
        document.getElementById("launchStatus").style.color = "red"
        document.getElementById("faultyItems").style.visibility = "visible"
     }
     // what about the cargo?
     if(cargoMassInput.value > 10000){
        document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`
        document.getElementById("cargoStatus").innerHTML = `Too much mass for the shuttle to take off.`;
        document.getElementById("launchStatus").style.color = "red"
        document.getElementById("faultyItems").style.visibility = "visible"
     }
     if(fuelLevelInput.value > 10000 && cargoMassInput.value <10000){
        document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch.`
        document.getElementById("launchStatus").style.color = "green"
     }
     // pilot name & launch status
     if (pilotName.value && copilotName.value){
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
        document.getElementById("faultyItems").style.visibility = "visible"
     }


  });
});

