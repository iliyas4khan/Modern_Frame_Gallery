let array = new Array(10).fill(null); // initial array size 10

const arrayContainer = document.getElementById("arrayContainer");
const feedback = document.getElementById("feedback");

// Render array visually
function renderArray() {
  arrayContainer.innerHTML = "";
  array.forEach((val, i) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = val !== null ? val : "";
    arrayContainer.appendChild(cell);
  });
}
renderArray();

// Insert value at index
function insertAtIndex() {
  let index = parseInt(document.getElementById("indexInput").value);
  let value = parseInt(document.getElementById("valueInput").value);

  if (isNaN(index) || isNaN(value) || index < 0 || index >= array.length) {
    feedback.textContent = "Index out of bounds!";
    return;
  }

  // Shift right
  for (let i = array.length - 1; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = value;
  feedback.textContent = `Inserted ${value} at index ${index}`;
  renderArray();
}

// Delete value at index
function deleteAtIndex() {
  let index = parseInt(document.getElementById("indexInput").value);

  if (isNaN(index) || index < 0 || index >= array.length) {
    feedback.textContent = "Index out of bounds!";
    return;
  }

  // Shift left
  for (let i = index; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = null;

  feedback.textContent = `Deleted element at index ${index}`;
  renderArray();
}

// Search pattern
function searchPattern() {
  let pattern = document.getElementById("patternInput").value.split(",").map(Number);

  if (pattern.some(isNaN)) {
    feedback.textContent = "Enter a valid pattern (e.g., 1,2,3)";
    return;
  }

  for (let i = 0; i <= array.length - pattern.length; i++) {
    let segment = array.slice(i, i + pattern.length);

    if (JSON.stringify(segment) === JSON.stringify(pattern)) {
      highlightMatch(i, pattern.length);
      feedback.textContent = `Pattern ${pattern} found at index ${i}`;
      return;
    }
  }
  feedback.textContent = "Pattern not found!";
}

// Highlight matching cells
function highlightMatch(start, length) {
  const cells = document.querySelectorAll(".cell");
  for (let i = start; i < start + length; i++) {
    cells[i].classList.add("highlight");
  }
  setTimeout(() => {
    cells.forEach(c => c.classList.remove("highlight"));
  }, 1500);
}

// Reset array
function resetArray() {
  array.fill(null);
  renderArray();
  feedback.textContent = "Array reset!";
}
