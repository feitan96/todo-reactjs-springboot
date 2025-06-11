import type React from 'react';
import UserTable from '../components/UserTable';
import useUser from '../hooks/useUser';

const UserManagement: React.FC = () => {
    const { users, loading, error } = useUser();

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">User Management</h1>
            </div>
            <UserTable users={users} />
        </div>
    );
};

export default UserManagement;