var apples = 14
console.log(apples)

console.log('I have ${apples} apples.');


var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.',
};

let num = 16;
if (num > 10) {
  console.log('${num} is greater than 10.');
} else if (num == 10) {
  console.log('${num} is exactly 10.');
} else {
console.log('${num} must be less than 10.');
}

for (x = 0; x < 10; x++) {
console.log('Doing the same thing over and over.');
}

var base = 5
for (x = 0; x < 20; x++) {
console.log(x + base);
}

var total = 0
for (x = 0; x < 100; x++) {
  total += x
}
console.log(total)


for (h = 3; h < 15; h++) {
  if (h > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
  console.log("You are too short to ride this rollercoaster.");
  }
}


var containers = ['purse', 'wallet', 'backback'];
for (container in containers) {
console.log(containers[container]);
}


function hello_world() {
  return "Hello world!";
}
  
console.log(hello_world())


function add(firstNum, secondNum) {
  return firstNum + secondNum;
}
let amount = add(5, 7);
console.log(amount);