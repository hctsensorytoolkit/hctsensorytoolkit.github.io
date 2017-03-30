window.onload = setup;

function setup() {
    var i;
    var inputsParent = document.getElementsByClassName("input-parent");
    var inputsChild = document.getElementsByClassName("input-child");

    var outputModule = (function() {
	var parentIndex;
	var childIndex;

	var outputUpdater = {};
	
	outputUpdater.updateParent = function() {
	    for(i = 0; i < inputsParent.length; i++) {
		inputsParent[i].style.backgroundColor = "white";
	    }
	    this.style.backgroundColor = "#DBDBDB";

	    switch(this.id) {
	      case "over-parent":
		parentIndex = 0;
		break;
	      case "under-parent":
		parentIndex = 1;
		break;
	      case "neut-parent":
		parentIndex = 2;
		break;
	    }
	    
	    update();
	};

	outputUpdater.updateChild = function() {
	    for(i = 0; i < inputsChild.length; i++) {
		inputsChild[i].style.backgroundColor = "white";
	    }
	    this.style.backgroundColor = "#DBDBDB";

	    switch(this.id) {
	    case "over-child":
		childIndex = 0;
		break;
	    case "under-child":
		childIndex = 1;
		break;
	    }
	    
	    
	    update();
	};

	function update() {
	    var allOutputs = document.getElementsByClassName("output");
	    
	    for(i = 0; i < allOutputs.length; i++) {
		allOutputs[i].style.display = "none";
	    }

	    document.getElementById("more-output-button").style.display = "none";
	    
	    var elements;
	    
	    if(childIndex == 0) {
		switch(parentIndex) {
		case 0:
		    elements = document.getElementsByClassName("output-over-over");
		    var button = document.getElementById("more-output-button");
		    button.style.display = "inline";
		    button.onclick = function() {
			location.href="over-over.html";
		    }
		    
		    break;
		case 1:
		    elements = document.getElementsByClassName("output-under-over");
		    var button = document.getElementById("more-output-button");
		    button.style.display = "inline";
		    button.onclick = function() {
			location.href="over-over.html";
		    }
		    break;
		case 2:
		    elements = document.getElementsByClassName("output-neutral-over");
		    var button = document.getElementById("more-output-button");
		    button.style.display = "inline";
		    button.onclick = function() {
			location.href="over-over.html";
		    }
		    break;
		
		}
	    } else if(childIndex == 1) {
		switch(parentIndex) {
		case 0:
		    elements = document.getElementsByClassName("output-over-under");
		    var button = document.getElementById("more-output-button");
		    button.style.display = "inline";
		    button.onclick = function() {
			location.href="over-over.html";
		    }
		    break;
		case 1:
		    elements = document.getElementsByClassName("output-under-under");
		    var button = document.getElementById("more-output-button");
		    button.style.display = "inline";
		    button.onclick = function() {
			location.href="over-over.html";
		    }
		    break;
		case 2:
		    elements = document.getElementsByClassName("output-neutral-under");
		    var button = document.getElementById("more-output-button");
		    button.style.display = "inline";
		    button.onclick = function() {
			location.href="over-over.html";
		    }
		    break;
		default:
		}
	    } else {	
		elements = document.getElementsByClassName("output-unselected");
	    }

	    for(i = 0; i < elements.length; i++) {
		elements[i].style.display = "inline";
	    }
	    
	}

	return outputUpdater;

    }());
			
    for(i = 0; i < inputsParent.length; i++) {
	inputsParent[i].addEventListener("click", outputModule.updateParent);
    }

    for(i = 0; i < inputsChild.length; i++) {
	inputsChild[i].addEventListener("click", outputModule.updateChild);
    }
    
}

function getOutputDesc(parentIndex, childIndex) {
    
    
}
