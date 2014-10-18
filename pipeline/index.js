function processData(input) {
  var inputSplitted = input.split('\n');

  var N = parseInt(inputSplitted[0])
  inputSplitted.shift();
  var matrix = [];
  var pathSums = [];
  var point = {x: 1, y: 1 }

  for(var i=0;i<inputSplitted.length;i++) {
    matrix.push(inputSplitted[i].split(' '));
  }
  // console.log('matrix', matrix);

  traverse(point, 0);


  console.log(pathSums);

  function traverse(currentPoint, pathSum) {
    // 1. Have I reached? Add the pathSum to pathSums
    if(currentPoint.x === N) {
      return pathSums.push(pathSum);
    }

    // 2. Can I go up? Sum the value and update the currentPoint and call traverse recursively
    if (!(currentPoint.y - 1 === 0)) {
      currentPoint.y = currentPoint.y - 1;
      pathSum = pathSum + matrix[currentPoint.x - 1][currentPoint.y - 1];
      traverse(currentPoint, pathSum);
    }

    // 3. Can I go down? Sum the value and update the currentPoint and call traverse recursively
    if (!(currentPoint.y + 1 === N)) {
      currentPoint.y = currentPoint.y = 1;
      pathSum = pathSum + matrix[currentPoint.x - 1][currentPoint.y - 1];
      traverse(currentPoint, pathSum);
    }    

    // 4. Can I go left? Sum the value and update the currentPoint and call traverse recursively
    if (!(currentPoint.x - 1 === 0)) {
      currentPoint.x = currentPoint.y - 1;
      pathSum = pathSum + matrix[currentPoint.x - 1][currentPoint.y - 1];
      traverse(currentPoint, pathSum);
    }    

    // 5. Can I go right? Sum the value and update the currentPoint and call traverse recursively
    // if (!(currentPoint.x + 1 === 0)) {
    // always go right , stop condition for going rigth is on 1.
    currentPoint.x = currentPoint.x + 1 ;
    pathSum = pathSum + matrix[currentPoint.x - 1][currentPoint.y - 1];
    traverse(currentPoint, pathSum);
    // }  
  }


} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
