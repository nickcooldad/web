
export function getLastPageNumber(count, size) {
    return Math.ceil(count / size) - 1;
}