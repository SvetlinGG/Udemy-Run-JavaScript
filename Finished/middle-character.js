function solve(str){

    const len = str.length;
    const mid = Math.floor(len / 2);
  
    if (len % 2 === 0) {
      // Even length → return middle 2 characters
      console.log(str.slice(mid - 1, mid + 1));
       
    } else {
      // Odd length → return middle 1 character
      console.log(str.charAt(mid));
       
    }

    // let newArr = str.split('');
    // if ( newArr.length % 2 === 0){
    //     console.log((newArr.slice(newArr.length/2 -1, newArr.length - 2)).join(''));
    // }else {
    //     console.log(newArr.slice(newArr.length/2 , newArr.length -3).join(''));
    // }
    
    
    

    // for ( let i = 0; i < str.length; i++){
    //     if ( str.length % 2 === 0){
    //         console.log(str.length / 2);
            
    //     }else {
    //         console.log(str[i]);
            
    //     }
    // }
    
    


}
solve("test");
solve("testing");
solve("middle");
solve("A");