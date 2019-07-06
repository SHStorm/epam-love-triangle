/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let counter = 0;

    const checkedIndexes = new Set();
    for (let firstPersonIndex = 0; firstPersonIndex < preferences.length; firstPersonIndex++) {
        if (checkedIndexes.has(firstPersonIndex)) continue;
        
        let secondPersonIndex = preferences[firstPersonIndex] - 1;
        let thirdPersonIndex = preferences[secondPersonIndex] - 1;
        let fourthPersonIndex = preferences[thirdPersonIndex] - 1;

        if (thirdPersonIndex !== firstPersonIndex && fourthPersonIndex === firstPersonIndex) {
            counter++;

            checkedIndexes.add(firstPersonIndex);
            checkedIndexes.add(secondPersonIndex);
            checkedIndexes.add(thirdPersonIndex);
        }

        if (checkedIndexes.size === preferences.length) break;
    }

    return counter;
};
