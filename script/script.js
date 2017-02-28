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
	    this.style.backgroundColor = "pink";

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
	    this.style.backgroundColor = "pink";

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
	    
	    var element;
	    if(childIndex == 0) {
		switch(parentIndex) {
		case 0:
		    element = document.getElementById("output-over-over");
		    break;
		case 1:
		    element = document.getElementById("output-under-over");
		    break;
		case 2:
		    element = document.getElementById("output-neutral-over");
		    break;
		default:
		    element = document.getElementById("output-unselected");
		}
	    } else if(childIndex == 1) {
		switch(parentIndex) {
		case 0:
		    element = document.getElementById("output-over-under");
		    break;
		case 1:
		    element = document.getElementById("output-under-under");
		    break;
		case 2:
		    element = document.getElementById("output-neutral-under");
		    break;
		default:
		    element = document.getElementById("output-unselected");
		}
	    } else {
		element = document.getElementById("output-unselected");
	    }

	    element.style.display = "inline";
	    
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
