/**
 * @summary Round a number to a place value
 * A `placeValue` of 10 would mean round number `num` to the nearest tenths place.
 */
Math.prototype.roundPlaceValue = (num, placeValue) => Math.round(num * placeValue) / placeValue;
