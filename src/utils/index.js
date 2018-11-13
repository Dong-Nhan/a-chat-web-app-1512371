import hash from 'object-hash';

export const calculateMessgeId = function (from, to) {
  return hash([from, to], {
    algorithm: 'sha1',
    unorderedArrays: true
  })
}

const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;

export const isValidURL = function (urlString) {
  let match = urlString.match(urlRegex);
  //make sure this is an exact URL string, not a string contains URL
  if (match && match[0] === urlString) return true;
  return false
}