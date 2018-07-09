function firstNotRepeatingCharacter(s) {
    let repeated = {};
    let result = '_';
    
    [...s].forEach((letter)=> {
        if(repeated[letter] === undefined) {
            repeated[letter] = false;
        } else {
            repeated[letter] = true;
        }
           
    });
    
    const keys = Object.keys(repeated);
    for(let i = 0; i < keys.length; i++) {
         if(!repeated[keys[i]]) {
            result = keys[i];
            break;
        }
    }    
    return result;
}
