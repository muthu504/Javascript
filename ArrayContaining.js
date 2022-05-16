//Largest Number of elements
const result = (data) => {
    let max = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] > max) {
        max = data[i];
      }
    }
    console.log("===> :: max", max);
  }
  const inputData = [1,2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,17,19,20,21,22,23,24,25,26,27,28,29,30]
  result(inputData);

//Smallest Number of element 
function smallestElemnts(inputData) {
    var smallest = numbers[0];
    for (let i = 0; i < inputData.length; i++) {
        var elements = inputData[i];
        if (elements < smallest) {
            smallest = elements;
        }
    }
    return smallest;
}
console.log(smallestElemnts(inputData));
//sum value of elements
var sum = 0;
// Running the for loop
for (let i = 0; i < inputData.length; i++) {
    sum += inputData[i];
}

console.log("Sum is " + sum) 
//Average value of elements
var Avg = sum /inputData.length;
console.log (Avg);

//Even ount & Odd Count 
const even = [];
var total = even.length;
inputData.forEach(number => {
  if (number % 2 == 0) {
    even.push(number);
  }
});

console.log(even); 
console.log(even.length);
//Odd count
const odd = [];
var total1 = odd.length;
inputData.forEach(number => {
  if (number % 2 != 0) {
    odd.push(number);
  }
});

console.log(odd); 
console.log(odd.length);



