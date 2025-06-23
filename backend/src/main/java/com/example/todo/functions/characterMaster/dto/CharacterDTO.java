package com.example.todo.functions.characterCrud.dto;

import lombok.Data;
import java.sql.Timestamp;

@Data
public class CharacterDTO {
    private Long id;
    private String name;
    private String description;
    private String type;
    private String classification;
    private String spritePath;

    private Integer baseHealth;
    private Integer baseAttack;
    private Integer baseMagic;
    private Integer basePhysicalDefense;
    private Integer baseMagicalDefense;
    private Integer baseSpeed;

    private Timestamp createdAt;
    private Timestamp updatedAt;
}
