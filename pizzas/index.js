function processData(input) {
  var toppings = {
    Anchovies: 50,
    Artichoke: 60,
    Bacon: 92,
    Broccoli: 24,
    Cheese: 80,
    Chicken: 30,
    Feta: 99,
    Garlic: 8,
    Ham: 46,
    Jalapeno: 5,
    Meatballs: 120,
    Mushrooms: 11,
    Olives: 25,
    Onions: 11,
    Pepperoni: 80,
    Peppers: 6,
    Pineapple: 21,
    Ricotta: 108,
    Sausage: 115,
    Spinach: 18,
    Tomatoes: 14
  }
  var calPerSlice = 270;

  var inputSliced = input.replace('\r\n', '').split(' ');
  var combinations = parseInt(inputSliced.shift());
  var totalCalories = 0;

  for(var i=0;i<combinations;i++) {
    var numSlices = inputSliced[0];
    var tops = inputSliced[1].split(',');
    
    var calTops = 0;
    for(var j=0;j<tops.length;j++){
      calTops = calTops + toppings[tops[j]];
      // console.log('tops', tops[j]);
      // console.log('toppings', toppings[tops[j]]);
    }
    
    totalCalories = totalCalories + calTops * numSlices + numSlices * calPerSlice;
    // console.log('calTops %d   |  numSlices %d  | calPerSlice %d', calTops, numSlices, calPerSlice);
    // console.log('totalCalories ', totalCalories);

    inputSliced.shift();
    inputSliced.shift();
  }

  console.log('The total calorie intake is', totalCalories);
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
