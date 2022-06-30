module.exports = function toReadable (number) {
  start = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen', 'eighteen','nineteen'];

  end = [' hundred ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',   'ninety' ];
  
  let arr = [];
  if (number === 0 ) {
    return 'zero'
  }
  if ( number < 20 ) {
    f1(number);
    return arr.join('');
  } else if (number < 100) {
      f2 (number);
  return arr.join('');
  } else {
      f3 (number);
  } return arr.join('').trim();


function f1 (number) { 
  let a = start[number];  
  arr.push(a);
}

function f2 (number) {
  let a = String(number)[0];
  let b = String(number)[1];
  let c = Number(a);
  let d = Number(b);
  arr.push(end[a]);
  if (d != 0 ) {
  arr.push(' ');
  }
  arr.push(f1(d));
}
function f3 (number) {
  let a = String(number)[0];
  let b = Number(a);
  f1(b);
  arr.push(end[0]);
  let c = String(number).slice(1);
  let d = Number(c);
  if (d < 20 ) {
    f1(d);   
  } else {
    f2 (d);
  }
};
}
