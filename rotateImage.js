function rotateImage(a) {
    const rotated = [];
    let l = a.length - 1; 
    for(let i = 0; i < a.length; i++) {
      rotated[i] = [];
      for(let j = 0; j < a.length; j++) {
        rotated[i][j] = a[l-j][i];
      }
    }
    
    return rotated;
  }
  
  
  