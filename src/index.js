
// You should implement your task here.

function flatten(array) {
  var flattend = [];
  let element = []
  for (let i = 0; i < array.length; i++) {
    if (i%2)
      element = array[i].reverse();
    else
      element = array[i]
    flattend.push(element)
  }
  return flattend.flat();
}


module.exports = function towelSort (matrix) {
  if (!matrix)
    return []
  return flatten(matrix);
}
