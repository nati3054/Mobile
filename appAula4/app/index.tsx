import {View, Text, Button, FlatList, StyleSheet} from "react-native";
import {router} from "expo-router";

export default function Index() {
    const frutas = ["Banana", "Maçã", "Laranja", "Abacaxi", "Uva", "Melancia", "Manga", "Pera", "Morango", "Cereja", "Kiwi", "Limão", "Maracujá", "Acerola", "Goiaba", "Abacate", "Framboesa", "Amora", "Mirtilo", "Coco"];

    return (
        <FlatList data={frutas} keyExtractor={(item)=>item} renderItem={({item})=>(
            <View style={styles.card}>
                <Text style={styles.texto}>{item}</Text>
            </View>
        )}>

        </FlatList>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 12,
        marginVertical: 8,
        borderRadius: 20,
        elevation: 3,
        shadowColor: "#373434",
        shadowRadius: 6,

    },
    texto: {
        fontSize: 35,
    }
})
        