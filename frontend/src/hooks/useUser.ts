import { useState, useEffect } from 'react';
import type { User } from '../types/User';
import { userService } from '../services/userService';

export const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);    const fetchUsers = async () => {
        try {
            setLoading(true);
            const data = await userService.getAllUsers();
            console.log('Fetched users:', data); // Debug log
            setUsers(Array.isArray(data) ? data : []);
            setError(null);
        } catch (err) {
            console.error('Error fetching users:', err); // Debug log
            setError(err instanceof Error ? err.message : 'Failed to fetch users');
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        users,
        loading,
        error,
        refreshUsers: fetchUsers
    };
};

export default useUser;