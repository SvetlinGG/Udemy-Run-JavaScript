function solve(str){

    let arr = str.split('');
    let newArr = [];
    for ( let i = 0; i < arr.length; i++){

        if ( arr[i] === arr.length){
            break;
        }

        if ( arr.length % 2 === 0){
            newArr.push(arr[i] + arr[i+1]);
        }
        
    }
    
    console.log(newArr);
    

}
solve('abcd');