import React, { useState } from "react";
import { useCharacters } from "./hooks/useCharacter";
import CharacterTable from "./components/CharacterTable";
import CharacterDetailsModal from "./components/CharacterDetailsModal";
import AppButton from "../../components/button/button";
import CharacterCreateForm from "./components/CharacterCreateForm";
import { createCharacter } from "./services/characterService";

const CharacterMaster: React.FC = () => {
  const { characters, loading, error } = useCharacters();
  const [showCreate, setShowCreate] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [viewCharacter, setViewCharacter] = useState(null);

  // Refetch characters after creation
  const refetchCharacters = () => setRefresh((r) => r + 1);

  return (
    <div>
      <h1>Character Master</h1>
      <AppButton type="primary" onClick={() => setShowCreate(true)}>
        Create Character
      </AppButton>
      <CharacterCreateForm
        visible={showCreate}
        onCancel={() => setShowCreate(false)}
        onCreate={async (values) => {
          await createCharacter(values);
          setShowCreate(false);
          refetchCharacters();
        }}
      />
      <CharacterTable
        characters={characters}
        onView={setViewCharacter}
        onEdit={(char) => {
          /* TODO: implement edit modal */
        }}
      />
      <CharacterDetailsModal
        visible={!!viewCharacter}
        character={viewCharacter}
        onClose={() => setViewCharacter(null)}
      />
    </div>
  );
};

export default CharacterMaster;
