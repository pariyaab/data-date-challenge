function QuickInsertionSort(arr) {
    if (!arr || 1 > arr.length) {
        return null;
    }
    var startIndex = 0,
        endIndex = arr.length - 1;
    // use 'stack' data structure to eliminate recursive call
    // DON'T use Array.push() and Array.pop() because slow !!!
    // so use manual indexing
    var stackLength = 0;
    // use 2 arrays instead of 1 array to fasten (reduce calculation of '+= 2' and '-= 2')
    var startIndexes = [];
    var endIndexes = [];
    // variables for partitioning
    var partitionIndex, pivot, left, right, _swap_temp;
    // variables for insertion sort
    var i, j, key;
    do {
        // in my testing, I found 32 is very good choice for totally generated-random data,
        // more than 100 will cause slower speed overal.
        if (32 >= endIndex - startIndex) {
            // even using insertionSort,
            // still need this because it still come here !!
            if (1 == endIndex - startIndex) {
                if (arr[startIndex].value > arr[endIndex].value) {
                    _swap_temp = arr[startIndex];
                    arr[startIndex] = arr[endIndex];
                    arr[endIndex] = _swap_temp;
                }
            } else {
                /**************************************
                 ****** start of insertion sort ********
                 ***************************************/
                for (i = startIndex + 1; endIndex >= i; i++) {
                    key = arr[i];

                    // Move elements of arr[startIndex..i-1], that are
                    // greater than key, to one position ahead
                    // of their current position
                    for (j = i - 1; j >= startIndex; j--) {
                        if (arr[j].value > key.value) {
                            arr[j + 1] = arr[j];
                            continue;
                        }
                        // use 'break' to avoid decreasing 'j'
                        break;
                    }
                    // swap
                    arr[j + 1] = key;
                }
                /**************************************
                 ****** end of insertion sort **********
                 ***************************************/
            }
            // continue to process next data, is there any data inside stack ?
            if (stackLength > 0) {
                // pop
                stackLength--; // reduce counter to get the last position from stack
                startIndex = startIndexes[stackLength];
                endIndex = endIndexes[stackLength];
            } else {
                // no data inside stack, so finish
                break;
            }
        } else {
            // squeeze every millisecond by put main logic here instead of separate function
            // in my testing using median_of_3 does not give better result for generated totally random data !!
            /*********************************************
             *********** start of partitioning ************
             ************* Tony Hoare *********************
             **********************************************/
            // minimize worst case scenario
            // === start of select pivot ============
            pivot = arr[startIndex].value;
            // try to find a different element value
            j = endIndex;
            while (pivot == arr[j].value && j >= startIndex) {
                j--;
            }
            if (j > startIndex) {
                // check which element is lower?
                // use the lower value as pivot
                if (pivot > arr[j].value) {
                    pivot = arr[j].value;
                }
            }
            // === end of select pivot ============
            left = startIndex;
            right = endIndex;
            do {
                while (pivot > arr[left].value) {
                    left++;
                }
                while (arr[right].value > pivot) {
                    right--;
                }
                if (left >= right) {
                    partitionIndex = right;
                    break;
                }
                //swap(left, right);
                // because many swaps, so optimize to implement swap here !
                _swap_temp = arr[left];
                arr[left] = arr[right];
                arr[right] = _swap_temp;
                left++;
                right--;
            } while (true); // loop forever until break
            if (partitionIndex > startIndex) {
                // has lower partition, so process it
                if (endIndex > partitionIndex + 1) {
                    // push 'right' side partition info into stack for later
                    startIndexes[stackLength] = partitionIndex + 1;
                    endIndexes[stackLength] = endIndex;
                    stackLength++; // increase counter for NEXT slot
                }
                // prepare next loop
                // keep same value for startIndex but update endIndex
                endIndex = partitionIndex;
            } else if (endIndex > partitionIndex + 1) {
                // at this point, it means there is no 'lower' side partition but has 'higher' side partition
                // prepare next loop
                // keep same value for endIndex but update startIndex
                startIndex = partitionIndex + 1;
            }
            /*********************************************
             ****** end of Tony Hoare partitioning ********
             **********************************************/
        }
    } while (endIndex > startIndex);
    return arr;
}
function QuickInsertionSortWithoutObject(arr) {
  if (!arr || 1 > arr.length) {
      return null;
  }
  var startIndex = 0,
      endIndex = arr.length - 1;
  // use 'stack' data structure to eliminate recursive call
  // DON'T use Array.push() and Array.pop() because slow !!!
  // so use manual indexing
  var stackLength = 0;
  // use 2 arrays instead of 1 array to fasten (reduce calculation of '+= 2' and '-= 2')
  var startIndexes = [];
  var endIndexes = [];
  // variables for partitioning
  var partitionIndex, pivot, left, right, _swap_temp;
  // variables for insertion sort
  var i, j, key;
  do {
      // in my testing, I found 32 is very good choice for totally generated-random data,
      // more than 100 will cause slower speed overal.
      if (32 >= endIndex - startIndex) {
          // even using insertionSort,
          // still need this because it still come here !!
          if (1 == endIndex - startIndex) {
              if (arr[startIndex] > arr[endIndex]) {
                  _swap_temp = arr[startIndex];
                  arr[startIndex] = arr[endIndex];
                  arr[endIndex] = _swap_temp;
              }
          } else {
              /**************************************
               ****** start of insertion sort ********
               ***************************************/
              for (i = startIndex + 1; endIndex >= i; i++) {
                  key = arr[i];

                  // Move elements of arr[startIndex..i-1], that are
                  // greater than key, to one position ahead
                  // of their current position
                  for (j = i - 1; j >= startIndex; j--) {
                      if (arr[j] > key) {
                          arr[j + 1] = arr[j];
                          continue;
                      }
                      // use 'break' to avoid decreasing 'j'
                      break;
                  }
                  // swap
                  arr[j + 1] = key;
              }
              /**************************************
               ****** end of insertion sort **********
               ***************************************/
          }
          // continue to process next data, is there any data inside stack ?
          if (stackLength > 0) {
              // pop
              stackLength--; // reduce counter to get the last position from stack
              startIndex = startIndexes[stackLength];
              endIndex = endIndexes[stackLength];
          } else {
              // no data inside stack, so finish
              break;
          }
      } else {
          // squeeze every millisecond by put main logic here instead of separate function
          // in my testing using median_of_3 does not give better result for generated totally random data !!
          /*********************************************
           *********** start of partitioning ************
           ************* Tony Hoare *********************
           **********************************************/
          // minimize worst case scenario
          // === start of select pivot ============
          pivot = arr[startIndex];
          // try to find a different element value
          j = endIndex;
          while (pivot == arr[j] && j >= startIndex) {
              j--;
          }
          if (j > startIndex) {
              // check which element is lower?
              // use the lower value as pivot
              if (pivot > arr[j]) {
                  pivot = arr[j];
              }
          }
          // === end of select pivot ============
          left = startIndex;
          right = endIndex;
          do {
              while (pivot > arr[left]) {
                  left++;
              }
              while (arr[right] > pivot) {
                  right--;
              }
              if (left >= right) {
                  partitionIndex = right;
                  break;
              }
              //swap(left, right);
              // because many swaps, so optimize to implement swap here !
              _swap_temp = arr[left];
              arr[left] = arr[right];
              arr[right] = _swap_temp;
              left++;
              right--;
          } while (true); // loop forever until break
          if (partitionIndex > startIndex) {
              // has lower partition, so process it
              if (endIndex > partitionIndex + 1) {
                  // push 'right' side partition info into stack for later
                  startIndexes[stackLength] = partitionIndex + 1;
                  endIndexes[stackLength] = endIndex;
                  stackLength++; // increase counter for NEXT slot
              }
              // prepare next loop
              // keep same value for startIndex but update endIndex
              endIndex = partitionIndex;
          } else if (endIndex > partitionIndex + 1) {
              // at this point, it means there is no 'lower' side partition but has 'higher' side partition
              // prepare next loop
              // keep same value for endIndex but update startIndex
              startIndex = partitionIndex + 1;
          }
          /*********************************************
           ****** end of Tony Hoare partitioning ********
           **********************************************/
      }
  } while (endIndex > startIndex);
  return arr;
}
module.exports = {
    QuickInsertionSort,
    QuickInsertionSortWithoutObject
};
