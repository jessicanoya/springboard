const allCheckedBoxes = document.querySelectorAll('input[type="checkbox"');

const checked = Array.from(allCheckedBoxes).filter(function (box) {
  return box.checked;
});

const completedItems = checked.map(function (checkbox) {
  return checkbox.parentElement.innerText;
});

// This function extracts text of completed (checked) items
function extractCompletedTodos() {
  const allCheckedBoxes = document.querySelectorAll('input[type="checkbox"');
  // Turn it into an array
  return (
    Array.from(allCheckedBoxes)
      // Filter for checked boxes
      .filter(function (box) {
        return box.checked;
      })
      // map over checked boxes to get parentElement.innerText
      .map(function (checkbox) {
        return checkbox.parentElement.innerText;
      })
  );
}
