function solve(arr){

    for ( let i = 0; i < arr.length; i ++){
        if ( arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            console.log(arr[i]);
            
        }
    }


}
solve([ 1, 1, 1, 2, 1, 1 ]);
solve([ 0, 0, 0.55, 0, 0 ]);