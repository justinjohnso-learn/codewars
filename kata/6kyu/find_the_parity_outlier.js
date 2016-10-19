function findOutlier(integers){
  //your code here
  var oddNumbers = [];
  var evenNumbers = [];

  for (i = 0; i < integers.length; i++){
    if (integers[i]%2 == 0){         // if integer is even
      evenNumbers.push(integers[i]); // send to evenNumbers
    }
    else{                            // if integer is odd
      oddNumbers.push(integers[i]);  // send to oddNumbers
    }
  }
  if (evenNumbers.length > oddNumbers.length){  // if # of even > # of odd
    return oddNumbers[0];                       // return odd (outlier)
  }
  else{                                         // if # of odd > # of even
    return evenNumbers[0];                      // return even (outlier)
  }
}
