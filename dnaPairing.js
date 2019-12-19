/*
The DNA strand is missing the pairing element. Take each character, get its pair, 
and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.
*/

function pairElement(str) {
    return str.split("").map(elm => {
      if (elm === "A"){
        return ["A","T"];
      } else if (elm === "T"){
        return ["T","A"];
      } else if (elm === "G"){
        return ["G", "C"];
      } else {
        return ["C","G"];
      }
    });
  }
  
  pairElement("GCG");
  