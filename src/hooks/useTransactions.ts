import {TransactionForm, TransactionsArray} from "../types/form.types";
import {useEffect, useState} from "react";
import {
  getTransactions,
  addTransaction as addTransactionStorage,
  deleteTransaction,
  updateTransaction as updateTransactionStorage
} from "../storage/storage";

interface IUseTransactions {
  transactions: TransactionsArray;
  isLoading: boolean;
  addTransaction: (transaction: TransactionForm) => Promise<void>;
  removeTransaction: (id: string) => void;
  updateTransaction: (id: string, updatedTransaction: TransactionForm) => void;
  refreshTransactions: () => Promise<void>;
}

export const useTransactions = (): IUseTransactions => {
  const [transactions, setTransactions] = useState<TransactionsArray>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadTransactions = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const storedTransactions = await getTransactions();
      setTransactions(storedTransactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTransactions().then();
  }, []);

  const addTransaction = async (transaction: TransactionForm) => {
    try {
      const updatedTransactions = await addTransactionStorage(transaction);
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const removeTransaction = async (id: string) => {
    try {
      const updatedTransactions = await deleteTransaction(id);
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const updateTransaction = async (id: string, updatedTransaction: TransactionForm) => {
    try {
      const transactionToUpdate = {...updatedTransaction, id};
      const updatedTransactions = await updateTransactionStorage(id, transactionToUpdate);
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error("Error updating transaction:", error);
    }
  };

  const refreshTransactions = async (): Promise<void> => {
    await loadTransactions();
  }

  return {
    transactions,
    isLoading,
    addTransaction,
    removeTransaction,
    updateTransaction,
    refreshTransactions,
  };

}