const fibonacci = function(index) {
  index = parseInt(index);
  let fibbonaciArr =[0,1,1];
  if (index < 0)
    return "OOPS";
  for(let i = 3; i <= index; i++){
    fibbonaciArr[i] = fibbonaciArr[i-1] + fibbonaciArr[i-2];
	}
	return fibbonaciArr[index];
};
// Do not edit below this line
module.exports = fibonacci;