import React from 'react';
import { Modal, Descriptions } from 'antd';
import type { Character } from '../types/character';

interface Props {
  visible: boolean;
  character: Character | null;
  onClose: () => void;
}

const CharacterDetailsModal: React.FC<Props> = ({ visible, character, onClose }) => {
  if (!character) return null;

  return (
    <Modal open={visible} title="Character Details" onCancel={onClose} footer={null}>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Name">{character.name}</Descriptions.Item>
        <Descriptions.Item label="Description">{character.description}</Descriptions.Item>
        <Descriptions.Item label="Type">{character.type}</Descriptions.Item>
        <Descriptions.Item label="Classification">{character.classification}</Descriptions.Item>
        <Descriptions.Item label="Sprite Path">{character.spritePath}</Descriptions.Item>
        <Descriptions.Item label="Base Health">{character.baseHealth}</Descriptions.Item>
        <Descriptions.Item label="Base Attack">{character.baseAttack}</Descriptions.Item>
        <Descriptions.Item label="Base Magic">{character.baseMagic}</Descriptions.Item>
        <Descriptions.Item label="Base Physical Defense">{character.basePhysicalDefense}</Descriptions.Item>
        <Descriptions.Item label="Base Magical Defense">{character.baseMagicalDefense}</Descriptions.Item>
        <Descriptions.Item label="Base Speed">{character.baseSpeed}</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default CharacterDetailsModal;