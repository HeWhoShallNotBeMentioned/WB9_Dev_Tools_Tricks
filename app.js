const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
//Console Elements tab. Click on specific element. Click on break and then attribute modifications.
// Regular
console.log('hello');
// Interpolated
console.log('I am a %s string', '💩');
// Styled
console.log("%c I am the best text.", "color:purple; font-size:15px; background: orange;text-shadow: 5px 5px 0 white;");
// warning! - will give stack trace
console.warn("Danger Will Robinson! Danger!");
// Error :| - will give stack trace
console.error('You broke me!');
// Info - Special info tag is not currently working in Chrome Dev Tools
console.info('Your mother smells of Elderberries!');
// Testing - Could check if an element has a class for example.
console.assert(5 === 5, "WRONG!!!");
console.assert(5 === 6, "WRONG!!!");
// clearing - clears console
console.clear();
// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p); //will show you the actual element;
console.dir(p); //give pulldown of available elements and methods;
// Grouping together - can use group to have group open by default;
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count('Wes');
 console.count('Wes');
 console.count('Steve');
 console.count('Steve');
 console.count('Wes');
 console.count('Steve');
 console.count('Wes');
 console.count('Steve');
 console.count('Steve');
 console.count('Steve');
 console.count('Steve');
 console.count('Steve');
// timing
console.time('fetching data');
   fetch('https://api.github.com/users/wesbos')
     .then(data => data.json())
     .then(data => {
       console.timeEnd('fetching data');
       console.log(data);
     });
//table
console.table(dogs);
