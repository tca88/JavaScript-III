/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* //ANSWER
* 1. Window Binding: When in the global scope, the value of "this" will be the window/console object.
* 2. Implicit binding: This means automatic binding, and that if you're invoking a method on an object, then the "this" context is bound to wherever it was invoked. 
* 3. New Binding: Whenever a constructor function is used, "this" is tied to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding: Whenever .apply(), .bind() or .call() methods are used, "this" is explicity defined and overwrites where the this keyword is pointing to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function principle1(param) {
    console.log(this);
    return `Hello ${param}`;
  }
  
  principle1("hi");

// Principle 2

// code example for Implicit Binding

const restaurant = {
    owner_name: "Bob",
    restaurant_name: "Bob's Burgers",
    restaurant_type: "Fast Food",
    info: function() {
      return `${this.owner_name} owns ${this.restaurant_name} which is a ${this.restaurant_type} joint.`;
    }
  }

  console.log(restaurant.info());

// Principle 3

// code example for New Binding

function Show(character, name, genre) {
    this.character = character;
    this.show_name = name;
    this.genre = genre;
    this.network = "Netflix";
    this.opinion = function() {
      console.log(`${this.show_name} is my favorite ${this.genre} show on ${this.network}. My favorite character from that show is ${this.character}.`);
    };
  }
  
  const favorite = new Show("Dustin", "Stranger Things", "Science Fiction");
  favorite.opinion();

// Principle 4

// code example for Explicit Binding

const scientist = {
    name: "Rick Sanchez",
   tagline: "a scientist and the smartest person in the universe"
  }
  
  const grandson = {
    name: "Morty",
    tagline: "just trying to survive another day with my grandpa"
  }
  
  const skills = ["flying spaceships", " battling aliens", " traveling to different dimensions"];
  
  function summary(params) {
    return `What's up, broh! my name is ${this.name}, I'm ${this.tagline}. This is what I do on the daily: ${params}.`;
  }
  
  console.log(summary.call(scientist, skills));