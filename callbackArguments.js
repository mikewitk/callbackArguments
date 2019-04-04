// The second argument/parameter is expected to be a function
//Exercise Callback Arguments
unction findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found him at ",index,"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//Exercise Array "for Each"
function findWaldo(arr, found) {
  arr.forEach(function(name){
    if (name == "Waldo"){
        found(arr.indexOf(name));
    }
  })
}