/* Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case. */
function titleCase(str) {
    // Divide sentence into an array of individual words & convert all elements to lower case
    let sentence = str.toLowerCase().split(" "), len = sentence.length;
    for (let i=0; i<len; i++){ // Loop through first elements in each word and convert them to Uppercase
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" "); // Join all the words with space between them
  }
  
  titleCase("I'm a little tea pot");
  