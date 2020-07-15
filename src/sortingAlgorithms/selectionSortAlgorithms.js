export function selectionSortAnimation(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSortHelper(array, animations);
    return animations;
}

function selectionSortHelper(array, animations) {

    for (var i = 0; i < array.length; i++) {

        let min = i; //  storing the index of minimum element
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([i, array[i]]);
        for (var j = i + 1; j < array.length; j++) {
            animations.push([j, j]);
            animations.push([j, j]);
            animations.push([j, array[j]]);     //pointer loop through entire bar
            if (array[min] > array[j]) {

                min = j; // updating the index of minimum element
                /*        
                        animations.push([min,min]);
                        animations.push([min,min]);
                        animations.push([min, array[min],1]);     //update min element           
                 */
            }
        }

        if (i !== min) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
            animations.push([i, i]);
            animations.push([i, i]);
            animations.push([i, array[i]/*,true*/]);
            animations.push([min, min]);
            animations.push([min, min]);
            animations.push([min, array[min]]);
        }
    }
    return array;
}