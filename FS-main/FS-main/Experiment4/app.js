// Get SVG element and controls
const svg = document.getElementById('canvas');
const colorPicker = document.getElementById('colorPicker');

// Stack to keep track of drawn shapes
let drawings = [];

// Mouse down event to draw a circle
svg.addEventListener('mousedown', (e) => {
  // create a new SVG <circle>
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', e.offsetX);
  circle.setAttribute('cy', e.offsetY);
  circle.setAttribute('r', '8');
  circle.setAttribute('fill', colorPicker.value); // use selected color

  // append circle to SVG
  svg.appendChild(circle);

  // push to stack for undo
  drawings.push(circle);
});

// Undo last shape
function undo() {
  const last = drawings.pop();
  if (last) {
    svg.removeChild(last);
  }
}

// Clear all shapes
function clearCanvas() {
  drawings.forEach(shape => svg.removeChild(shape));
  drawings = [];
}