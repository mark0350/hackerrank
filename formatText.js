// "JavaScript" language question.
//
//   Write a function in JavaScript named "formatText" that finds all the duplicate words in a string with more than 3 characters and converts them to uppercase.
//
//   For example:
//
//   var text="Lorem a ipsum a dolor sit a sit ipsum dolor.";
// formatText(text);
//
// Will result in:
// "Lorem a IPSUM a DOLOR sit a sit IPSUM DOLOR."

function formatText(text) {
  let check = [];
  let endSign = '';
  if (text[text.length - 1] === '.') {
    text = text.slice(0, -1);
    endSign = '.';
  }

  let arr = text.replace(/\.$/, '').split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      let index = check.indexOf(arr[i].toUpperCase());
      if (index !== -1) {
        arr[index] = arr[index].toUpperCase();
        arr[i] = arr[i].toUpperCase();
      }
      check[i] = arr[i].toUpperCase();
    }
  }
  return arr.join(' ') + endSign;
}

var text = 'Lorem Lorem Lorem ttt ttt ttt ttt a ipsum a dolor sit a sit ipsum dolor.';
console.log(formatText(text));


