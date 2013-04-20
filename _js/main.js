//  Mold Fitness :: Project: Web App Part 2 :: By Tony Keiser 1112

//Wait until DOM is loaded
window.addEventListener("DOMContentLoaded", function(){


//Global Var
	var id       = Math.floor(Math.random()*1000000000),
		name     = document.getElementById("name"),
		pass     = document.getElementById("pass"),	
		weight   = document.getElementById("weight"),
		muscle   = document.getElementById("muscle"),
		reps     = document.getElementById("reps"),
		sets     = document.getElementById("sets"),
		cardio   = document.getElementById("cardio"),
		time     = document.getElementById("time"),
		notes    = document.getElementById("notes"),
		date     = document.getElementById("date"),
		male     = document.getElementById("male"),
		female   = document.getElementById("female"),
	    gender   = document.getElementsByName("gender"),
	    nReps    = document.getElementById("nReps"),
	    nSets    = document.getElementById("nSets"),
	    view     = document.getElementById("view"),
	    add      = document.getElementById("add");
	    recover  = document.getElementById("recover");
	
//Radio Gender Value	
	var setGender = function(){
		if (gender[0].checked!=true){
			localStorage.setItem("Gender", gender[1].value);
		} else {
			localStorage.setItem("Gender", gender[0].value);
			}
		};

//Range Display Value
	var changeSets = function(){		
		nSets.innerHTML=sets.value + " Sets of..."
	}

	var changeReps = function(){		
		nReps.innerHTML=reps.value*5 + " Reps"
	}
	
	var changeCardio = function(){		
		nTime.innerHTML=time.value*5 + " minutes."
	}
//Checkbox Value 

	var cardioChecked = function(){
		if(cardio.checked!=true){
			document.getElementById("cardioBox").setAttribute("class", "hide");
		} else {
			document.getElementById("cardioBox").removeAttribute("class");
			localStorage.setItem("Cardio Today", cardio.checked);
		}
	}

//Set Data		
	var setData = function(){	
		localStorage.setItem("Unique ID", id);
		localStorage.setItem("Name", name.value);
		localStorage.setItem("Password", pass.value);
		// Gender
		localStorage.setItem("Weight", weight.value);
		localStorage.setItem("Activity", muscle.value);
		localStorage.setItem("Number of Sets", sets.value + " Sets of...");
		localStorage.setItem("Number of Reps", reps.value*5 + " Reps");
		// Cardio Today
		localStorage.setItem("Cardio Time", time.value*5 + " Minutes");
		localStorage.setItem("Notes", notes.value);
		localStorage.setItem("Date", date.value);
	};	
	
//Display Local	
	var viewData = function(){
			var valueList = [];
			for (i=0, n=localStorage.length; i<n; i++){
				var theKey   = localStorage.key(i);
				var theValue = localStorage.getItem(theKey);
				
			valueList.push(theKey + " : " + theValue + " <br>");
					
				};	
			if(localStorage.key(0)<=0){
				alert("No Data Saved.");
			} else {
				document.getElementById("viewForm").removeAttribute("class");
				document.getElementById("workout").innerHTML=valueList
			}
console.log(valueList);
		};

		
//Add Data & Clear Form
	var addData = function(){
		document.getElementById("form").reset();
		alert("Workout Added");
		document.location.reload();
	}
		
//Clear Data
	var clearData = function(){
		localStorage.clear();
		alert("Data Erased!");
	}

/*
//Get Data
var recoverData = function(){
	for (i=0, l=localStorage.lenghth; i<l; i++){
		var getKey   = localStorage.key(i);
		var getValue = localStorage.getItem(getKey);
		 
		console.log( getKey + getValue);
		
	
	}
}

recoverData();
*/

//EventListeners
	name.addEventListener("blur", setData);
	pass.addEventListener("blur", setData);
	male.addEventListener("change", setGender);
	female.addEventListener("change", setGender);
	weight.addEventListener("blur", setData);
	muscle.addEventListener("change", setData);
	sets.addEventListener("change", setData);
		sets.addEventListener("change", changeSets);
	reps.addEventListener("change", setData);
		reps.addEventListener("change", changeReps);
	cardio.addEventListener("change", cardioChecked)
	time.addEventListener("change", setData);
		time.addEventListener("change", changeCardio);
	notes.addEventListener("blur", setData);
	date.addEventListener("blur", setData);
	view.addEventListener("click", viewData);
	add.addEventListener("click", addData);
	clear.addEventListener("click", clearData);

});