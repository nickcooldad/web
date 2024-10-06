export function definitionOnYear(day) {
    const lastNumber = day.toString().slice(-1);

    if (lastNumber === '1' && day.toString() !== '11') {
        return 'год';
    }

    if ((lastNumber === '2' || lastNumber === '3' || lastNumber === '4') && !(day >= 12 && day <= 14)) {
        return 'года';
    }

    return 'лет';
} 
