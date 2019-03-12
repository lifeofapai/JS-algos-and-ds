
//run a for each loop in both and == the characters in each array
/* function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // let used in limited scope
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
console.log(same([1,2,3], [4,1,9]));
*/

/* function countUniqueValues(arr1) {  // count all unique values in a SORTED array
  let arr = arr1.sort();
  let count = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i+1]) {
      count.push(arr[i]); // adds on to the array
    }
  }
      return count;
}

var x = countUniqueValues([1,1,1,1,1,2]);
console.log(x);
*/

/* Algo Practice
return the count of each character that exists in the string

Breaking down the problem:
1. place simple examples ex. "aaaa"
2. place more complicated examples ex. My PIN number is 1234
3. place invalid examples ex. spaces
*/

function same(arr1, arr2)
 {
  if(arr1.length != arr2.length) {
     return false;
   }

   let frequencyCounter1 = 0;
   let frequencyCounter2 = 0;

   for (let val of arr1) {
     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
   }
    for (let val of arr2) {
     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
   }

   for(let key in frequencyCounter1) {
     if(!(key ** 2 in frequencyCounter2)) {
     return false;
}
     for(let key in frequencyCounter1) {
       if(!(key ** 2 in frequencyCounter2)) {
       }
       return false;
       if (frequencyCounter2[key ** 2] != frequencyCounter1[key]) {
      return false;
       }
     }}
      return true;
     }
same([1,2,3,4], [1,4,9,16])
