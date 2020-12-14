function findSum(arr, target) {
    let numObject = {};
    for (let i = 0; i < arr.length; i++) {
      let thisNumb = arr[i];
      numObject[thisNumb] = i;
    }
    for (let i = 0; i < arr.length; i++) {
      let diff = target - arr[i];
      if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
        return [i, numObject[diff]];
      }
    }
  }
  console.log(findSum([1, 2, 3, 4, 6], 6));
