package com.example.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.todo.entity.User;
import com.example.todo.repository.UserRepository;

@Service
@Transactional
public class UserService {  

    @Autowired
    private UserRepository userRepository;
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(String id, User user) {
        if (userRepository.existsById(id)) {
            user.setId(id);
            return userRepository.save(user);
        }
        return null;
    }

    public void softDeleteUser(String id) {
        if (userRepository.existsById(id)) {
            userRepository.softDeleteUserById(id);
        }
    }
    
    public void hardDeleteUser(String id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        }
    }

}
