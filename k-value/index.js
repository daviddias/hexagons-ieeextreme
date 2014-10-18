// #!usr/bin/node

function processData(input) {
  var lines = input.split('\n');
  var firstRow = lines[0].split(' ');

  var N = firstRow[0];
  var M = firstRow[1];
  var K = firstRow[2];

  var numbers = lines[1].split(' ').map(function (el) { return parseInt(el); });
  
  for (var l=0; l<M-1; l++){
    numbers.push(numbers[l]);
  }

  // var subset = [];
  
  var smallest = 3000000000000;

  for (var i=0; i<N; i++) {
    // for(var j=0; j<M; j++) {
    //   subset.push(numbers[i+j]);
    // }

    var slice = numbers.slice(i,i+M);
    console.log('i', i);
    console.log('slice', slice);
    console.log('numbers', numbers);

    var tmp = kSmallest(slice, K);    
    smallest = smallest < tmp ? smallest: tmp;
    // subset = [];
  }

  console.log(smallest);


  function kSmallest(values, order) {
    var s = values.sort(function (a,b) {
        if (a<b) { return -1;
        } else if (a>b) { return 1;
        } else { return 0; }
      });
    return s[order-1];


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
