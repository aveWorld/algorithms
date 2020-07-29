const arr = [6,2,4,8,3,1,5,7]

//bubble sort 
//complexity O(n*n)
//basically we looping through array and comparing 2 elements, if left element if lower that righ then we swap them
const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr.length-1; j++) {
        //here we comparing 2 elements and swap then if left element is lower
        if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
    return arr
   
}

//selection sort
//complexity O(n*n)
//The idea behind selection sort is that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position


const selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let min = i
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) min = j //finding the smallest element
    }
    if(min !== i) [arr[i], arr[min]] = [arr[min], arr[i]] //swap smallest to the first position
  }
  return arr
}

//insertion sort
//complexity O(n*n)
//The indea is to find the element that's not on the right place and move it to right place
//example [4,5,2]
//1) we compare 4 and 5, and found that all is corrent 2)we compare 5 and 2, and found that 2 < 5, 
//then we would compare 2 and 4 and found that 2 < 4, because 4 is the last element we would place 2 on the first place and get sorted array
const insertionSort = (inputArr) => {
  const length = inputArr.length;
  for (let i = 1; i < length; i++) {
      let key = inputArr[i];
      let j = i - 1;
      while (j >= 0 && inputArr[j] > key) { //here we just moving current item to his position
          inputArr[j + 1] = inputArr[j];
          j--;
      }
      inputArr[j + 1] = key;
  }
  return inputArr;
};

//merge sort
//complexity O(log(n) * n)
//we just spliting array into smaller peaces and then sort them
let merge = (left, right) => {
  let result = [],
      leftLen = left.length,
      rightLen = right.length,
      l = 0,
      r = 0;
  while (l < leftLen && r < rightLen) {
      if (left[l] < right[r]) {
          result.push(left[l]);
          l++;
      } else {
          result.push(right[r]);
          r++;
      }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
};
let mergeSort = (arr) => {
  let len = arr.length;
  if (len < 2) {
      return arr;
  }
  let mid = Math.floor(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

//binary search
//complexity(log(n))
//working only with already sorted array
//just halves array every time and check if the median is our number
const binarySearch = (arr,key, lengthArr = 0) => {
  let median = Math.floor(arr.length/2)
  if(arr[median] == key) return median + lengthArr
  else if(key > arr[median]) return binarySearch(arr.slice(median), key, median)
  else if(key < arr[median]) return binarySearch(arr.slice(0,median), key)
}


//Quick sort 
//complexity(lon(n) * n)
//we need to find pivot(usually last element of array) and set it to it's position in the array, and then do it again with left side and right side
let swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
let partition = (arr, low, high) => {
  let q = low, i;
  for (i = low; i < high; i++) {
      if (arr[i] < arr[high]) {
          swap(arr, i, q);
          q++;
      }
  }
  swap(arr, i, q);
  return q;
};
let quickSort = (arr, low = 0, high) => {
  if(high == undefined) high = arr.length - 1
  if (low < high) {
      console.log(arr)
      let pivot = partition(arr, low, high);
      quickSort(arr, low, pivot - 1);
      quickSort(arr, pivot + 1, high);
      return arr;
  }
};

//counting sort
//complexity O(n+k), where n - length of arr and k - max value of arr
//The idea is to create array with values from min to max and set them to 0. Then loop through input array and increment value each time it match value if input array
//example arr = [1,5,7]
//local arr = [0,0,0,0,0,0,0], length = 7(max values of input array)
//for(let val in arr) local_arr[val]++
//them just paste this values to input arr 
let countingSort = (arr, min, max) => {
  let i = min,
      j = 0,
      len = arr.length,
      count = [];
  for (i; i <= max; i++) {
      count[i] = 0;
  }
  for (i = 0; i < len; i++) {
      count[arr[i]] += 1;
  }
  for (i = min; i <= max; i++) {
      while (count[i] > 0) {
          arr[j] = i;
          j++;
          count[i]--;
      }
  }
  return arr;
};


console.log(countingSort(arr, 0, 10))
