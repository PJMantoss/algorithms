/*
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    
    let elem = str.split(""); //which creates an array containing each individual character in the passed in string.
  
    for (let i=0; i<elem.length; i++){
  
      switch(elem[i]){
        case "&":
            elem[i] = "&amp;"; //Replace the HTML entities with their corresponding HTML entity string
            break;
        case "<":
            elem[i] = "&lt;";
            break;
        case ">":
            elem[i] = "&gt;";
            break;
        case '"':
            elem[i] = "&quot;";
            break;
        case "'":
            elem[i] = "&apos;";
            break;
      }
    }
      elem = elem.join(""); //converts the array of characters into a string to be returned.
      return elem;
  }
  
  convertHTML("Dolce & Gabbana");