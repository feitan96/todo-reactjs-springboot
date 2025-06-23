import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/characterService';
import type { Character } from '../types/character';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllCharacters()
      .then(data => {
        console.log('Fetched characters:', data);
        setCharacters(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Failed to fetch characters');
      })
      .finally(() => setLoading(false));
  }, []);

  return { characters, loading, error };
};