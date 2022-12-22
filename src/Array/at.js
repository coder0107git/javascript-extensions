/**
 * Implementation based directly on the specification at https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at
 */
Array.prototype.at = Array.prototype.at || function (index) {
  function ToIntegerOrInfinity(argument) {
    let number = parseFloat(argument);
    let sign = Math.sign(number);
    
    if (sign == NaN || sign == -0 || sign == 0) {
      return 0;
    } if (sign == "-1" && number == -Infinity) {
      return -Infinity;
    } if (sign == "1" && number == Infinity) {
      return Infinity;
    }
    
    let integer = Math.floor(Math.abs(number));
    if (number < -0) {
      integer = -integer;
    }
    
    return integer;
  }
  
  const O = this;
  const len = O.length;
  const relativeIndex = ToIntegerOrInfinity(index);
  let k;
  
  if(relativeIndex >= 0) {
    k = relativeIndex;
  } else {
    k = len + relativeIndex;
  }
  
  if (k < 0 || k >= len) {
    return undefined;
  }
  
  return O[k];
}
