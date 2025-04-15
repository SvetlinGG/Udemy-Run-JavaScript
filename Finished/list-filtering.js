function solve(arr){

    let newArr = [];
    arr.map(word => {
        if (typeof word !== "string"){
            newArr.push(word);
        }
    });
    
    console.log(newArr);
    


}
solve([1,2,'a','b'])
solve([1,2,'aasf','1','123',123])