function solve(arr, sum){

    for ( let i = 0; i < arr.length; i++){
        for ( let j = i +1; j < arr.length; j++ ){
            if ( arr[i] + arr[j] === sum){
                console.log([i, j]);
                
            }
        }
    }
    
    
    
    
    
    
    
    
    


}
solve([1, 2, 3], 4);
solve([3, 2, 4], 6);