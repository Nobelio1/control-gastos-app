import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Transaction, TransactionForm, TransactionsArray, TransactionType} from '../types/form.types';

interface TransactionState {
  transactions: TransactionsArray;
  isLoading: boolean;
  error: string | null;

  addTransaction: (transaction: TransactionForm) => void;
  deleteTransaction: (id: string) => void;
  updateTransaction: (id: string, updates: TransactionForm) => void;
  setTransactions: (transactions: Transaction[]) => void;
  clearError: () => void;
  setLoading: (loading: boolean) => void;

  totalIncome: number;
  totalExpense: number;
  balance: number;
}

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactions: [],
      isLoading: false,
      error: null,

      addTransaction: (transactionForm: TransactionForm) => {
        const newTransaction: Transaction = {
          ...transactionForm,
          id: Math.random().toString(36).substring(2, 15),
          date: new Date().toISOString(),
        };

        set((state) => ({
          transactions: [newTransaction, ...state.transactions],
          error: null,
        }));
      },

      deleteTransaction: (id: string) => {
        set((state) => ({
          transactions: state.transactions.filter((transaction) => transaction.id !== id),
          error: null,
        }));
      },

      updateTransaction: (id: string, updates: TransactionForm) => {
        set((state) => ({
          transactions: state.transactions.map((transaction) =>
            transaction.id === id ? {...transaction, ...updates} : transaction
          ),
          error: null,
        }));
      },

      setTransactions: (transactions: Transaction[]) => {
        set({transactions, error: null});
      },

      clearError: () => set({error: null}),

      setLoading: (loading: boolean) => set({isLoading: loading}),

      get totalIncome() {
        return get().transactions
          .filter(t => t.type === TransactionType.INCOME)
          .reduce((sum, t) => sum + t.amount, 0);
      },

      get totalExpense() {
        return get().transactions
          .filter(t => t.type === TransactionType.EXPENSE)
          .reduce((sum, t) => sum + t.amount, 0);
      },

      get balance() {
        return get().totalIncome - get().totalExpense;
      },
    }),
    {
      name: 'transaction-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export const selectTransactions = (state: TransactionState) => state.transactions;
export const selectIsLoading = (state: TransactionState) => state.isLoading;
export const selectError = (state: TransactionState) => state.error;
export const selectTotals = (state: TransactionState) => ({
  income: state.totalIncome,
  expense: state.totalExpense,
  balance: state.balance,
});