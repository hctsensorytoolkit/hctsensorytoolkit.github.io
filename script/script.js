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
