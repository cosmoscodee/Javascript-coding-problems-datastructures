/* Have the function TwoSum(arr) take the array of integers stored in arr,
 and determine if any two numbers (excluding the first element) in the array
 can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11],
 then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11].
 Your program should return all pairs, with the numbers separated by a comma,
 in the order the first number appears in the array. Pairs should be separated by a space.
 So for the example above, your program would return: 5,2 -4,11
*/
// If there are no two numbers that sum to the first element in the array, return -1

// ex) input : [7, 3, 5, 2, -4, 8, 11]
function twoSum(arr) {
let newArr = arr.slice(1);  // (6) [3, 5, 2, -4, 8, 11]
let max = arr[0]; // 7
let pairArray = [];

for(let i=0; i<newArr.length; i++) {
	for(let j=i+1; j<newArr.length; j++) {
		if((newArr[i]+newArr[j])==max) {
			pairArray.push(newArr[i]+","+newArr[j]);
    }
  }
}

let str = "";
for(let k=0; k<pairArray.length; k++) {
	str = str + pairArray[k]+" ";
}

if(!str) {
	return -1;
}

return str;
}
