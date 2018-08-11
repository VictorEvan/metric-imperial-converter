/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    // handle input of kg
    if (/^[A-Za-z]+$/.test(input)) return 1;
    
    const numRegex = /^(\d+\.?\d*)(\/)?(\d+\.?\d*)?(\w+)$/;
    // capture result as regex match
    var matchedNums = input.match(numRegex);
  
    if (!matchedNums) return null;
    
    let result;
    
    if (matchedNums[2] === '/') {
      result = parseFloat(matchedNums[1]) / parseFloat(matchedNums[3]);
    } else {
      result = matchedNums[1]
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    const unitRegex = /[A-Za-z]+$/;
    const acceptedUnits = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    
    const matchedUnitArr = input.match(unitRegex);
    // if no match
    if (!matchedUnitArr) return null;
    
    let result;
    
    acceptedUnits.map(validUnit => matchedUnitArr[0].toLowerCase() === validUnit.toLowerCase() ? result = validUnit : null);

    return result;
    
  };
  
  this.getReturnUnit = function(initUnit) {
    initUnit = initUnit.toLowerCase();
    switch(initUnit) {
      case 'gal':
        return 'L';
      case 'l':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
    }
  };

  this.spellOutUnit = function(unit) {
    unit = unit.toLowerCase();
    switch(unit) {
      case 'gal':
        return 'gallons';
      case 'l':
        return 'liters';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometers';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    initUnit = initUnit.toLowerCase();
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch(initUnit) {
      case 'gal':
        return initNum*galToL;
      case 'l':
        return initNum/galToL;
      case 'lbs':
        return initNum*lbsToKg;
      case 'kg':
        return initNum/lbsToKg;
      case 'mi':
        return initNum*miToKm;
      case 'km':
        return initNum/miToKm;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };
  
}

module.exports = ConvertHandler;
