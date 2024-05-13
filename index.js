let ages = [12, 15, 18, 20, 25];
let doubledAges = [];
for (let i = 0; i < ages.length; i++) {
  doubledAges.push(ages[i] * 2);
}
console.log(doubledAges);



ages.forEach(age => {
    console.log("Age:", age);
});

let adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults);

let ageStrings = ages.map(function(age) {
  return age.toString();
});
console.log(ageStrings);