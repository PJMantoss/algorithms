function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
  }
  
  confirmEnding("Mantoss", "s");
  