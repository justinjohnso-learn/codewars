// return masked string
function maskify(cc) {;
  for (i=0; i < (cc.length - 4); i++){
    cc = cc.split('');
    cc[i] = '#';
    cc = cc.join('');
  }
  return cc;
}
