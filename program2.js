  const decodeTheRing = function (s, p) {
    let sIndex = 0, pIndex = 0;
    let starIndex = -1, matchIndex = 0;
  
    while (sIndex < s.length) {
      if (pIndex < p.length && (p[pIndex] === '?' || p[pIndex] === s[sIndex])) {
        // Current characters match, or pattern has '?' which can match any single character
        sIndex++;
        pIndex++;
      } else if (pIndex < p.length && p[pIndex] === '*') {
        // Found a '*', mark the position and proceed
        starIndex = pIndex;
        matchIndex = sIndex;
        pIndex++;
      } else if (starIndex !== -1) {
        // No match, but there was a previous '*', try to extend its match
        pIndex = starIndex + 1;
        matchIndex++;
        sIndex = matchIndex;
      } else {
        // No match and no previous '*', fail the match
        return false;
      }
    }
  
    // Check if remaining characters in the pattern can be accounted for
    while (pIndex < p.length && p[pIndex] === '*') {
      pIndex++;
    }
  
    return pIndex === p.length;
  };
  
  module.exports = decodeTheRing;
  
