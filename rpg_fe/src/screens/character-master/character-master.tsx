import React from 'react';
import { useCharacters } from './hooks/useCharacter';
import CharacterTable from './components/CharacterTable';

const CharacterMaster: React.FC = () => {
  const { characters, loading, error } = useCharacters();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Character Master</h1>
      <CharacterTable characters={characters} />
    </div>
  );
};

export default CharacterMaster;