// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];

    const arrNew = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = i % 2 != 0 ? [...matrix[i]].reverse() : matrix[i];
        arrNew.push(...row);
    }

    return arrNew;
};
