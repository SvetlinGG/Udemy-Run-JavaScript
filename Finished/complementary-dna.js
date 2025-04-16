function solve(dna){

    let arr = dna.split('').map(word => {
        if ( word === 'A'){
            return 'T';
        }
        if ( word === 'T'){
            return 'A';
        }
        if ( word === 'G'){
            return 'C';
        }
        if ( word === 'C'){
            return 'G';
        }

    });
    console.log(arr.join(''));
    

    // let arr = dna.split('');
    // for ( let i = 0; i < arr.length; i++){

    //     if ( arr[i].includes('A')){
    //         arr[i].replace('A', 'T')
    //     }
    // }
    // console.log(arr.join(' '));
    // dna = dna.replace('A', 'T');
    // dna = dna.replace('T', 'A');
    // dna = dna.replace('G', 'C');
    // //dna = dna.replace('C', 'G');
    // console.log(dna);

    // return dna
    // .split('')
    // .map(base => {
    //   if (base === 'A') return 'T';
    //   if (base === 'T') return 'A';
    //   if (base === 'C') return 'G';
    //   if (base === 'G') return 'C';
    // })
    // .join('');
    
    
    
    


}
solve("ATTGC");
solve("GTAT");
// T -> A
// G -> C