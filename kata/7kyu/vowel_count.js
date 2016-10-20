function getCount(str) {
  var vowelsCount = 0;
  var vowelsArray = [];
  // enter your majic here
  for (i=0; i<str.length; i++){
    if ((str[i] == 'a') || (str[i] == 'e') || (str[i] == 'i') || (str[i] == 'o') || (str[i] == 'u')){
    vowelsArray.push(str[i]);
    }
  }
  vowelsCount = vowelsArray.length;
  return vowelsCount;
}
