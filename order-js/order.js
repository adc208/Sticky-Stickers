// script.js

// Grab elements
const sizeItems = document.querySelectorAll('#size li');
const qtyItems = document.querySelectorAll('#quantity li');
const materialItems = document.querySelectorAll('#material .card');
const shapeButtons = document.querySelectorAll('#shape .card');
const totalEl = document.getElementById('total');

let selectedSizePrice = 0;
let selectedQty = 0;
let selectedMaterialMult = 1;
let selectedShape = "";

// Utility to update total
function updateTotal() {
  const total = selectedSizePrice * selectedQty * selectedMaterialMult;
  totalEl.textContent = total.toFixed(2);
}

// Generic function for single-selection lists/buttons
function makeSelectable(items, callback) {
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      callback(item);
      updateTotal();
    });
  });
}

// Set up selections
makeSelectable(sizeItems, item => {
  selectedSizePrice = parseFloat(item.dataset.price);
});

makeSelectable(qtyItems, item => {
  selectedQty = parseInt(item.dataset.qty);
});

makeSelectable(materialItems, item => {
  selectedMaterialMult = parseFloat(item.dataset.mult);
});

makeSelectable(shapeButtons, item => {
  selectedShape = item.textContent;
  console.log("Selected Shape:", selectedShape);
});

// Order button functionality
const orderBtn = document.getElementById('order-btn');
orderBtn.addEventListener('click', () => {
  if (selectedSizePrice && selectedQty && selectedMaterialMult && selectedShape) {
    alert(`Order placed! Total: $${totalEl.textContent}`);
  } else {
    alert('Please select all options before ordering.');
  }
});
