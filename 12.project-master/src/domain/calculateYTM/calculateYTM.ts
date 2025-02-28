export function calculateYTM(faceValue: number, marketPrice: number, couponValue: number, timeToMaturity: number) {
    const annualCoupon = couponValue; // Годовая купонная выплата
    const priceDifference = faceValue - marketPrice; // Разница между номиналом и ценой
    const averagePrice = (faceValue + marketPrice) / 2; // Средняя цена

    // Упрощенная формула YTM
    const ytm = ((annualCoupon + (priceDifference / timeToMaturity)) / averagePrice) * 100;

    if (ytm < 0) return 0; // Если YTM отрицательный, возвращаем 0
    if (ytm > 100) return 100
    return +ytm.toFixed(2)
} 