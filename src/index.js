const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    let message = '';
    let morseCode = '';
const dot = '10';
const slash = '11';
const space = ' '
    const words = expr.split(`**********`);
    words.forEach(word => {
        if(message.length > 1) {
            message += space;
        }
            for( let i = 0; i < word.length; i+= 10) {
                let letter = [];
      letter = word.slice(i,i + 10);
      
      for(let j = 0; j < letter.length - 1; j+=2) {
          if(letter[j]+letter[j+1] === dot) {
morseCode += '.';

          }
          if(letter[j]+letter[j+1] === slash) {
            morseCode += '-';
                      }
      }
      message += MORSE_TABLE[morseCode];
      morseCode = '';
      

        }
    });
        return message;
}

module.exports = {
    decode
}