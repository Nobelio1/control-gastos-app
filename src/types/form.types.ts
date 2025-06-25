export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense'
}

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  type: TransactionType;
  date: string;
}

export type TransactionForm = Omit<Transaction, 'id' | 'date'>;
export type TransactionsArray = Transaction[];