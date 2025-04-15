function solve(dna){

    // let arr = dna.split('');
    // for ( let i = 0; i < arr.length; i++){

    //     if ( arr[i].includes('A')){
    //         arr[i].replace('A', 'T')
    //     }
    // }
    // console.log(arr.join(' '));
    dna = dna.replace('A', 'T');
    dna = dna.replace('T', 'A');
    dna = dna.replace('G', 'C');
    //dna = dna.replace('C', 'G');
    console.log(dna);
    
    
    


}
solve("ATTGC");
solve("GTAT");
// T -> A
// G -> C