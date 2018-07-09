const len = 9;
function sudoku2(grid) {
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(!row(grid, i, j) || !column(grid, i, j) || !neighbours(grid, i, j)) {
                return false;
            }
        }
    }
    
    return true;
}

//it's a valid row
function row(grid, i, j) {
    const value = grid[i][j];
    return grid[i].filter(found => found !== '.' && found === value).length > 1 ? false : true;
}

//it's a valid column
function column(grid, i, j) {
    let valid = 0;
    const value = grid[i][j];
    for(let k = 0; k < len; k++) {
        if(grid[k][j] !== '.' && grid[k][j] === value) {
            valid++;
        }
    }
    
    return valid > 1 ? false : true;
}

// valid neighbours
function neighbours(grid, i, j) {
    const pivot = grid[i][j];
    const invalid = (grid, row, column) => 
        grid[row] && grid[row][column] && 
        grid[row][column] === pivot; 
    if(
        invalid(i-1, j)   ||
        invalid(i+1, j)   ||
        invalid(i, j-1)   ||
        invalid(i, j+1)   ||
        invalid(i+1, j+1) ||
        invalid(i-1, j-1) ||
        invalid(i+1, j-1) ||
        invalid(i-1, j+1) 
    ) {
        return false;         
    }
    return true;      
}
