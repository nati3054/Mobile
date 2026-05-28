import {User} from '../types/User';

const BaseURL = 'https://6a17753e1878294b597b6553.mockapi.io';
export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(`${BaseURL}/dados`);
    if (!response.ok) {
        throw new Error('Erro ao chamar alunos');
    }
    const data: User[] = await response.json();
    return data;
}