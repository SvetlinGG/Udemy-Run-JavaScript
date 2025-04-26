function solve(str){
    str = str.toLowerCase();
    let result = '';
    for ( let i =0; i < str.length; i++){
        result += str.indexOf(str[i]) === str.lastIndexOf(str[i]) ? '(' : ')';
    }
    
    console.log(result);
    


}
solve('din');
solve('recede');