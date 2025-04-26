function solve(num){

    if ( num < 0){
        console.log(0);
        
    }
    let sum = 0;
    for ( let i = 0; i < num; i++){
        if ( i % 3 === 0 || i % 5 === 0){
            sum += i;
        }

    }
    console.log(sum);
    

}
solve(10);