function solve(num){
    let newArr = [];
    let arr = num.split(' ').map(n => Number(n)).sort((a, b) => a - b);
    newArr.push(arr.pop(), arr[0])
    console.log(newArr.join(' '));
    
    
    
    
    

}
solve("1 2 3 4 5");
solve("1 2 -3 4 5");
solve("1 9 3 4 -5");