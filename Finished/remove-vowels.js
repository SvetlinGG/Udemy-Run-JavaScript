function solve(str){
    let arr = str.split('')
    for ( let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case 'i':
            arr[i] = '';
            break;
            case 'I':
            arr[i] = '';
            break;
            case 'a':
            arr[i] = '';
            break;
            case 'A':
            arr[i] = '';
            break;
            case 'e':
            arr[i] = '';
            break;
            case 'E':
            arr[i] = '';
            break;
            case 'u':
            arr[i] = '';
            break;
            case 'U':
            arr[i] = '';
            break;
            case 'o':
            arr[i] = '';
            break;
            case 'O':
            arr[i] = '';
            break;
        }
    };
    console.log(arr.join(''));
    
    
    

}
solve("This website is for losers LOL!");