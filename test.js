// Write a JavaScript function that checks if a string is a palindrome (reads the same backward as forward).

function checkPalindrome(str) {
    let newStr = str.split('').reverse().join('');
    if (str.length === newStr.length) {
        if (str.toLowerCase() === newStr.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(checkPalindrome("BOB"));


// Write a JavaScript class Animal with a method speak(). Then, create a subclass Dog that overrides the speak() method.

class Animal {
    speak() {
        console.log('Animal can speak');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog can bark');

    }
}

const bob = new Dog();
console.log(bob.speak());



// ⁠Write JavaScript code to create a new HTML element, add it to the DOM, and attach an event listener to it.

let button = document.createElement('button');
button.innerText = 'Change background color'
document.body.append(button);
button.addEventListener('click', () => {
    document.body.style.backgroundColor = "black";
})

// Write a JavaScript function that removes duplicates from an array.
// input  ⁠= [1,  2,  “hello”,  “world”,  { name: “Alice”, age: 30 },  { name: “Alice”, age: 30 },   [1, 2, 3],  [1, 2, 3],  “hello”,  3,  [4, 5, { nested: “object” }],  [4, 5, { nested: “object” }],  { nested: [1, 2, 3] },  { nested: [1, 2, 3] }]

  function removeDuplicates(arr) {
    const seen = new Set();
    
    return arr.filter(item => {
      const stringified = typeof item === 'object' ? JSON.stringify(item) : item;
      if (seen.has(stringified)) {
        return false;
      } else {
        seen.add(stringified);
        return true;
      }
    });
  }
  
  const input = [
    1, 2, "hello", "world", { name: "Alice", age: 30 }, 
    { name: "Alice", age: 30 }, [1, 2, 3], [1, 2, 3], 
    "hello", 3, [4, 5, { nested: "object" }], [4, 5, { nested: "object" }], 
    { nested: [1, 2, 3] }, { nested: [1, 2, 3] }
  ];
  
  const result = removeDuplicates(input);
  console.log(result);

//   output
  [
    1, 2, "hello", "world", 
    { name: "Alice", age: 30 }, 
    [1, 2, 3], 3, 
    [4, 5, { nested: "object" }], 
    { nested: [1, 2, 3] }
  ]
  
  
      
    
    
   



