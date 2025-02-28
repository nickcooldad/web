import { getYearsUntil } from "../domain/getYearsUntil.ts";
import { transformMoexResponse } from "../domain/transformMoexResponse.ts";
import { calculateYTM } from "../domain/calculateYTM/calculateYTM.ts";
import { calculateVolumeofz } from "../domain/calculateVolumeOfz/calculateVolumeOfz.ts";
interface OFZresponse {
	SHORTNAME: string;
	MATDATE: string;
	COUPONVALUE: number;
	COUPONPERIOD: number;
	FACEVALUE: number;
	LOTVALUE: number;
	PREVPRICE: number;
	ISSUESIZE: number;
	NEXTCOUPON: string
}

// Тип для выходных данных после преобразования
export interface OFZ {
	name: string;
	repayment: string;
	yearsUntilRepayment: number;
	annualProfitability: number;
	profitabilityYTM: number;
	price: number;
	volumeOfz: number;
	couponPrice: number;
	payoutFrequency: number;
	dataCoupon: string
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
					profitabilityYTM: calculateYTM(1000, 94.788, 44.88, 0.38),
					price: ofzInfo.PREVPRICE !== null ? ofzInfo.PREVPRICE : '-',
					volumeOfz: calculateVolumeofz(ofzInfo.ISSUESIZE, ofzInfo.PREVPRICE),
					couponPrice: ofzInfo.COUPONVALUE,
					payoutFrequency: Math.floor(365 / ofzInfo.COUPONPERIOD),
					dataCoupon: ofzInfo.NEXTCOUPON.split('-').reverse().join('.')
				};
			})
		}
		);
}
//calculateYTM(ofzInfo.LOTVALUE, ofzInfo.PREVPRICE, ofzInfo.COUPONVALUE, getYearsUntil(ofzInfo.MATDATE))
// https://iss.moex.com/iss/engines/stock/markets/shares/securities/columns.xml
