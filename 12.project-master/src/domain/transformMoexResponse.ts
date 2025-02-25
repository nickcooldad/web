type MoexResponse = {
  metadata: Record<string, { type: string; bytes?: number; max_size?: number }>;
  columns: string[];
  data: (string | number | null)[];
};

type OFZRaw = Record<string, string | number | null>;

export function transformMoexResponse(response: MoexResponse): OFZRaw[] {
  const { columns, data } = response;

  return data.map((row) => {
    const result: OFZRaw = {};
    columns.forEach((colName, index) => {
      result[colName] = row[index];
    });
    console.log(result)
    return result;
  });
}