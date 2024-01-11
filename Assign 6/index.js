// Write Javascript code that effectively demonstrates concepts of scope, closures, and the this keyword.

// Scope

let globalVariable = "I'm a global variable"; // global scope

function demonstrateScope() {
  let localVariable = "I'm a local variable"; // local variable
  console.log(globalVariable);
  console.log(localVariable);
}

demonstrateScope();

console.log(globalVariable);
//console.log(localVariable); // not accessible - will throw an error

// Closures - show that you can access variables declared in an outer function. This is valuable when you need to hold onto local variable.

// track number of "likes" a social media post gets
function handleLikePost() {
  let likeCount = 0;
  return function addLike() {
    likeCount += 1;
    return likeCount;
  };
}

const like = handleLikePost();
console.log(like());
console.log(like());
console.log(like());

/*The 'this' keyword is essentially a reference to an object the value of that object can vary depending on the how the function is being called. For example 

// Demonstrating the "this" keyword
 Using 'this' in an Object Method - 'this' references the object that it's on
*/
const dog = {
  name: "Fido",
  bark: function () {
    console.log(this.name + " says 'Arf! Arf!'");
  },
};

dog.bark();

// Demonstrating how the context of 'this' can change
// Using "this" in a Constructor function

class User {
  constructor(first, age) {
    this.first = first;
    this.age = age;
  }
  getAge() {
    console.log(`${this.first} age is ${this.age}`);
  }
}

const bob = new User("Bob", 24);
bob.getAge();
