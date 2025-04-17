function solve(s){
    let words = s.split(' ');
    words.sort((a, b) => a.length - b.length)
    console.log(words[0].length);
    


}
solve("I think Ruth's dog is cuter than your dog!");
solve("think Ruth's dog is cuter than your dog!");