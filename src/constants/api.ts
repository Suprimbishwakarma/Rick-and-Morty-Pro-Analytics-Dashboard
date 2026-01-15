import axios from "axios";
import {
  type ApiResponse,
  type Character,
  type Episode,
  type FilterParams,
} from "../types/dataTypes";

// base URL definition for the API
const API_BASE_URL = "https://rickandmortyapi.com";

// axios instance creation
const api = axios.create({
  baseURL: API_BASE_URL,
});

const normalizeToArray = <T>(data: T | T[]): T[] => {
  if (Array.isArray(data)) {
    return data;
  }
  return [data];
};

const characterData = {
  // Fetch all characters
  getAll: async (params: FilterParams = {}) => {
    // GET request to /character
    const response = await api.get<ApiResponse<Character>>("/character", {
      params: params,
    });
    return response.data;
  },

  // Fetch a single character by ID
  getById: async (id: number) => {
    const response = await api.get<Character>(`/character/${id}`);
    return response.data;
  },

  // Fetch multiple character by a list of IDs
  getMultipleByIds: async (ids: number[]) => {
    const response = await api.get<Character[] | Character>(
      `/character/${ids.join(",")}`
    );
    return normalizeToArray(response.data);
  },
};

const episodeData = {
  // Fetch multiple episodes by a list of IDs
  getMultipleByIds: async (ids: number[]) => {
    if (ids.length === 0) return [];

    const response = await api.get<Episode[] | Episode>(
      `/episode/${ids.join(",")}`
    );
    return normalizeToArray(response.data);
  },
};

export { characterData, episodeData };
