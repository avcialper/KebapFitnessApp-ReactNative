import React from "react"
import {View, Text, StyleSheet} from "react-native"
import Button from "../components/Button"

const WelcomeScreen=({navigation}) =>{

    function goToMemberSign(){
        navigation.navigate('MemberSign')
    }

    return(
        <View style={styles.container} >
            <Text style={styles.header} >kebap-fitness-salonu</Text>
            <Button text='Üye Kaydı Oluştur' onPress={goToMemberSign} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#182937'
    },
    header: {
        color: '#25fedf',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    }
})

export default WelcomeScreen