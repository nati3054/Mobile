import {DB} from '../../app/database';
import {Aluno} from '../types/Aluno';

export async function listarAlunos(db: DB): Promise<Aluno[]> {
    return db.getAllAsync<Aluno>('SELECT * FROM alunos ORDER BY id DESC');
}

export async function  adicionarAlunoDB(
    db: DB,
    nome: string,
    email: string
): Promise<void> {
    await db.runAsync('INSERT INTO alunos (nome, email) VALUES (?, ?)', [nome, email]);
   
}

export async function removerAlunoDB(db: DB, id: number): Promise<void> {
    await db.runAsync('DELETE FROM alunos WHERE id = ?', [id]);
}