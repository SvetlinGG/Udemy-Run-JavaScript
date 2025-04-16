function solve(arr){

    let newArr = [1, 1, 1];
    let triArr = 0;
    for ( let i =0; i < newArr.length; i++){
        triArr += newArr[i];
        
    };
    newArr.push(triArr);
    console.log(newArr);
    


}
solve([1, 1 ,1, 3, 5, 9, 17, 31])