// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
let regex = /\s+|_+/g;
 str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.toLowerCase().replace(regex,"-").split(" ").join("-");
}

spinalCase('This Is Spinal Tap');
