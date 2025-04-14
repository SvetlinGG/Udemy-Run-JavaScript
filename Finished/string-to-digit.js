// function solve(text){

//     let arr = text.split('');
//     arr = arr.filter(char => char >= 'a' && char <= 'z').map(word => word.charCodeAt(0) - 96)
//     console.log(arr.join(' '));
    
    


// }
// solve("The sunset sets at twelve  o'clock.")

function alphabetPosition(text) {
    return text
      .toLowerCase()
      .split('')
      .filter(char => char >= 'a' && char <= 'z')
      .map(char => char.charCodeAt(0) - 96)
      .join(' ');
  }
  
  
  const input = "The sunset sets at twelve o' clock.";
  const output = alphabetPosition(input);
  
  console.log(output);