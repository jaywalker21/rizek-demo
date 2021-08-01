/**
 * returns the default selected item from an array of objects based on following logic
 * if any object has key 'isDefault' set to true, then return the object
 * if no object has key 'isDefault' set to true, then return 0th item
 * if 0th item isn't present, or the param is not an array return null
 */
export const getDefaultSelectedFromArray = (arrayOfObjects) => {
  if (!Array.isArray(arrayOfObjects)) {
    return null;
  }
  return (
    arrayOfObjects.find((obj) => obj.isDefault) || arrayOfObjects?.["0"] || null
  );
};

/**
 * returns the currency formatted as per locale and whichever currency is passed
 */
export const formatCurrency = (amount, currency, locale = "en-IN") => {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency }).format(
    amount
  );
};

/**
 * takes the duration obect as argument and returns formatted time
 */
export const formatTime = (duration) => {
  if (!duration) return;
  const { h: hour, m: minutes } = duration;
  return `${hour}h${minutes}`;
};
