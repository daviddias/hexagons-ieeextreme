function processData(input) {
  var lines = input.split('\n');
  var N = parseInt(lines[0]);
  var A = lines[1].replace('\r\n', '').split(' ').map(function(x){return parseInt(x)}).filter(function(x){if(!isNaN(x)) return x});
  var Q = parseInt(lines[2]);
  lines.shift();
  lines.shift();
  lines.shift();

  for(var i=0;i<Q;i++) {
    var index = lines[i];
    var tmp = [];
    for(var j=0;j<N;j++){
      if(A[j-index]){
        tmp[j] = (A[j] + A[j-index])%(Math.pow(10,9)+7);
      } else {
        tmp[j] = (A[j] + A[j+N-index])%(Math.pow(10,9)+7);
      }
    }
    A = tmp;
  }

  var total = A.reduce(function(p,c){ return p+c })
  console.log(total);
  // console.log('A: ', A);
  // console.log('total 1: ', total);
  // console.log('total 2: ', total%(Math.pow(10,9)+7));
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
