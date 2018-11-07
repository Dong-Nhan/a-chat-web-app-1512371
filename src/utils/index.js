import hash from 'object-hash';

export const calculateMessgeId = function (from, to) {
  return hash([from, to], {
    algorithm: 'sha1',
    unorderedArrays: true
  })
}