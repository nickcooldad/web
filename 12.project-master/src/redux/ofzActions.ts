import { downloadOFZ } from "../api/downloadOFZ";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchOFZ = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(fetchOFZStart()); // Устанавливаем флаг загрузки
//     const data = await downloadOFZ(); // Загружаем данные
//     dispatch(fetchOFZSuccess(data)); // Записываем их в хранилище
//   } catch (error) {
//     dispatch(fetchOFZFailure("Ошибка загрузки данных"));
//   }
// };

export const fetchOFZ = createAsyncThunk(
  'fetchOFZ',
  async () => {
    const response = await downloadOFZ()
    return response
  },
)

// fetchOFZ.pending
// fetchOFZ.fulfilled
// fetchOFZ.rejected