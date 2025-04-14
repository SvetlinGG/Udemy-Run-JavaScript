function solve(n){

    let arr = [];
    let newArr = [];
    let total = 0;
    for ( let i = n; i <= 100; i += n){
        arr.push(i);
        
    }
    console.log(arr);
    
     for ( let num of arr){
        let strArr = num.toString();
        let num1 = Number(strArr[0]);
        let num2 = Number(strArr[1]);
        let sum = num1 + num2 ;
        newArr.push(sum);
     }
     console.log(newArr);
     for ( let i = 0; i < newArr.length; i ++ ){
        total += newArr[i];
     }
     console.log(total);
     
    
    
    
    
}
//solve(15)
solve(25)