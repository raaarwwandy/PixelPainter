function grid() {

//Container for the multiple divs
	var container = document.createElement('div');
	container.id = 'box';
	pixelPainter.appendChild(container);

//Create Erase button
	var eraser = document.createElement('button');
	eraser.id = 'erase';
	eraser.innerHTML = 'ERASE';
	pixelPainter.appendChild(eraser);

//Create Clear button

	var clear = document.createElement('button');
	clear.id = 'clears';
	clear.innerHTML = 'CLEAR';
	pixelPainter.appendChild(clear);
	clear.addEventListener('click', function(){clearGrids();});

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
		var colorArr = [ "red", "blue", "white", "black", "purple", "green"];
		var selector = document.getElementsByClassName('colorBtn');
		for(var k = 0; k < selector.length; k++){ 
			selector[k].addEventListener("click", function(event){
				this.style.backgroundColor;
				console.log("testing", this.style.backgroundColor);


			});
		}
		// console.log(selector);
		}
		//creating a click function on the pallet
			// var selector = document.getElementsByClassName('colorBtn');
			// for (var k = 0 ; k < colorArr.length; k++) {
			// 	selector.addEventListener("click",  function(event){
			//  	console.log(event);
			// });
			// console.log(selector);
			// // selector.addEventListener("click",  function(event){
			// // 	console.log(event);
			// // 		//calls upon an empty var to store a color
			// // 		var currColor;
			// // 		// 
					


			// 		//here is where when you click on the color in the pallet and it would change the color value to the one you pick from the pallet



			// 		});


//Clear the grid

	function clearGrids(){
		var clearIt = document.getElementsByTagName('miniDiv');
	}

		renderGrids(1722);
		clearGrids();
		colorSelector();
		renderColor();
		colorPicker();
}

grid();