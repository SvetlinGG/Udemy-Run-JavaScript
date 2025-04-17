function solve(str){

    let word = str.split('/');
    let word2 = word[2].split('.com')
    let word3 = word2.join(' ');
    let word4 = word3.split('.');
    if ( word4.length === 1){
        console.log(word4[0]);
        
    }else {
        console.log(word4[1]);
    }
    
    
    
    
    
    


}
solve("http://github.com/carbonfive/raygun");
solve("http://www.zombie-bites.com");
solve("https://www.cnet.com");

