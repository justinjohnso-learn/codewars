function datingRange(age){
  //return min-max
  if (age <= 14){
    var min = Math.floor(age - .10 * age);
    var max = Math.floor(age + .10 * age);
  }
  else {
  var min = Math.floor((age/2) + 7);
  var max = Math.floor((age-7) * 2);
  }
  return (min + "-" + max);
}
