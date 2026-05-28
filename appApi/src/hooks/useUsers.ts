import {useState, useEffect} from 'react';
import { User } from '../types/User';
import { fetchUsers } from '../services/api';

interface UseUsersReturn {
    users: User[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useUsers(): UseUsersReturn {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    async function loadUsers() {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchUsers();
            setUsers(data);
        } catch (err) {
            setError((err instanceof Error) ? err.message : 'Erro desconhecido');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return { users, loading, error, refetch: loadUsers };
}
