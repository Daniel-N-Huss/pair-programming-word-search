const wordSearch = (letters, word) => { 
    
    if (letters.length === 0) {
        return undefined;
    }

        //finds vertical words
    for (let i = 0; i < letters[0].length; i++) {
        let result = '';
        for (const arr of letters) {
            if (typeof arr[i] !== 'string'){
                return undefined;
            }
            result += arr[i];
            if (result.includes(word)) {
                return true;
            }
        }
    }
        
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false;
}

// loop through array, take index 0 of that array, and make it into a string


module.exports = wordSearch