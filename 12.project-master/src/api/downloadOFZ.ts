import { getYearsUntil } from "../domain/getYearsUntil.ts";
import { transformMoexResponse } from "../domain/transformMoexResponse.ts";
import { calculateYTM } from "../domain/calculateYTM/calculateYTM.ts";
interface OFZresponse {
	SHORTNAME: string;
	MATDATE: string;
	COUPONVALUE: number;
	COUPONPERIOD: number;
	FACEVALUE: number;
	LOTVALUE: number;
	PREVPRICE: number
}

// Тип для выходных данных после преобразования
interface OFZ {
	name: string;
	repayment: string;
	yearsUntilRepayment: number;
	annualProfitability: number;
	profitabilityYTM: number
}

export function downloadOFZ(): Promise<OFZ[]> {
	return fetch('https://iss.moex.com/iss/engines/stock/markets/bonds/boards/TQOB/securities.json')
		.then((response) => response.json())
		.then((data) => {
			const transformData: OFZresponse[] = transformMoexResponse(data.securities);
			return transformData.map((ofzInfo) => {
				return {
					name: ofzInfo.SHORTNAME,
					repayment: ofzInfo.MATDATE.split('-').reverse().join('.'),
					yearsUntilRepayment: getYearsUntil(ofzInfo.MATDATE),
					annualProfitability: parseFloat((ofzInfo.COUPONVALUE * (365 / ofzInfo.COUPONPERIOD) / ofzInfo.FACEVALUE * 100).toFixed(2)),
					profitabilityYTM: calculateYTM(1000, 94.788, 44.88, 0.38)
				};
			})
		}
		);
}
//calculateYTM(ofzInfo.LOTVALUE, ofzInfo.PREVPRICE, ofzInfo.COUPONVALUE, getYearsUntil(ofzInfo.MATDATE))
// https://iss.moex.com/iss/engines/stock/markets/shares/securities/columns.xml
