export const calculateVolumeofz = (ofzQuantity: number, price: number) => {
    return +(ofzQuantity * price / 1000000).toFixed(2)
}