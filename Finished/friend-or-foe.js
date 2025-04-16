function solve(arr){

    let newArr = [];
    // for ( let i = 0; i < arr.length; i ++){
    //     if (arr[i].length === 4){
    //         newArr.push(arr[i]);
    //     }
    // }
    // console.log(newArr);
    arr.map(word => {
        if (word.length === 4){
            newArr.push(word);
        }
    });
    console.log(newArr);
    

}
solve(["Ryan", "Kieran", "Jason", "Yous"])