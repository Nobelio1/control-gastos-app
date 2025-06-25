export interface MonthlyStats {
  month: string;
  year: number;
  monthNumber: number;
  income: number;
  expense: number;
  balance: number;
  transactionCount: number;
}

export type MonthlyStatsArray = MonthlyStats[];