import React from 'react';
import type { Character } from '../types/character';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { Tooltip, Button } from 'antd';

interface Props {
  characters: Character[];
  onView: (character: Character) => void;
  onEdit: (character: Character) => void;
}

const CharacterTable: React.FC<Props> = ({ characters, onView, onEdit }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Classification</th>
        <th>Health</th>
        <th>Attack</th>
        <th>Magic</th>
        <th>Physical Defense</th>
        <th>Magical Defense</th>
        <th>Speed</th>
        <th>Actions</th>
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
          <td>{char.basePhysicalDefense}</td>
          <td>{char.baseMagicalDefense}</td>
          <td>{char.baseSpeed}</td>
          <td>
            <Tooltip title="View Details">
              <Button
                icon={<EyeOutlined />}
                size="small"
                onClick={() => onView(char)}
                style={{ marginRight: 8 }}
              />
            </Tooltip>
            <Tooltip title="Edit">
              <Button
                icon={<EditOutlined />}
                size="small"
                onClick={() => onEdit(char)}
              />
            </Tooltip>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CharacterTable;