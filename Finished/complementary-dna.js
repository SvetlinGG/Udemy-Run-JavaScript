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

    //     if ( arr[i].in