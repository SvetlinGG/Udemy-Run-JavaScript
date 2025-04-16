function solve(arr){
    arr = arr.join('');
    for ( let i = 0; i < arr.length - 1; i ++){
        let current = arr.charCodeAt(i);
        let next = arr.charCodeAt(i + 1);

        if ( next - current > 1){
            console.log(String.fromCharCode(current + 1));
            
        }
    }
    
    
    
    


}
solve(['a','b','c','d','f']);
solve(['O','Q','R','S'])