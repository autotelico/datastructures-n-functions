function getFirst100Chars(string) {
  let newString = '';
  for (const char of string) {
    if (newString.length >= 100) {
      if (char === ' ') {
        return newString;
      }
    }
    newString += char;
  }
  return newString;
}

const myString =
  'AOSdo jdIO JOIDI OSaDIO WQDIHASUIDH AIUHWUDHAWUIDHiWUHdUASIDHiuW UADH AIUSDH UIWH DuiAHDU WH DIUAHDUAH SDIWHADUIA HSDUIA HSDUI HWD';

console.log(getFirst100Chars(myString));