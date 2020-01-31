/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/

/* SOLUTION
Create a variable that will make a copy of the full name that was passed as a parameter.
Then we can proceed to create the six methods needed and return what is asked for.
For the individual setters, we can use the split to turn the fullname into an array of 
first and last names and concatenate the unchanged portion of the name with what was 
passed as a parameter.
*/

var Person = function(firstAndLast) {
    
    let fullName = firstAndLast;
    
    this.getFirstName = function(){
      return fullName.split(" ")[0];
    }
  
    this.getLastName = function(){
      return fullName.split(" ")[1];
    }
  
    this.getFullName = function() {
      return fullName;
    };
    
    this.setFirstName = function(name){
      return fullName = name + " " + fullName.split(" ")[1];
    }
  
    this.setLastName = function(name){
      return fullName = fullName.split(" ")[0] + " " + name;
    }
  
    this.setFullName = function(name){
      return fullName = name;
    }
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  