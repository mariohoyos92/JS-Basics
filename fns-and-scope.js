//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name){
    if(name === "Tyler"){
      return true;
    }else{
      return false;
    }
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName(){
    return prompt("Please enter your name");
  }


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome(){
    alert("Welcome, " + getName());
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Parameters are the generic values that a function receives and uses internally while arguments are the specific values
  //passed to the function when it is invoked.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //false, zero, null, NaN, undefined, ""
  //to check if something is falsy it is easy to set up a function which returns true if the value passed to it is true, or falsy otherwise.
  // eg function truthy(){ if (value){return "truthy"} else {return "Falsy" } }



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){
    return "Mario Hoyos"
  }
  


//Now save the function definition of myName into a new variable called newMyName

 var newMyName = function(){
   return "Mario Hoyos";
 }

//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){
    return function(){
      return "Mario Hoyos";
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
innerFn();