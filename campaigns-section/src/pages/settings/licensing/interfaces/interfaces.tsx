interface DataType {
  account_count: null | string | number;
  created_at: string;
  expire_date: string | null;
  extended: null | string;
  id: number;
  invoice: string;
  paid_amount: number;
  status: number | string;
  type: string;
}

export type { DataType };
