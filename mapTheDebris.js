/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    //Looping through each key in arr object
    for (let prop in arr){
      //Rounding off the orbital period value
     let orbitalP = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
      );
      
      //deleting the avgAlt property
      delete arr[prop].avgAlt;
      
      //adding orbitalPeriod property
      arr[prop].orbitalPeriod = orbitalP;
    }
  
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  