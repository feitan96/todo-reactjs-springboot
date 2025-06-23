import axios from 'axios';
import type { Character } from '../types/character';

const API_BASE = '/api/v1/characters';

// Retrieves all characters from the API and returns them as an array.
export const getAllCharacters = async (): Promise<Character[]> => {
  const response = await axios.get<Character[]>(API_BASE);
    return Array.isArray(response.data) ? response.data : [];
};

// Fetch a single character by ID
export const createCharacter = async (
  character: Omit<Character, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Character> => {
  const endpoint = character.type === 'HERO' ? `${API_BASE}/hero` : `${API_BASE}/villain`;
  const response = await axios.post<Character>(endpoint, character);
  return response.data;
};


// Fetch a single character by ID
export const updateCharacter = async (
  id: number,
  character: Omit<Character, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Character> => {
  const response = await axios.put<Character>(`/api/v1/characters/${id}`, character);
  return response.data;
};

// Soft deleted a character by ID
export const softDeleteCharacter = async (id: number) => {
  await axios.patch(`${API_BASE}/${id}/soft-delete`);
};

// Permanently delete a character by ID
export const hardDeleteCharacter = async (id: number) => {
  await axios.delete(`${API_BASE}/${id}`);
};
