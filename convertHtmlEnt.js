/*
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    // &colon;&rpar;
    let elem = str.split("");
  
    for (let i=0; i<elem.length; i++){
  
      switch(elem[i]){
        case "&":
            elem[i] = "&amp;";
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
      elem = elem.join("");
      return elem;
  }
  
  convertHTML("Dolce & Gabbana");