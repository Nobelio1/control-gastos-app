export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense'
}

export interface TransactionFormData {
  amount: number;
  description: string;
  type: TransactionType;
}