export function calculateDistance(x: number, y: number): number {
    const distance = Math.sqrt(x * x + y * y);
    return distance;
}