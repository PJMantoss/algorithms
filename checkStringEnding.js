/* Check if a string (first argument, str) ends with 
the given target string (second argument, target). */
function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
  }
  
  confirmEnding("Mantoss", "s");
  