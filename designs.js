function makeGrid() {
	// table canvas
	let table = document.getElementById('pixelCanvas');
	//grid height value
	let Height = document.getElementById('inputHeight').value;
	//grid width value
	let Width = document.getElementById('inputWidth').value;
	let tabledata = '';
	table.innerHTML = "";
	for(let y = 0; y < Height; y++) {
		for(let x = 0; x < Width; x++) {
			tabledata += '<td>';
		}
		tabledata += '<tr>';
	}
	table.innerHTML = tabledata;
	addClickEventToCells();
}
// Add click event to the cells
function addClickEventToCells() {
	let cells = document.getElementsByTagName('td');
	for(let i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", function(event) {
			let currenttd = event.target;
			currenttd.style.backgroundColor = document.getElementById('colorPicker').value;
		})
	}
}
