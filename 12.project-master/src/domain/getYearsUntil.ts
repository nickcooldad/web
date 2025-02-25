export function getYearsUntil(targetDate: string): number {
	const now = new Date();
	const target = new Date(targetDate);
	const diffMilliseconds = target.getTime() - now.getTime();
	const diffYears = diffMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Учитываем високосные годы
	return parseFloat(diffYears.toFixed(1)); // Округляем до 1 знака
}

// 1000 — миллисекунды в одной секунде.
// 60 — секунд в одной минуте.
// 60 — минут в одном часе.
// 24 — часов в одном дне.
// 365.25 — среднее количество дней в году (учитывая високосные годы)
// обычный год = 365 дней.
// високосный год = 366 дней (раз в 4 года).
// в среднем: (3 × 365 + 1 × 366) ÷ 4 = 365.25 дней в году.