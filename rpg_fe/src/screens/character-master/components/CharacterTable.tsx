import React from 'react';
import type { Character } from '../types/character';

interface Props {
  characters: Character[];
}

const CharacterTable: React.FC<Props> = ({ characters }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Classification</th>
        <th>Base Health</th>
        <th>Base Attack</th>
        <th>Base Magic</th>
        {/* Add more columns as needed */}
      </tr>
    </thead>
    <tbody>
      {characters.map((char) => (
        <tr key={char.id}>
          <td>{char.name}</td>
          <td>{char.type}</td>
          <td>{char.classification}</td>
          <td>{char.baseHealth}</td>
          <td>{char.baseAttack}</td>
          <td>{char.baseMagic}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CharacterTable;