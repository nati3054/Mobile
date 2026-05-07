import * as Sqlite from 'expo-sqlite';

export type DB = Sqlite.SQLiteDatabase;

export async function getDB(): Promise<DB> {
    
        const db = await Sqlite.openDatabaseAsync('escola.db');
        await db.execAsync(`CREATE TABLE IF NOT EXISTS alunos (
            id INTEGER Primary Key AutoIncrement,
            nome TEXT NOT NULL,
            email TEXT NOT NULL
        )
        `);

        return db;




}

