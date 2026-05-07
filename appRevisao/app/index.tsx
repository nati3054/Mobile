import {View, Text, FlatList, StyleSheet} from 'react-native';


export default function Index() {
    return (
        <FlatList data={[{id: '1', name: 'Azul'}, {id: '2', name: 'Verde'}]} keyExtractor={(item)=>item.id} renderItem={({item})=>(
            <Text style={styles.texto}>
                {item.name}
            </Text>
        )}/>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7086da",
    },
    texto: {
        fontSize: 30,
        color: "#faf3f3",
        fontWeight: "bold",

    }
})