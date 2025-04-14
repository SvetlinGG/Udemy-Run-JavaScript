function solve(str){

    let arr = str.split(' ');
    arr = arr.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
    console.log(arr.join(' '));
    
    


}
solve("How can mirrors be real if our eyes aren't real")