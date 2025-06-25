import AsyncStorage from "@react-native-async-storage/async-storage";
import {Transaction, TransactionForm, TransactionsArray} from "../types/form.types";

const TRANSACTIONS_KEY = '@transactions';

export const storeTransactions = async (transactions: TransactionsArray): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(transactions);
    await AsyncStorage.setItem(TRANSACTIONS_KEY, jsonValue);
  } catch (e) {
    console.error("Error storing transactions:", e);
    throw e;
  }
}

export const getTransactions = async (): Promise<TransactionsArray> => {
  try {
    const jsonValue = await AsyncStorage.getItem(TRANSACTIONS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error retrieving transactions:", e);
    throw e;
  }
}

export const addTransaction = async (transaction: TransactionForm): Promise<TransactionsArray> => {
  try {
    const transactions = await getTransactions();
    const newTransaction: Transaction = {
      ...transaction,
      id: Math.random().toString(36).substring(2, 15),
      date: new Date().toISOString(),
    };
    const updatedTransactions = [...transactions, newTransaction];
    await storeTransactions(updatedTransactions);
    return updatedTransactions;
  } catch (e) {
    console.error("Error al agregar transaccion: ", e);
    throw e;
  }
}

export const deleteTransaction = async (id: string): Promise<TransactionsArray> => {
  try {
    const transactions = await getTransactions();
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    await storeTransactions(updatedTransactions);
    return updatedTransactions;
  } catch (e) {
    console.error("Error al eliminar transaccion: ", e);
    throw e;
  }
}

export const updateTransaction = async (updatedTransaction: Transaction): Promise<TransactionsArray> => {
  try {
    const transactions = await getTransactions();
    const index = transactions.findIndex(transaction => transaction.id === updatedTransaction.id);
    if (index === -1) throw new Error("Transaction not found");

    //todo: Validar que el updatedTransaction tenga los campos necesarios
    transactions[index] = updatedTransaction;
    await storeTransactions(transactions);
    return transactions;
  } catch (e) {
    console.error("Error al actualizar transaccion: ", e);
    throw e;
  }
}