/**
 * Return the base url with the  given enpoint
 * @param endPoint
 * @returns {string}
 */

export const BaseUrl = (endPoint: string): string => {
  return `https://jsonplaceholder.typicode.com/${endPoint}`;
};
