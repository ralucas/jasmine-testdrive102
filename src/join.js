// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 var output = '';
 if(arguments.length < 2){
 	delimeter = '';
 };
 for(var i=0; i<arr.length; i++) {
   if(i < (arr.length - 1)){
   output += arr[i] + delimeter;
   }
   else{
  	 output += arr[i];
   }
 }
 return output;
};