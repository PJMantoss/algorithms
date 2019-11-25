harmlessRansomeNote = (note, magText) => {
    const validInput = typeof note === "string" && typeof magText === "string";
          if(!validInput) return new Error("You have passed in invalid input");

    const noteArray = note.split(" ").filter(Boolean);
    const magArray = magText.split(" ").filter(Boolean);

    const magHashTable = {};

    if(noteArray.length < 1 && magArray.length < 1){
        return false;
    }

    magArray.forEach(word => {
        if(!magHashTable[word]){
            magHashTable[word] = 0;
        }
        magHashTable[word]++;
    })

    let noteIsPossible = true;

    noteArray.forEach(word => {
        if(magHashTable[word]){
            magHashTable[word]--;

            if (magHashTable[word] < 0){
                return (noteIsPossible = false);
            }
        } else {
            return (noteIsPossible = false);
        }
    });

    return noteIsPossible;
}