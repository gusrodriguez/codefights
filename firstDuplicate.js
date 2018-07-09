function firstDuplicate(a) {
    const map = {};
    firstIndex = -1;
    a.forEach((number, index) => {
        if(map[number] === undefined){
            map[number] = index;
        } else {
            if(firstIndex === -1) {
                firstIndex = map[number];    
            } 
        }
    });
    return firstIndex === -1 ? firstIndex : a[firstIndex];
}
