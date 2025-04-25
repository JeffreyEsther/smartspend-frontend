import { apiClient } from "./config";



export const apiAddExpense = async (payload) =>
  apiClient.post("/api/expense", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });


  export const apiGetAllExpense = async (payload) =>
    apiClient.get("/api/expenses", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });