function solve(str){

    let arr = str.split('_');
    arr = arr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
    console.log(arr.join(''));
    
    

}
//solve("the-stealth-warrior");
//solve("The_Stealth_Warrior");