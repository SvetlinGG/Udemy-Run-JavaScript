function solve(str){
    let arr = str.split('');
    let countA = 0; 
    let countO = 0; 
    let countU = 0; 
    let countE = 0; 
    let countI = 0;

    for ( let i = 0; i < arr.length; i++){

        if ( arr[i] === 'a'){
            countA ++;
        }else if ( arr[i] === 'o'){
            countO ++;
        }else if ( arr[i] === 'e'){
            countE ++;
        }else if ( arr[i] === 'i'){
            countI ++;
        }else if ( arr[i] === 'u'){
            countU ++;
        }
        
    }
    let sum = countA + countE + countI + countO + countU;
    console.log(sum);
    


}
solve('faleminderit');
solve('toni garabedyan');
