function isCryptSolution(crypt, solution) {
    const table = {};
    const values = ['', '', ''];
    
    // change the format of 'solution' to a hashtable to reduce loops
    solution.forEach((pair) => {
        table[pair[0]] = pair[1];
    });
    crypt.forEach((word, index) => {
        
        if(word.length > 1 && table[word.substring(0,1)] === '0'){ 
            return false;
        }
        
        [...word].forEach((letter) => {
            values[index] += table[letter];
        });
    })
    
    return parseInt(values[0]) + parseInt(values[1]) === parseInt(values[2]);
}
