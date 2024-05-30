// LOOPS is use for repetitive object
 
//'for' loops keeps running while the condition is TRUE
for(let rep = 1; rep <= 20; rep++) {
    // console.log('Lifting weights repetition 1');
    console.log(`Lifting weights repetition ${rep} times.`);
}

const ridwan = [
        'Ridwan',
        'Oladoja',
        2024 - 1997,
        'designer',
        ['Micheal', 'ade', 'shola'],
        true
];
const types = []


for (let i = 0; i < ridwan.length; i++) {
    //Reading from ridwan array
    console.log(ridwan[i], typeof ridwan[i]);

    //Filling types array
    types[i] = typeof ridwan[i];
}
console.log(types);

//FOR example
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
   ages.push(2037 - years[i]); 
}
console.log(ages);