function solve(str){

    let arr = str.split('');
    let newArr = [];
    for ( let i = 0; i < arr.length; i +=2){

        

        if ( arr.length % 2 === 0){
            newArr.push(arr[i] + arr[i+1]);
            
        }else {
            newArr.push(arr[i] + (arr[i+1] || '_'));
        }
        
        
    }
    
    console.log(newArr);
    

}
solve('abcd');
solve('abc');
solve('abcdef');