import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOFZ } from "../../redux/ofzActions";
import { RootState, AppDispatch } from "../../redux/store";
import { OFZ } from "../../api/downloadOFZ";
import s from "./Table.module.css";

export function Table() {
	const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.ofz);
	console.log(data)
  useEffect(() => {dispatch(fetchOFZ())}, [dispatch]);

  if (loading) {
    return <p>Загрузка данных...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

	return (
		<div className={s.wrapper}>
			<table className={s.table}>
				<thead>
					<tr>
						<th>№</th>
						<th>Название</th>
						<th>Погашение</th>
						<th>Лет до погаш.</th>
						<th>Доходн</th>
						<th>Год. куп. дох.</th>
						<th>цена</th>
						<th>Объем, млн руб</th>
						<th>Купон, руб.</th>
						<th>Частота, раз в год</th>
						<th>Дата купона</th>
					</tr>
				</thead>

				<tbody>
					{data.map((ofz : OFZ, index: number) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{ofz.name}</td>
							<td>{ofz.repayment}</td>
							<td>{ofz.yearsUntilRepayment}</td>
							<td>{ofz.profitabilityYTM} %</td>
							<td>{ofz.annualProfitability} %</td>
							<td>{ofz.price}</td>
							<td>{ofz.volumeOfz}</td>
							<td>{ofz.couponPrice}</td>
							<td>{ofz.payoutFrequency}</td>
							<td>{ofz.dataCoupon}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}