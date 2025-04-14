function solve(str){
    let arr = str.split('');
    let duplicates = 0;
    let checked = [];

    for ( let i = 0; i < arr.length; i ++){
        let char = arr[i];

        if ( !checked.includes(char)){
            checked.push(char);
            let count = str.split(char).length -1;
            
            if ( count > 1){
                duplicates ++;
            }
        }
    }

   console.log(duplicates);
   


}
solve("abcde");
solve("aabbcde");
solve("aabBcde");