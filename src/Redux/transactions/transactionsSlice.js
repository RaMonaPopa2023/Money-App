import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import {
  fetchTransactions,
  deleteItem,
  editItem,
  addTransaction,
  fetchCategories,
} from './transactionsOperations';

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    isLoading: false,
    error: null,
    categories: [],
    categoriesSummary: [
      {
        name: '',
        type: '',
        total: 0,
      },
    ],
    incomeSummary: 0,
    expenseSummary: 0,
    periodTotal: 0,
    year: 0,
    month: 0,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.categories = action.payload;
    },
    clearSelectedCategory: state => {
      state.value = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteItem.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = state.transactions.filter(
          item => item._id !== action.meta.arg
        );
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editItem.pending, state => {
        state.isLoading = true;
      })
      .addCase(editItem.fulfilled, (state, action) => {
        const index = state.transactions.findIndex(
          transaction => transaction._id === action.meta.arg.id
        );

        if (index !== -1) {
          state.transactions[index] = {
            ...state.transactions[index],
            ...action.payload,
          };
        }
      })
      .addCase(editItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const persistConfig = {
  key: 'transactions',
  storage,
  whitelist: ['value', 'transactions'],
};

const transactionReducer = transactionSlice.reducer;
export const PersistedTransactionReducer = persistReducer(
  persistConfig,
  transactionReducer
);
export const { setSelectedCategory } = transactionSlice.actions;
