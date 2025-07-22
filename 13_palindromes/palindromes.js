const palindromes = function (str) {
  let result = str.toLowerCase();
  const punctuation = [",", ".", "!", " "];
  for (let sym of punctuation)
    if (result.indexOf(sym)>=0)
      result = result.replaceAll(sym,"");
  
  return result == result.split("").reverse().join("");
};
//console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;
