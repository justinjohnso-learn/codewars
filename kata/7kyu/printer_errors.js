function printerError(s) {
    // your code
  var goodPrinter = [];
  var badPrinter = [];
  for (i=0; i < s.length; i++){
    if ((s.charAt(i) == 'a') || (s.charAt(i) == 'b') || (s.charAt(i) == 'c') || (s.charAt(i) == 'd') || (s.charAt(i) == 'e') || (s.charAt(i) == 'f') || (s.charAt(i) == 'g') || (s.charAt(i) == 'h') || (s.charAt(i) == 'i') || (s.charAt(i) == 'j') || (s.charAt(i) == 'k') || (s.charAt(i) == 'l') || (s.charAt(i) == 'm')){
      goodPrinter.push(s[i]);
    }
    else{
      badPrinter.push(s[i]);
    }
  }
  return(badPrinter.length + "/" + s.length);
}
