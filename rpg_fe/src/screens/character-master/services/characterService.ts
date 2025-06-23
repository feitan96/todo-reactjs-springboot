import axios from 'axios';
import type { Character } from '../types/character';

const API_BASE = '/api/v1/characters';

export const getAllCharacters = async (): Promise<Character[]> => {
  const response = await axios.get<Character[]>(API_BASE);
    return Array.isArray(response.data) ? response.data : [];

};