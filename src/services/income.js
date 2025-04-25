import { apiClient } from "./config";

export const apiAddIncome = async (payload) =>
  apiClient.post("/api/income", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiGetAllIncome = async (payload) =>
  apiClient.get("/api/incomes", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiUpdateIncome = async (id, payload) =>
  apiClient.put(`/api/income/${id}`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiDeleteIncome = async (id) =>
  apiClient.delete(`/api/income/${id}`, {});
