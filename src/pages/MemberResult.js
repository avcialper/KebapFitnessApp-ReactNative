import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MemberResult = ({ route }) => {

    const { user } = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.title}>kebap-fitness-salonu</Text>
            <Text style={styles.text}>Ad: {user.name}</Text>
            <Text style={styles.text}>Soyad: {user.surname}</Text>
            <Text style={styles.text}>Yaş: {user.age}</Text>
            <Text style={styles.text}>Telefon Numarası: {user.phoneNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#182937',
        paddingVertical: 40,
        padding: 40,
        justifyContent: 'center'
    },
    title: {
        color: '#25fedf',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        fontSize: 20,
        color: '#febf5e',
        fontWeight: 'bold',
        marginVertical: 10
    }
})

export default MemberResult