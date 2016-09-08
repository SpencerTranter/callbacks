// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(i) {
    if (i == "Waldo") {
      found(arr.indexOf(i));
    }
  })
}

function actionWhenFound(num) {
  console.log(`Found waldo at index ${num}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);