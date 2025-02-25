import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOFZ } from "../../redux/ofzActions";
import { RootState, AppDispatch } from "../../redux/store";
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
						<th>Доходность</th>
					</tr>
				</thead>

				<tbody>
					{data.map((ofz, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{ofz.name}</td>
							<td>{ofz.repayment}</td>
							<td>{ofz.yearsUntilRepayment}</td>
							<td>{ofz.profitability} %</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}