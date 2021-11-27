/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const size = image.length;
    
    for(let i=0;i<size;i++){
        for(let j=0;j<size/2;j++){
            const tmp = image[i][j];
            image[i][j] = image[i][size-j-1];
            image[i][size-j-1] = tmp;
        }
    }
    
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            image[i][j] = image[i][j] === 0 ? 1 : 0;
        }
    }
    
    return image;
};