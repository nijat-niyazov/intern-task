interface PaymentDataType {
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

interface LicenseManageDataType {
  // key: React.Key | string;
  name: string;
  username: string;
  branch: string;
  last_login: string | Date;
  status: string[] | string;
  actions?: null;
  id: number | string;
  any_problem: boolean;
  is_offline_mode: boolean;
}

export type { LicenseManageDataType, PaymentDataType };
