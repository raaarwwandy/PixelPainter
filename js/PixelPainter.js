function grid() {

var currColor = "white";

//Container for the multiple divs
	var container = document.createElement('div');
	container.id = 'box';
	pixelPainter.appendChild(container);

//Create Erase button
	var eraser = document.createElement('button');
	eraser.id = 'erase';
	eraser.innerHTML = 'ERASE';
	pixelPainter.appendChild(eraser);
	eraser.addEventListener('click', function(){
		erase();
	});

	function erase(){
			currColor = "white";
	}


//Create Clear button

	var clear = document.createElement('button');
	clear.id = 'clears';
	clear.innerHTML = 'CLEAR';
	pixelPainter.appendChild(clear);
	clear.addEventListener('click', function(){
		clearGrids();
	});

	function clearGrids(){
		var grid = document.getElementsByClassName("miniDiv");
		for(var e = 0; e < grid.length; e++){
			currColor = 'white';
			grid[e].style.backgroundColor = currColor;
		}
	}

//Multiple Divs or 'Pixels'

	function renderGrids(x){
		for (var i = 0; i < x; i++){
			var pixels = document.createElement('div');
			pixels.className = 'miniDiv';
			container.appendChild(pixels);
		}
	}
	
//Create color palette



	function colorSelector(){

		var pallet = document.createElement('div');
		pallet.id = "pallet";
		pixelPainter.appendChild(pallet);
	}



	function renderColor(){	

		
		var colorArr = [ "red", "blue", "white", "black", "purple", "green"];


			for(var j =0 ; j < colorArr.length; j++){
				var color = document.createElement('div');
				color.className = "colorBtn";
				pallet.appendChild(color);
					switch(colorArr[j]){
						case "red":
						color.style.backgroundColor = "red";
						break;

						case "blue":
						color.style.backgroundColor = "blue";				
						break;

						case "green":
						color.style.backgroundColor = "green";
						break;

						case "white":
						color.style.backgroundColor = "white";
						break;

						case "black":
						color.style.backgroundColor = "black";
						break;

						case "purple":
						color.style.backgroundColor = "purple";
						break;

						case "green":
						color.style.backgroundColor = "green";
						break;
					}
				}
			}


//Load a color


		function colorPicker(){
		var selector = document.getElementsByClassName('colorBtn');
		for(var k = 0; k < selector.length; k++){ 
			selector[k].addEventListener("click", function(event){
			currColor = this.style.backgroundColor;
				console.log(currColor);
			});
		}
	}
	

//loads a color on the grid
	function pushColor(){
		var showColor = document.getElementsByClassName('miniDiv');
		for(var l = 0; l < showColor.length; l++){
			showColor[l].addEventListener("click", function(event){
			event.target.style.backgroundColor = currColor;
			});
		}

	}

		renderGrids(1722);
		clearGrids();
		colorSelector();
		renderColor();
		colorPicker();
		pushColor();
		erase();
}

grid();