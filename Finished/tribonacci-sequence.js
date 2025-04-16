// function solve(arr, length){

//     let newArr = [...arr];
//     for ( let i = arr.length; i < length; i ++){
//         let next = newArr[i-1] + newArr[i-2] + newArr[i-3];
//         newArr.push(next);
//     }
//     console.log(newArr);
    

// }
// solve([1, 1, 1], 10);

function solve(arr, end){

    let newArr = arr;

    for ( let i = arr.length; i < end; i++){
        let next = newArr[i-1] + newArr[i-2];
        newArr.push(next);
    }
    console.log(newArr);
    

}
solve([1, 1, 2,], 10);