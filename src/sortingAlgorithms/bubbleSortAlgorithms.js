export function bubbleSort(array) {
    const animations = [];
    //const animations2 = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations /*, animations2*/);
    return animations;//, animations2;
}



function bubbleSortHelper(array, animations) {
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {

            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            animations.push([j + 1, array[j + 2]]/*, true]*/);

            //      animations.push([j + 1,array[j + 1]]);
            //       animations.push([j + 1,j + 1]);
            // animations.push([j, array[j]]);
            // animations.push([j + 1, array[j + 1]]);       


            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                animations.push([j, j]);
                animations.push([j, j]);
                animations.push([j, array[j]]);
                animations.push([j + 1, j + 1]);
                animations.push([j + 1, j + 1]);
                animations.push([j + 1, array[j + 1]]/*, true]*/);



                //      animations.push([j + 1,array[j + 1]]);

                //  animations.push([j,j + 1]);

                //   animations.push([j,array[j]]);
                //  animations.push([j + 1,array[j + 1]]);
                /*
                animations.push([j + 1, array[j + 1]]);
                animations.push([j + 1, array[j + 1]]);
                */
                //animations.push([j,j + 1]);
                //animations.push([j + 1,j + 1]);
                /*
                
                animations.push([j, array[j]]);
                animations.push([j, array[j]]);
                animations.push([j + 1, array[j + 1]]);
                animations.push([j + 1, array[j + 1]]);
                */
            }

        }
    }
}