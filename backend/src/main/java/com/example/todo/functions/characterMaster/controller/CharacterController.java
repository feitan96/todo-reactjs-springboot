package com.example.todo.controller;


import com.example.todo.functions.characterMaster.dto.CharacterDTO;
import com.example.todo.functions.characterMaster.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/characters")
public class CharacterController {

    private final CharacterService characterService;

    @Autowired
    public CharacterController(CharacterService characterService) {
        this.characterService = characterService;
    }

    // Endpoint to retrieve all characters
    @GetMapping
    public ResponseEntity<List<CharacterDTO>> getAllCharacters() {
        List<CharacterDTO> characters = characterService.getAllCharacters();
        return new  ResponseEntity<>(characters, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Page<CharacterDTO>> getAllCharactersPaginated(
            @RequestParam int page,
            @RequestParam int size,
            @RequestParam String sortBy,
            @RequestParam String sortDirection) {
        Page<CharacterDTO> characterPage = characterService.getAllCharactersPaginated(page, size, sortBy, sortDirection);
        return new ResponseEntity<>(characterPage, HttpStatus.OK);
    }
}
