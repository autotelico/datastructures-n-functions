function findMostCommonChar(string) {
  let array = [];
  for (const char of string) {
    array.push(char);
  }
  return array
}


const str = 'A lot of people have been looking up to you lately!';

let r = console.log(findMostCommonChar(str));