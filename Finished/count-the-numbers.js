function solve(str){

    let arr = str.split('');
    let diff = '';
    let newArr = [];
    arr.map( word => {
        if ( word !== word){
            diff ++;
            newArr.push(diff)
        }
    })
    console.log(newArr);
    


}
solve("abcde");
solve("aabbcde");