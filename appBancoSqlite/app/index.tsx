import * as Sqlite from 'expo-sqlite';
import react, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert, ActivityIndicator} from 'react-native';
import { getDB } from '../app/database';
import { AlunoForm } from '../src/components/AlunoForm';
import { AlunoList } from '../src/components/AlunoList';
import { Aluno } from '../src/types/Aluno';
import {listarAlunos, adicionarAlunoDB, removerAlunoDB} from '../src/repositories/AlunoRepository';

export default function HomeScreen() {
    const [db, setDb] = useState<Sqlite.SQLiteDatabase | null>(null)
    const [alunos, setAlunos] = useState<Aluno[]>([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [loanding, setLoanding] = useState(true)

    useEffect(() => {
      getDB()
        .then(banco => {
          setDb(banco);
            return listarAlunos(banco).then(setAlunos);
        })
        .finally(() => setLoanding(false));
    }, [])
};


