// Create a variable storing the table element (i.e. the canvas)
const canvas = document.getElementById('pixelCanvas');
// Select color input;
// using an event listener to change colors in the cell once clicked
canvas.addEventListener('click', function(event) {
  if(event.target.tagName.toLowerCase() === 'td') {
    const pixelColor = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = pixelColor;
  }
});
// Select size input;
// call the makeGrid function when the submit button is clicked using an event listener
const sizeForm = document.getElementById('sizePicker');
sizeForm.addEventListener('submit', function() {makeGrid()}, true);
// Using a nested loop to create a table, with parameters collected from the input elements
function makeGrid() {

  const heightValue = document.getElementById('inputHeight').value;
  const widthValue = document.getElementById('inputWidth').value;

  canvas.innerHTML = '';

  for (let rowIndex = 0; rowIndex < heightValue; ++rowIndex) {
    const rowElement = document.createElement('tr');
    for (let colIndex = 0; colIndex < widthValue; ++colIndex) {
      const colElement = document.createElement('td');
      rowElement.appendChild(colElement);
    }
    canvas.appendChild(rowElement);
  }
  event.preventDefault();
}
