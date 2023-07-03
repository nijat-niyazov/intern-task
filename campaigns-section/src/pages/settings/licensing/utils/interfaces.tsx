interface DataType {
  key: string;
  id: number;
  extended: string;
  device_account: string;
  type: string;
  dataIndex?: string;
  purchase_date: string;
  amount: number;
  status: string[];
}

export type {DataType}