function sum(x, y) {
    if (y !== undefined) {
      return x + y;
    } else {
      return function (y) {
        return x + y;
      };
    }
  }
  
  console.log(sum(2,3));   // Outputs 5
  console.log(sum(2)(3));  // Outputs 5