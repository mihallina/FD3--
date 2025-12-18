import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyName: "",
  clients: [],
  filter: "all",
  loading: false,
  error: null,
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCompanyData: (state, action) => {
      state.companyName = action.payload.companyName;
      state.clients = action.payload.clients;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    addClient: (state) => {
      const newId =
        state.clients.reduce((max, c) => Math.max(max, c.id), 0) + 1;
      state.clients.push({
        id: newId,
        fam: "[новый]",
        im: "",
        otch: "",
        balance: 0,
        isEditing: true,
      });
    },

    editClient: (state, action) => {
      const index = state.clients.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.clients[index] = action.payload;
      }
    },

    deleteClient: (state, action) => {
      state.clients = state.clients.filter((c) => c.id !== action.payload);
    },
  },
});

export const {
  setLoading,
  setError,
  setCompanyData,
  setFilter,
  addClient,
  editClient,
  deleteClient,
} = clientsSlice.actions;

export default clientsSlice.reducer;
