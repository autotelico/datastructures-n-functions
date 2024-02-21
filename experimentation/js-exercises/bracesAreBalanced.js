function bracesAreBalanced(str) {
  let bracketIsOpen = false;
  let currentlyOpenBracket = '';

  const bracketOpeners = ['(', '[', '{'];
  const bracketClosers = [')', ']', '}'];

  for (const char of str) {
    if (char === '(' || char === '[' || char === '{') {
      bracketIsOpen = true;
      currentlyOpenBracket = char;      
    }
    if (bracketIsOpen) {
        if (bracketClosers.includes(char))
    }
  }
  return !bracketIsOpen;
}

let r = bracesAreBalanced('I (cannot with) this');
console.log(r);
