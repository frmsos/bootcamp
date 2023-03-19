function rotateArr(arr, shiftBy) {
    const moves = shiftBy < 0 ? ((shiftBy % arr.length) + arr.length) : shiftBy % arr.length;
    const visited = new Array(arr.length);
  
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
  
      let j = i;
      let temp = arr[j];
  
      while (true) {
        const newIndex = (j + moves) % arr.length;
        visited[newIndex] = true;
        if (newIndex === i) break;
        arr[j] = arr[newIndex];
        j = newIndex;
      }
  
      arr[j] = temp;
    }
  
    return arr;
  }
  const  array  = rotateArr([1,2,3], 1);
  console.log(array)