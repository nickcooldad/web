import { getYearsUntil } from "../domain/getYearsUntil.ts";
import { transformMoexResponse } from "../domain/transformMoexResponse.ts";

interface OFZRaw {
	SHORTNAME: string;
	SETTLEDATE: string;
	COUPONVALUE: number;
	COUPONPERIOD: number;
	FACEVALUE: number;
}

// Тип для выходных данных после преобразования
interface OFZ {
	name: string;
	repayment: string;
	yearsUntilRepayment: number;
	profitability: number;
}

export function downloadOFZ(): Promise<OFZ[]> {
	return fetch('https://iss.moex.com/iss/engines/stock/markets/bonds/boards/TQOB/securities.json')
		.then((response) => response.json())
		.then((data) => {
			const transformData: OFZRaw[] = transformMoexResponse(data.securities);
			return transformData.map((ofzInfo) => {
				return {
					name: ofzInfo.SHORTNAME,
					repayment: ofzInfo.SETTLEDATE.split('-').reverse().join('.'),
					yearsUntilRepayment: getYearsUntil(ofzInfo.SETTLEDATE),
					profitability: parseFloat((ofzInfo.COUPONVALUE * Math.floor(365 / ofzInfo.COUPONPERIOD) / ofzInfo.FACEVALUE * 100).toFixed(2)),
				};
			})
		}
	);
}

// https://iss.moex.com/iss/engines/stock/markets/shares/securities/columns.xml