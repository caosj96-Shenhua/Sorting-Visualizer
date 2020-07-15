let values = [];
let w = 10;

let states = [];

export function quickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, start, end, animations) {
  if (start >= end) {
    //      animations.push([true, start]);
    return;
  }
  let index = partition(arr, start, end, animations);

  quickSortHelper(arr, start, index - 1, animations);
  quickSortHelper(arr, index + 1, end, animations);
}

function partition(arr, start, end, animations) {
  /*   for (let i = start; i < end; i++) {
       states[i] = 1;
     }*/

  let pivotValue = arr[end];
  let pivotIndex = start;
  let left = start;
  let right = end;

  for (let i = start; i < end; i++) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([i, arr[i]]);

    if (arr[i] < pivotValue) {


      animations.push([i, pivotIndex]);
      animations.push([i, pivotIndex]);
      animations.push([i, arr[pivotIndex]]);
      /*
                animations.push([i,i]);
                animations.push([i,i]);
                animations.push([i, arr[i]]);
                animations.push([pivotIndex,pivotIndex]);
                animations.push([pivotIndex,pivotIndex]);
                animations.push([pivotIndex, arr[pivotIndex]]);  
                */
      swap1(arr, i, pivotIndex++, animations);
      //pivotIndex++;
    }
  }

  swap2(arr, pivotIndex, end, animations);


  return pivotIndex;

}
function swap1(arr, a, b, animations) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  animations.push([a, a]);
  animations.push([a, a]);
  animations.push([a, arr[a]]);
  animations.push([b, b]);
  animations.push([b, b]);
  animations.push([b, arr[b]]);
}


function swap2(arr, a, b, animations) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  animations.push([a, a]);
  animations.push([a, a]);
  animations.push([a, arr[a]]);
  animations.push([b, b]);
  animations.push([b, b]);
  animations.push([b, arr[b]]);
}

